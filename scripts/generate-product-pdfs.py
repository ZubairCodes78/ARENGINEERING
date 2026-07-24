import json
import math
import re
import shutil
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "tmp" / "pdfs" / "product-data.json"
OUTPUT_DIR = ROOT / "public" / "brochures"
LOGO = ROOT / "public" / "images" / "logo.png"
PAGE_W, PAGE_H = A4

PRIMARY = colors.HexColor("#082844")
SECONDARY = colors.HexColor("#1479D6")
DARK = colors.HexColor("#344154")
LIGHT = colors.HexColor("#F6F8FB")
BORDER = colors.HexColor("#E1E7EF")
RED = colors.HexColor("#D71920")


def slugify(value):
    value = value.lower().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def product_title(product):
    return re.sub(r"\s*\([^)]*\)\s*$", "", product["name"]).strip()


def document_base_slug(product):
    return f"{slugify(product_title(product))}-{slugify(product['model'])}"


def brochure_filename(product):
    return f"{document_base_slug(product)}-brochure.pdf"


def technical_filename(product):
    return f"{document_base_slug(product)}-technical-specification.pdf"


def image_path(relative):
    return ROOT / "public" / relative.lstrip("/")


def wrap_text(text, font, size, max_width):
    words = str(text).split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, width, font="Helvetica", size=9.5, leading=14, color=DARK):
    c.setFillColor(color)
    c.setFont(font, size)
    lines = wrap_text(text, font, size, width)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_image_cover(c, img, x, y, w, h):
    if not img.exists():
        c.setFillColor(LIGHT)
        c.roundRect(x, y, w, h, 8, fill=1, stroke=0)
        return
    c.drawImage(str(img), x, y, width=w, height=h, preserveAspectRatio=True, anchor="c", mask="auto")


def header_footer(c, company, page_num, title):
    c.setFillColor(colors.white)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(PRIMARY)
    c.rect(0, PAGE_H - 18 * mm, PAGE_W, 18 * mm, fill=1, stroke=0)
    if LOGO.exists():
        c.drawImage(str(LOGO), 16 * mm, PAGE_H - 14 * mm, width=34 * mm, height=10 * mm, preserveAspectRatio=True, mask="auto")
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawRightString(PAGE_W - 16 * mm, PAGE_H - 10.5 * mm, company["name"])

    c.setStrokeColor(BORDER)
    c.line(16 * mm, 14 * mm, PAGE_W - 16 * mm, 14 * mm)
    c.setFillColor(DARK)
    c.setFont("Helvetica", 7.2)
    c.drawString(16 * mm, 9.4 * mm, f"{company['website']}  |  {company['email']}  |  {company['phone']}")
    c.setFont("Helvetica", 6.9)
    c.drawString(16 * mm, 5.5 * mm, "Copyright AL RAHEEM ENGINEERING")
    c.drawRightString(PAGE_W - 16 * mm, 5.5 * mm, f"Page {page_num}")
    c.setTitle(title)
    c.setAuthor("AL RAHEEM ENGINEERING")
    c.setCreator("AL RAHEEM ENGINEERING")


def draw_label(c, text, x, y):
    c.setFillColor(SECONDARY)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x, y, text.upper())


def draw_qr_placeholder(c, x, y, size):
    c.setFillColor(colors.white)
    c.setStrokeColor(BORDER)
    c.roundRect(x, y, size, size, 5, fill=1, stroke=1)
    cells = 7
    cell = size / cells
    c.setFillColor(PRIMARY)
    pattern = {(0, 0), (0, 1), (1, 0), (5, 0), (6, 0), (6, 1), (5, 1), (0, 5), (0, 6), (1, 6), (2, 2), (3, 4), (4, 3), (5, 5)}
    for col, row in pattern:
        c.rect(x + col * cell + 1.4, y + row * cell + 1.4, cell - 2.8, cell - 2.8, fill=1, stroke=0)


def set_metadata(path, title, subject, keywords=None):
    reader = PdfReader(str(path))
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    metadata = {
        "/Title": title,
        "/Author": "AL RAHEEM ENGINEERING",
        "/Subject": subject,
        "/Creator": "AL RAHEEM ENGINEERING",
        "/Producer": "AL RAHEEM ENGINEERING",
    }
    if keywords:
        metadata["/Keywords"] = keywords
    writer.add_metadata(metadata)
    tmp = path.with_suffix(".tmp.pdf")
    with tmp.open("wb") as fh:
        writer.write(fh)
    tmp.replace(path)


