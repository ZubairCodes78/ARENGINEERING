import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  Factory,
  FileCog,
  FileText,
  HelpCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import MachineInquiryForm from "@/components/MachineInquiryForm";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import SocialIcon from "@/components/SocialIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import { COMPANY, INDUSTRIES, YOUTUBE_CHANNEL_URL, productWhatsAppMessage, whatsAppUrl } from "@/lib/constants";
import {
  getAllMachineSlugs,
  getMachineSlug,
  getProductBrochurePath,
  getProductByMachineSlug,
  getProductImages,
  getProductTechnicalPath,
  getRelatedProducts,
} from "@/lib/products";

interface MachineDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllMachineSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MachineDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductByMachineSlug(slug);

  if (!product) {
    return { title: "Machine Not Found | AL RAHEEM ENGINEERING" };
  }

  const canonical = `/machines/${getMachineSlug(product.slug)}`;
  const images = getProductImages(product).map((img) => ({
    url: img,
    width: 1200,
    height: 630,
    alt: `${product.name} - Industrial Packaging Machine Lahore Pakistan`,
  }));

  const title = product.seoTitle ?? `${product.name} | Industrial Packaging Machine Pakistan`;
  const description = product.seoDescription ?? product.shortDescription;

  return {
    title,
    description,
    keywords: product.targetKeywords ?? [
      product.name,
      product.model,
      product.category,
      "packaging machine Pakistan",
      "packaging machinery manufacturer Lahore",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.websiteUrl}${canonical}`,
      type: "website",
      siteName: COMPANY.name,
      locale: "en_PK",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[0].url],
      site: "@Alraheemengine",
      creator: "@Alraheemengine",
    },
  };
}

export default async function MachineDetailPage({ params }: MachineDetailPageProps) {
  const { slug } = await params;
  const product = getProductByMachineSlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug, 3);
  const whatsappUrl = whatsAppUrl(productWhatsAppMessage(product.name));
  const productImages = getProductImages(product);
  const brochurePath = getProductBrochurePath(product.slug);
  const technicalPath = getProductTechnicalPath(product.slug);
  const machineUrl = `${COMPANY.websiteUrl}/machines/${getMachineSlug(product.slug)}`;
  const productTitle = product.name.replace(/\s*\([^)]*\)\s*$/, "");

  // Match industries for cross-linking
  const matchedIndustries = INDUSTRIES.filter((ind) =>
    product.industrySlugs?.includes(ind.slug)
  );

  const downloadCards = [
    {
      title: "Product Brochure",
      description: "Overview, applications and product highlights.",
      Icon: FileText,
      href: brochurePath,
    },
    {
      title: "Technical PDF",
      description: "Specifications and configuration details.",
      Icon: FileCog,
      href: technicalPath,
    },
  ];

  // Schema.org Graph
  const schemaGraph: Record<string, unknown>[] = [
    {
      "@type": "Product",
      "@id": `${machineUrl}#product`,
      name: product.name,
      model: product.model,
      sku: product.model,
      mpn: product.model,
      category: product.category,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: COMPANY.name,
      },
      manufacturer: {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.websiteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY.address.city,
          addressCountry: COMPANY.address.countryCode,
        },
      },
      image: productImages.map((image) => `${COMPANY.websiteUrl}${image}`),
      url: machineUrl,
      offers: {
        "@type": "Offer",
        url: machineUrl,
        priceCurrency: "PKR",
        price: "Contact for Quotation",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: COMPANY.name,
        },
      },
      additionalProperty: product.specs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${machineUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: COMPANY.websiteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Machines",
          item: `${COMPANY.websiteUrl}/machines`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: machineUrl,
        },
      ],
    },
  ];

  if (product.faqs && product.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `${machineUrl}#faqs`,
      mainEntity: product.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <main className="bg-white pb-36 pt-24 lg:pb-[120px] lg:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": schemaGraph,
          }),
        }}
      />

      <Container>
        <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-dark-gray/70" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-secondary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/machines" className="hover:text-secondary">Machines</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary">{product.model}</span>
        </nav>

        <FadeUp>
          <div className="grid gap-14 xl:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] xl:items-center">
            <ProductGallery images={productImages} productName={product.name} />

            <section className="max-w-2xl xl:pt-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                {product.category}
              </p>
              <h1 className="mt-6 max-w-[560px] font-heading text-[38px] font-semibold leading-[1.15] text-primary sm:text-[48px] xl:text-[54px]">
                {productTitle}
              </h1>
              <p className="mt-4 font-heading text-xl font-semibold text-secondary">
                Model: {product.model}
              </p>
              <p className="mt-8 max-w-xl text-lg leading-8 text-dark-gray">
                {product.shortDescription}
              </p>

              <div className="mt-10 grid gap-3 sm:max-w-md sm:grid-cols-2">
                <Button href="#machine-inquiry" variant="primary" className="min-h-[54px] w-full px-6">
                  <FileText className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
                <Button href={whatsappUrl} external variant="whatsapp" className="min-h-[54px] w-full px-6">
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </section>
          </div>
        </FadeUp>

        <div className="mt-28 space-y-28">
          <FadeUp>
            <section id="overview" className="border-t border-border pt-12">
              <p className="text-sm font-semibold text-secondary">Overview</p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-primary">Built for dependable industrial packaging</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/78">
                A focused overview of the machine purpose, production role and industrial value engineered in Lahore, Pakistan.
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-white p-8 shadow-[0_16px_44px_rgba(8,40,68,0.055)]">
                <p className="max-w-4xl text-base leading-8 text-dark-gray">{product.description}</p>
                {matchedIndustries.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-dark-gray/70">
                      Recommended Industries:
                    </span>
                    {matchedIndustries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href="/industries"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-light-gray px-3.5 py-1 text-xs font-medium text-primary transition hover:border-secondary hover:text-secondary"
                      >
                        <Factory className="h-3 w-3 text-secondary" />
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section id="applications" className="border-t border-border pt-12">
              <p className="text-sm font-semibold text-secondary">Applications</p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-primary">Product applications</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/78">
                Common product formats and industries supported by this machine.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {product.applications.map((application) => (
                  <article key={application} className="flex min-h-[118px] items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-[0_14px_36px_rgba(8,40,68,0.055)] transition hover:-translate-y-1 hover:border-secondary/35">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-light-gray text-secondary">
                      <Boxes className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-primary">{application}</h3>
                  </article>
                ))}
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section id="specifications" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                Technical Specifications
              </p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-primary">Machine Specifications</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/78">
                Complete verified technical specifications of the machine.
              </p>
              <div className="mt-8 overflow-hidden rounded-[18px] border border-border bg-white shadow-[0_18px_52px_rgba(8,40,68,0.07)]">
                <div className="grid grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] border-b border-border bg-primary text-white">
                  <div className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] sm:px-7">
                    Specification
                  </div>
                  <div className="border-l border-white/12 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] sm:px-7">
                    Value
                  </div>
                </div>
                <div>
                  {product.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`grid grid-cols-1 border-b border-border last:border-b-0 sm:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] ${
                        index % 2 === 0 ? "bg-white" : "bg-light-gray"
                      }`}
                    >
                      <div className="px-5 py-4 font-heading text-sm font-semibold text-primary sm:px-7 sm:py-5">
                        {spec.label}
                      </div>
                      <div className="border-t border-border px-5 pb-5 text-sm font-medium leading-7 text-dark-gray sm:border-l sm:border-t-0 sm:px-7 sm:py-5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section id="features" className="border-t border-border pt-12">
              <p className="text-sm font-semibold text-secondary">Features</p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-primary">Production-ready features</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/78">
                Practical details that support daily production, changeover and long-term reliability.
              </p>
              <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {product.features.map((feature, index) => {
                  const Icon = [BadgeCheck, Cpu, ShieldCheck, Wrench, CheckCircle2][index % 5];
                  return (
                    <article key={feature} className="flex min-h-[190px] flex-col rounded-2xl border border-border bg-white p-8 shadow-[0_14px_36px_rgba(8,40,68,0.06)] transition duration-300 hover:-translate-y-1 hover:border-secondary/35 hover:shadow-[0_26px_64px_rgba(8,40,68,0.11)]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-gray text-secondary">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <p className="mt-6 text-sm font-medium leading-7 text-dark-gray">{feature}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          </FadeUp>

          {product.faqs && product.faqs.length > 0 && (
            <FadeUp>
              <section id="faqs" className="border-t border-border pt-12">
                <p className="text-sm font-semibold text-secondary">Machine FAQs</p>
                <h2 className="mt-3 font-heading text-4xl font-semibold text-primary">
                  Frequently Asked Questions about {product.model}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/78">
                  Direct answers to common buyer questions regarding specifications, operations, and support in Pakistan.
                </p>
                <div className="mt-8 grid gap-4">
                  {product.faqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-2xl border border-border bg-white p-7 shadow-sm transition hover:border-secondary/40"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" strokeWidth={2} />
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-primary">
                            {faq.question}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-dark-gray">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </FadeUp>
          )}

          <FadeUp>
            <section id="downloads" className="border-t border-border pt-12">
              <h2 className="font-heading text-3xl font-semibold text-primary">Downloads</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-gray/78">
                Download product brochure and technical documentation.
              </p>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {downloadCards.map(({ title, description, Icon, href }) => (
                  <a key={title} href={href} download className="group flex h-[168px] flex-col rounded-2xl border border-border bg-white p-5 text-primary shadow-[0_14px_34px_rgba(8,40,68,0.055)] transition hover:-translate-y-1 hover:border-secondary/45 hover:shadow-[0_24px_54px_rgba(8,40,68,0.11)]">
                    <span className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-light-gray text-secondary transition group-hover:bg-secondary group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block font-heading text-lg font-semibold leading-tight text-primary">
                          {title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-dark-gray">
                          {description}
                        </span>
                      </span>
                    </span>
                    <span className="mt-auto inline-flex min-h-10 items-center self-end rounded-md border border-primary/12 bg-light-gray px-4 text-sm font-semibold text-primary transition group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                      Download
                      <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section className="rounded-[20px] border border-border bg-white p-6 shadow-[0_22px_64px_rgba(8,40,68,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_78px_rgba(8,40,68,0.12)] lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)] lg:items-center">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                    className="group relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white text-primary shadow-[0_18px_42px_rgba(8,40,68,0.10)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.08] hover:border-[#ff0000]/35 hover:bg-[#ff0000]/5 hover:text-[#ff0000] hover:shadow-[0_24px_54px_rgba(255,0,0,0.16)]"
                    aria-label="Open AL Raheem Engineering YouTube channel"
                  >
                    <SocialIcon platform="YouTube" className="h-10 w-10 transition" />
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                      YouTube
                    </span>
                  </a>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      Official YouTube Channel
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-primary lg:text-4xl">
                      Watch Our Machines in Action
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-gray/78">
                      Watch machine demonstrations, customer installations, factory testing and
                      packaging solutions on our official YouTube channel.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-light-gray p-5">
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                    className="group relative flex aspect-video items-center justify-center rounded-xl bg-white text-primary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:text-[#ff0000] hover:shadow-md"
                    aria-label="Open YouTube channel videos"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-[0_16px_34px_rgba(8,40,68,0.10)] transition duration-200 group-hover:scale-[1.08] group-hover:border-[#ff0000]/35 group-hover:bg-[#ff0000]/5 group-hover:text-[#ff0000]">
                      <SocialIcon platform="YouTube" className="h-8 w-8" />
                    </span>
                    <span className="pointer-events-none absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                      YouTube
                    </span>
                  </a>
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit AL Raheem Engineering YouTube channel"
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(20,121,214,0.18)] transition hover:-translate-y-0.5 hover:bg-secondary/90"
                  >
                    Visit Our YouTube Channel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <p className="mt-3 text-center text-xs font-medium text-dark-gray/68">
                    Subscribe for the latest machine videos.
                  </p>
                </div>
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section id="machine-inquiry" className="border-t border-border pt-12">
              <p className="text-sm font-semibold text-secondary">Inquiry Form</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-primary">Request a machine quotation</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray">
                Submit your production details and the form will open WhatsApp with your inquiry prepared.
              </p>
              <div className="mt-8">
                <MachineInquiryForm machineName={product.name} />
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section id="related-machines" className="border-t border-border pt-12">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-semibold text-secondary">Related Machines</p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold text-primary">Compare similar AR systems</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/78">
                    Review nearby machine options for similar products, production lines and packaging formats.
                  </p>
                </div>
                <Link href="/machines" className="inline-flex items-center text-sm font-semibold text-secondary hover:text-primary">
                  View all machines
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="mt-9 grid gap-7 md:grid-cols-3">
                {related.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </section>
          </FadeUp>
        </div>
      </Container>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/96 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_34px_rgba(8,40,68,0.12)] backdrop-blur lg:hidden">
        <Container className="px-0">
          <Button href="#machine-inquiry" variant="primary" className="min-h-12 w-full">
            Request Quote for {product.model}
          </Button>
        </Container>
      </div>
    </main>
  );
}