def draw_feature_cards(c, items, x, y, card_w, card_h, cols=2):
    for idx, item in enumerate(items):
        col = idx % cols
        row = idx // cols
        cx = x + col * (card_w + 8 * mm)
        cy = y - row * (card_h + 7 * mm)
        c.setFillColor(colors.white)
        c.setStrokeColor(BORDER)
        c.roundRect(cx, cy - card_h, card_w, card_h, 8, fill=1, stroke=1)
        c.setFillColor(SECONDARY)
        c.circle(cx + 7 * mm, cy - 8 * mm, 2.2 * mm, fill=1, stroke=0)
        draw_wrapped(c, item, cx + 13 * mm, cy - 6.4 * mm, card_w - 18 * mm, "Helvetica", 8.8, 12, DARK)


def make_brochure(product, company):
    output = OUTPUT_DIR / brochure_filename(product)
    c = canvas.Canvas(str(output), pagesize=A4)
    title = f"{product['name']} Brochure"

    # Page 1
    header_footer(c, company, 1, title)
    c.setFillColor(PRIMARY)
    c.rect(0, 0, PAGE_W, PAGE_H - 18 * mm, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 28)
    y = PAGE_H - 58 * mm
    for line in wrap_text(product["name"], "Helvetica-Bold", 28, 92 * mm):
        c.drawString(18 * mm, y, line)
        y -= 12 * mm
    c.setFont("Helvetica", 11)
    y -= 3 * mm
    y = draw_wrapped(c, product["shortDescription"], 18 * mm, y, 82 * mm, "Helvetica", 11, 17, colors.HexColor("#D7E3EF"))
    c.setFillColor(SECONDARY)
    c.roundRect(18 * mm, y - 17 * mm, 47 * mm, 10 * mm, 5 * mm, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(41.5 * mm, y - 13.2 * mm, "INDUSTRIAL PACKAGING")
    draw_image_cover(c, image_path(product["images"][0]), 112 * mm, 45 * mm, 80 * mm, 130 * mm)
    c.showPage()

    # Page 2
    header_footer(c, company, 2, title)
    draw_label(c, "Product Overview", 18 * mm, PAGE_H - 34 * mm)
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(18 * mm, PAGE_H - 45 * mm, product_title(product))
    draw_wrapped(c, product["description"], 18 * mm, PAGE_H - 58 * mm, 82 * mm, "Helvetica", 10.2, 15, DARK)
    draw_label(c, "Key Features", 112 * mm, PAGE_H - 34 * mm)
    draw_feature_cards(c, product["features"][:6], 112 * mm, PAGE_H - 43 * mm, 36 * mm, 27 * mm, cols=2)
    draw_label(c, "Applications", 18 * mm, 92 * mm)
    x = 18 * mm
    y = 81 * mm
    for app in product["applications"]:
        c.setFillColor(LIGHT)
        c.setStrokeColor(BORDER)
        width = min(max(stringWidth(app, "Helvetica-Bold", 8.8) + 12 * mm, 28 * mm), 58 * mm)
        if x + width > 102 * mm:
            x = 18 * mm
            y -= 11 * mm
        c.roundRect(x, y, width, 7.5 * mm, 3.7 * mm, fill=1, stroke=1)
        c.setFillColor(PRIMARY)
        c.setFont("Helvetica-Bold", 8.8)
        c.drawCentredString(x + width / 2, y + 2.35 * mm, app)
        x += width + 4 * mm
    draw_label(c, "Benefits", 112 * mm, 101 * mm)
    benefits = [
        "Reliable sealing for production consistency",
        "Designed for industrial duty cycles",
        "Local manufacturing support and spare parts",
        "Configured around product, film and output target",
    ]
    draw_feature_cards(c, benefits, 112 * mm, 90 * mm, 76 * mm, 13 * mm, cols=1)
    c.showPage()

    # Page 3
    header_footer(c, company, 3, title)
    draw_label(c, "Machine Gallery", 18 * mm, PAGE_H - 34 * mm)
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(18 * mm, PAGE_H - 45 * mm, "Production visuals")
    gallery_y = PAGE_H - 126 * mm
    for idx, img in enumerate(product["images"][:3]):
        x = 18 * mm + idx * 60 * mm
        c.setFillColor(LIGHT)
        c.roundRect(x, gallery_y, 52 * mm, 62 * mm, 8, fill=1, stroke=0)
        draw_image_cover(c, image_path(img), x, gallery_y, 52 * mm, 62 * mm)
    draw_label(c, "Technical Highlights", 18 * mm, 87 * mm)
    for idx, spec in enumerate(product["specs"][:8]):
        x = 18 * mm + (idx % 2) * 88 * mm
        y = 75 * mm - (idx // 2) * 17 * mm
        c.setFillColor(LIGHT if idx % 2 == 0 else colors.white)
        c.setStrokeColor(BORDER)
        c.roundRect(x, y, 80 * mm, 12 * mm, 5, fill=1, stroke=1)
        c.setFillColor(PRIMARY)
        c.setFont("Helvetica-Bold", 7.8)
        c.drawString(x + 4 * mm, y + 7 * mm, spec["label"][:38])
        c.setFillColor(DARK)
        c.setFont("Helvetica", 7.4)
        c.drawString(x + 4 * mm, y + 3.2 * mm, spec["value"][:44])
    c.showPage()

    # Page 4
    header_footer(c, company, 4, title)
    draw_label(c, "Company Contact", 18 * mm, PAGE_H - 34 * mm)
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(18 * mm, PAGE_H - 46 * mm, company["name"])
    contact = [
        ("Website", company["website"]),
        ("Email", company["email"]),
        ("Phone", company["phone"]),
        ("Address", company["address"]["full"]),
    ]
    y = PAGE_H - 66 * mm
    for label, value in contact:
        c.setFillColor(LIGHT)
        c.setStrokeColor(BORDER)
        c.roundRect(18 * mm, y - 9 * mm, 112 * mm, 13 * mm, 5, fill=1, stroke=1)
        c.setFillColor(SECONDARY)
        c.setFont("Helvetica-Bold", 8.2)
        c.drawString(23 * mm, y - 1 * mm, label.upper())
        draw_wrapped(c, value, 54 * mm, y - 1 * mm, 70 * mm, "Helvetica", 8.8, 11, PRIMARY)
        y -= 18 * mm
    draw_qr_placeholder(c, 150 * mm, PAGE_H - 88 * mm, 35 * mm)
    c.setFillColor(DARK)
    c.setFont("Helvetica", 8)
    c.drawCentredString(167.5 * mm, PAGE_H - 94 * mm, "QR code placeholder")
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(18 * mm, 62 * mm, "Reliable packaging solutions engineered for industry.")
    draw_wrapped(c, "This brochure is prepared as a replaceable sales document. Product configuration, output speed and final specifications may be confirmed during quotation.", 18 * mm, 50 * mm, 160 * mm, "Helvetica", 9.2, 14, DARK)
    c.save()
    set_metadata(output, title, "Industrial Packaging Machine Brochure", "Packaging Machine, Industrial Machine, Brochure")
    return output


def spec_table(c, specs, x, y, w, row_h=11 * mm):
    left_w = w * 0.43
    c.setFillColor(PRIMARY)
    c.roundRect(x, y - row_h, w, row_h, 5, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + 5 * mm, y - 7 * mm, "SPECIFICATION")
    c.drawString(x + left_w + 5 * mm, y - 7 * mm, "VALUE")
    y -= row_h
    for idx, spec in enumerate(specs):
        lines_left = wrap_text(spec["label"], "Helvetica-Bold", 8.5, left_w - 10 * mm)
        lines_right = wrap_text(spec["value"], "Helvetica", 8.5, w - left_w - 10 * mm)
        height = max(row_h, (max(len(lines_left), len(lines_right)) * 4.2 * mm) + 6 * mm)
        c.setFillColor(colors.white if idx % 2 == 0 else LIGHT)
        c.setStrokeColor(BORDER)
        c.rect(x, y - height, w, height, fill=1, stroke=1)
        c.line(x + left_w, y - height, x + left_w, y)
        c.setFillColor(PRIMARY)
        c.setFont("Helvetica-Bold", 8.5)
        ty = y - 6 * mm
        for line in lines_left:
            c.drawString(x + 5 * mm, ty, line)
            ty -= 4.2 * mm
        c.setFillColor(DARK)
        c.setFont("Helvetica", 8.5)
        ty = y - 6 * mm
        for line in lines_right:
            c.drawString(x + left_w + 5 * mm, ty, line)
            ty -= 4.2 * mm
        y -= height
    return y


def make_technical(product, company):
    output = OUTPUT_DIR / technical_filename(product)
    c = canvas.Canvas(str(output), pagesize=A4)
    title = f"{product['name']} Technical Specification"

    header_footer(c, company, 1, title)
    draw_label(c, "Technical Reference Sheet", 18 * mm, PAGE_H - 34 * mm)
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 22)
    title_y = PAGE_H - 45 * mm
    for line in wrap_text(product["name"], "Helvetica-Bold", 22, 112 * mm):
        c.drawString(18 * mm, title_y, line)
        title_y -= 9.5 * mm
    c.setFillColor(DARK)
    c.setFont("Helvetica", 9)
    c.drawString(18 * mm, title_y - 1 * mm, "Complete technical specifications and installation reference.")
    c.setFillColor(LIGHT)
    c.setStrokeColor(BORDER)
    c.roundRect(145 * mm, PAGE_H - 72 * mm, 42 * mm, 32 * mm, 6, fill=1, stroke=1)
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 8)
    c.drawCentredString(166 * mm, PAGE_H - 56 * mm, "MACHINE DIAGRAM")
    c.setFillColor(DARK)
    c.setFont("Helvetica", 7)
    c.drawCentredString(166 * mm, PAGE_H - 61 * mm, "Placeholder")
    table_y = min(PAGE_H - 82 * mm, title_y - 14 * mm)
    y = spec_table(c, product["specs"], 18 * mm, table_y, 170 * mm)
    if y < 38 * mm:
        c.showPage()
        header_footer(c, company, 2, title)
        y = PAGE_H - 34 * mm
    draw_label(c, "Installation Requirements", 18 * mm, y - 8 * mm)
    install = [
        "Stable floor level and operator access around the machine.",
        "Electrical connection according to voltage and load specification.",
        "Clean production environment with suitable packaging film storage.",
        "Trained operator for safe production and routine inspection.",
    ]
    draw_feature_cards(c, install, 18 * mm, y - 17 * mm, 80 * mm, 17 * mm, cols=2)
    draw_label(c, "Operating Conditions", 18 * mm, y - 60 * mm)
    operating = [
        "Machine speed depends on product size, film type and feeding stability.",
        "Final configuration should be confirmed with product samples.",
        "Preventive maintenance and spare parts support available.",
    ]
    draw_feature_cards(c, operating, 18 * mm, y - 69 * mm, 170 * mm, 16 * mm, cols=1)
    c.showPage()

    header_footer(c, company, 2, title)
    draw_label(c, "Contact Information", 18 * mm, PAGE_H - 34 * mm)
    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(18 * mm, PAGE_H - 45 * mm, company["name"])
    rows = [
        ("Website", company["website"]),
        ("Email", company["email"]),
        ("Phone", company["phone"]),
        ("Address", company["address"]["full"]),
    ]
    y = PAGE_H - 65 * mm
    for label, value in rows:
        c.setFillColor(LIGHT)
        c.setStrokeColor(BORDER)
        c.roundRect(18 * mm, y - 10 * mm, 170 * mm, 14 * mm, 5, fill=1, stroke=1)
        c.setFillColor(PRIMARY)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(24 * mm, y - 2 * mm, label)
        draw_wrapped(c, value, 70 * mm, y - 2 * mm, 108 * mm, "Helvetica", 8.7, 11, DARK)
        y -= 19 * mm
    c.save()
    set_metadata(output, title, "Technical Datasheet")
    return output


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    data = json.loads(DATA_FILE.read_text(encoding="utf8"))
    company = data["company"]
    generated = []
    for product in data["products"]:
        generated.append(make_brochure(product, company))
        generated.append(make_technical(product, company))
    print("\n".join(str(path.relative_to(ROOT)) for path in generated))


if __name__ == "__main__":
    main()
