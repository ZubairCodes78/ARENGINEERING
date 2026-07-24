export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  model: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  technicalDetails: ProductSpec[];
  featured?: boolean;
}

const PRODUCT_IMAGE_SETS = {
  flowWrap: [
    "/images/products/flow-wrap-main.png",
    "/images/products/candy-packing-main.png",
    "/images/products/pouch-line-main.png",
  ],
  candy: [
    "/images/products/candy-packing-main.png",
    "/images/products/flow-wrap-main.png",
    "/images/products/pouch-line-main.png",
  ],
  pouch: [
    "/images/products/pouch-line-main.png",
    "/images/products/flow-wrap-main.png",
    "/images/products/candy-packing-main.png",
  ],
} as const;

export const PRODUCTS: Product[] = [
  {
    id: "ar-zombie",
    slug: "ar-zombie-packing-machine",
    model: "AR-Zombie",
    name: "Zombie Packing Machine (AR-Zombie)",
    category: "Packing Machines",
    shortDescription:
      "Heavy-duty multi-purpose packing machine with precision sealing and inverter-controlled drive.",
    description:
      "The AR Zombie Packing Machine is a robust multi-purpose packaging system for continuous industrial production. It is built for stable sealing, flexible operation, and long service life across confectionery and portion-pack applications.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Machine Type", value: "Automatic multi-purpose packing machine" },
      { label: "Size of Pack (L x W x H)", value: "Dynamic according to product sample" },
      { label: "Machine Dimensions (L x W x H)", value: "Custom industrial frame configuration" },
      { label: "Machine Weight", value: "Heavy-duty industrial construction" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Standard industrial packaging film reel" },
      { label: "Conveyor Length", value: "Configured according to feeding requirement" },
      { label: "Machine Capacity", value: "Dynamic according to product and film" },
      { label: "Electric Motor", value: "Inverter-controlled drive system" },
      { label: "Machine Load", value: "Configured according to machine duty" },
      { label: "Standard Equipment", value: "Photo electric eye, inverter and precision sealing unit" },
      { label: "Packing Material", value: "Food grade packaging film" },
      { label: "Voltage & Frequency", value: "As per factory electrical requirement" },
      { label: "Packing Weight", value: "Small portion and confectionery pack formats" },
      { label: "Sealing Type", value: "Multi-purpose heat sealing" },
      { label: "Usage / Application", value: "Toffee, candy, confectionery pouches and small portion packs" },
    ],
    features: [
      "Precision sealing system for consistent pack integrity",
      "Variable speed drive for production flexibility",
      "Heavy-duty frame for continuous operation",
      "Operator-friendly adjustments for daily production",
      "Compatible with standard packaging films",
    ],
    applications: ["Toffee", "Candy", "Confectionery pouches", "Small portion packs"],
    technicalDetails: [
      { label: "Control", value: "Variable speed inverter" },
      { label: "Sealing", value: "Multi-purpose heat sealing unit" },
      { label: "Operation", value: "Continuous industrial duty" },
      { label: "Support", value: "Installation and spare parts available" },
    ],
    featured: true,
  },
  {
    id: "ar-toffee",
    slug: "ar-toffee-wrapping-machine",
    model: "AR-Toffee",
    name: "Toffee Wrapping Machine (AR-Toffee)",
    category: "Wrapping Machines",
    shortDescription:
      "High-speed automatic toffee wrapper with twist-wrap and fold-wrap capability.",
    description:
      "The AR Toffee Wrapping Machine is designed for high-speed wrapping of soft and hard toffee products. Adjustable settings support different product dimensions while maintaining stable film handling and reliable wrapping quality.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Machine Type", value: "Automatic toffee wrapping machine" },
      { label: "Size of Pack (L x W x H)", value: "Configured for soft and hard toffee sizes" },
      { label: "Machine Dimensions (L x W x H)", value: "High-speed wrapping line configuration" },
      { label: "Machine Weight", value: "Heavy-duty wrapped candy frame" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Twist wrap and fold wrap compatible reels" },
      { label: "Conveyor Length", value: "Configured to feeding and counting system" },
      { label: "Machine Capacity", value: "Up to 800 packs / minute" },
      { label: "Electric Motor", value: "Servo-driven film feed" },
      { label: "Machine Load", value: "Configured according to wrapping speed" },
      { label: "Standard Equipment", value: "Servo film feed, registration control and wrapping head" },
      { label: "Packing Material", value: "Toffee wrapping film" },
      { label: "Voltage & Frequency", value: "As per factory electrical requirement" },
      { label: "Packing Weight", value: "Single toffee and small confectionery pieces" },
      { label: "Sealing Type", value: "Twist wrap and fold wrap" },
      { label: "Usage / Application", value: "Soft toffee, hard candy and chewing gum pieces" },
    ],
    features: [
      "Twist-wrap and fold-wrap configurations",
      "Servo-driven film feed for accurate registration",
      "Adjustable pack size settings",
      "Suitable for soft and hard toffee",
      "High-speed continuous production capability",
    ],
    applications: ["Toffee", "Soft candy", "Hard candy", "Chewing gum pieces"],
    technicalDetails: [
      { label: "Max Speed", value: "Up to 800 packs/min" },
      { label: "Wrap Methods", value: "Twist-wrap, fold-wrap" },
      { label: "Drive", value: "Servo film feed" },
      { label: "Changeover", value: "Adjustable for product size" },
    ],
  },
  {
    id: "ar-800",
    slug: "ar-800",
    model: "AR-800",
    name: "Candy Packing Machine (AR-800)",
    category: "Packing Machines",
    shortDescription:
      "Automatic candy packing with 3-side and centre sealing, up to 800 packs per minute.",
    description:
      "The AR-800 is a high-capacity automatic candy packing machine with 3-side and centre sealing. It uses photo-electric film registration and inverter-based speed control for consistent industrial output.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "Dynamic according to candy and sachet format" },
      { label: "Machine Dimensions (L x W x H)", value: "Industrial high-speed candy packing line" },
      { label: "Machine Weight", value: "1,400 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "300 / 70 mm" },
      { label: "Conveyor Length", value: "Configured according to product feeding" },
      { label: "Machine Capacity", value: "Up to 800 packs / minute" },
      { label: "Electric Motor", value: "2 HP + 0.5 HP" },
      { label: "Machine Load", value: "15 Amp (2.8 kW)" },
      { label: "Standard Equipment", value: "Photo electric eye and inverter" },
      { label: "Packing Material", value: "Food grade packaging film" },
      { label: "Voltage & Frequency", value: "440 VAC, 3 Phase, 50 Hz" },
      { label: "Packing Weight", value: "2 g - 200 g" },
      { label: "Sealing Type", value: "3 Side and centre sealing" },
      { label: "Heater Size", value: "Configured according to sealing width" },
      { label: "Usage / Application", value: "Candy, toffee, confectionery and small sachets" },
    ],
    features: [
      "3-side and centre sealing configuration",
      "Photo-electric eye for film registration",
      "Inverter-based variable speed control",
      "Heavy-duty 1,400 KG frame for stability",
      "Industrial 3-phase power configuration",
    ],
    applications: ["Candy", "Toffee", "Confectionery", "Small sachets"],
    technicalDetails: [
      { label: "Sealing Type", value: "3-side and centre seal" },
      { label: "Registration", value: "Photo-electric eye" },
      { label: "Power", value: "440 VAC 3-phase, 15 Amp" },
      { label: "Total Weight", value: "1,400 KG" },
      { label: "Pack Range", value: "2g - 200g" },
    ],
    featured: true,
  },
  {
    id: "ar-noodle",
    slug: "ar-noodle-packing-machine",
    model: "AR-Noodle",
    name: "Noodle Packing Machine (AR-Noodle)",
    category: "Packing Machines",
    shortDescription:
      "Automatic noodle and pasta pouch packing with integrated weighing support.",
    description:
      "The AR Noodle Packing Machine combines product feeding, pouch forming, and sealing for noodle and pasta applications. It is configured for reliable dry-product handling and practical factory operation.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Machine Type", value: "Automatic noodle and pasta pouch packing" },
      { label: "Size of Pack (L x W x H)", value: "Configured according to noodle pack size" },
      { label: "Machine Dimensions (L x W x H)", value: "Line size configured to weighing and feeding system" },
      { label: "Machine Weight", value: "Industrial food production frame" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Standard pouch packing film reel" },
      { label: "Conveyor Length", value: "Configured according to dry product feeding" },
      { label: "Machine Capacity", value: "Dynamic according to pack weight and feeding system" },
      { label: "Electric Motor", value: "Automatic pouch forming and sealing drive" },
      { label: "Machine Load", value: "Configured according to weighing system" },
      { label: "Standard Equipment", value: "Integrated weighing support and date coder compatibility" },
      { label: "Packing Material", value: "Food grade pouch film" },
      { label: "Voltage & Frequency", value: "As per factory electrical requirement" },
      { label: "Packing Weight", value: "Dry noodle and pasta pack formats" },
      { label: "Sealing Type", value: "Form-fill-seal pouch sealing" },
      { label: "Usage / Application", value: "Instant noodles, pasta, vermicelli and dry noodle packs" },
    ],
    features: [
      "Designed for noodle and pasta products",
      "Automatic pouch forming and sealing",
      "Date coder compatibility",
      "Production-friendly cleaning access",
      "Suitable for dry noodle pack formats",
    ],
    applications: ["Instant noodles", "Pasta", "Vermicelli", "Dried noodle packs"],
    technicalDetails: [
      { label: "Weighing System", value: "Net weight dosing support" },
      { label: "Pouch Type", value: "Form-fill-seal" },
      { label: "Coding", value: "Date coder ready" },
      { label: "Operation", value: "Automatic line operation" },
    ],
  },
  {
    id: "ar-210",
    slug: "ar-210",
    model: "AR-210",
    name: "Flow Wrap Machine (AR-210)",
    category: "Flow Wrap Machines",
    shortDescription:
      "Horizontal flow wrapper for biscuits, chocolates, wafers, and soap up to 100 packs/min.",
    description:
      "The AR-210 Horizontal Flow Wrap Machine wraps individual products in continuous film with stable speed, registration, and sealing. It is suitable for bakery, confectionery, and soap packaging lines.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "100-300 x 25-75 x 40-80 mm" },
      { label: "Machine Dimensions (L x W x H)", value: "3990 x 1650 x 1650 mm" },
      { label: "Machine Weight", value: "1,000 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "300 / 70 mm" },
      { label: "Conveyor Length", value: "10 ft" },
      { label: "Machine Capacity", value: "Up to 100 packs / minute" },
      { label: "Electric Motor", value: "1 HP + 2 HP" },
      { label: "Machine Load", value: "10 Amp (2 kW)" },
      { label: "Standard Equipment", value: "Photo electric eye and inverter" },
      { label: "Packing Material", value: "Food grade packaging film" },
      { label: "Voltage & Frequency", value: "220 VAC, Single Phase, 50 Hz" },
      { label: "Packing Weight", value: "2 g - 1,000 g" },
      { label: "Sealing Type", value: "2 Side and centre sealing" },
      { label: "Heater Size", value: "4 in - 6 in" },
      { label: "Usage / Application", value: "Biscuits, chocolates, wafers, muffin cake and soap bars" },
    ],
    features: [
      "Horizontal flow wrap configuration",
      "Wide pack size range for diverse products",
      "Single-phase power for flexible installation",
      "Stable 1,000 KG frame for production operation",
      "Suitable for food and non-food applications",
    ],
    applications: ["Biscuits", "Chocolates", "Wafers", "Muffin cake", "Soap bars"],
    technicalDetails: [
      { label: "Wrap Type", value: "Horizontal flow wrap" },
      { label: "Max Speed", value: "Up to 100 packs/min" },
      { label: "Power", value: "220 VAC single phase, 10 Amp" },
      { label: "Film Path", value: "Bottom feed, top seal" },
      { label: "Pack Dimensions", value: "100-300 x 25-75 x 40-80 mm" },
    ],
    featured: true,
  },
  {
    id: "ar-200",
    slug: "ar-200",
    model: "AR-200",
    name: "Flow Wrap Machine (AR-200)",
    category: "Flow Wrap Machines",
    shortDescription:
      "High-speed flow wrap machine for food and soap applications up to 200 packs per minute.",
    description:
      "The AR-200 Flow Wrap Machine delivers high-speed horizontal wrapping for bakery, confectionery, wafer, biscuit, and soap products. Its heavy frame and drive system are made for consistent seal quality at speed.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "Dynamic according to food or soap product" },
      { label: "Machine Dimensions (L x W x H)", value: "High-speed horizontal flow wrap frame" },
      { label: "Machine Weight", value: "850 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Standard flow wrap film reel" },
      { label: "Conveyor Length", value: "Configured according to product infeed" },
      { label: "Machine Capacity", value: "Up to 200 packs / minute" },
      { label: "Electric Motor", value: "High-speed flow wrap drive system" },
      { label: "Machine Load", value: "Configured according to production speed" },
      { label: "Standard Equipment", value: "Photo electric eye, inverter and heat sealing system" },
      { label: "Packing Material", value: "Food grade or soap wrapping film" },
      { label: "Voltage & Frequency", value: "As per factory electrical requirement" },
      { label: "Packing Weight", value: "Dynamic according to product" },
      { label: "Sealing Type", value: "Heat seal pillow pack" },
      { label: "Usage / Application", value: "Muffin cake, chocolate, wafer, biscuit and soap" },
    ],
    features: [
      "High-speed operation up to 200 packs/min",
      "Robust 850 KG industrial frame",
      "Consistent heat sealing across speed range",
      "Quick adjustment for different product sizes",
      "Proven for food and soap packaging lines",
    ],
    applications: ["Muffin cake", "Chocolates", "Wafers", "Biscuits", "Soap"],
    technicalDetails: [
      { label: "Max Speed", value: "Up to 200 packs/min" },
      { label: "Machine Weight", value: "850 KG" },
      { label: "Wrap Type", value: "Horizontal flow wrap" },
      { label: "Sealing", value: "Heat seal" },
    ],
  },
  {
    id: "ar-150",
    slug: "ar-150",
    model: "AR-150",
    name: "Flow Wrap Machine (AR-150)",
    category: "Flow Wrap Machines",
    shortDescription:
      "Liquid-over-wrap flow wrapper for cosmetics and personal care products.",
    description:
      "The AR-150 is specialized for liquid-over-wrap packaging in personal care and cosmetic applications. It supports reliable film handling and sealing for face wash, hair color, hair remover, and bleach cream products.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "Configured for sachet and cosmetic pack formats" },
      { label: "Machine Dimensions (L x W x H)", value: "Compact liquid-over-wrap flow wrap frame" },
      { label: "Machine Weight", value: "800 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Liquid-over-wrap compatible film reel" },
      { label: "Conveyor Length", value: "Configured according to cosmetic product feeding" },
      { label: "Machine Capacity", value: "Up to 150 packs / minute" },
      { label: "Electric Motor", value: "Flow wrap drive with registration support" },
      { label: "Machine Load", value: "Configured according to heating and sealing system" },
      { label: "Standard Equipment", value: "Registration sensor and heat sealing system" },
      { label: "Packing Material", value: "Liquid over wrap film" },
      { label: "Voltage & Frequency", value: "As per factory electrical requirement" },
      { label: "Packing Weight", value: "Dynamic according to cosmetic product" },
      { label: "Sealing Type", value: "Flow wrap heat sealing" },
      { label: "Usage / Application", value: "Face wash, hair color, hair remover, bleach cream and cosmetics" },
    ],
    features: [
      "Liquid-over-wrap film handling",
      "Speeds up to 150 packs/min",
      "Configured for cosmetic and personal care products",
      "Reliable registration for printed films",
      "Compact industrial footprint",
    ],
    applications: ["Face wash sachets", "Hair color", "Hair remover", "Bleach cream", "Cosmetics"],
    technicalDetails: [
      { label: "Max Speed", value: "Up to 150 packs/min" },
      { label: "Machine Weight", value: "800 KG" },
      { label: "Film Type", value: "Liquid over wrap" },
      { label: "Industry", value: "Cosmetics and personal care" },
    ],
  },
  {
    id: "ar-300",
    slug: "ar-300",
    model: "AR-300",
    name: "Biscuit & Rusk Packing Machine (AR-300)",
    category: "Packing Machines",
    shortDescription:
      "Dedicated biscuit and rusk packing machine with consistent dry-product sealing.",
    description:
      "The AR-300 is purpose-built for biscuit and rusk packaging. It handles dry bakery products with stable transfer, controlled sealing, and reliable operation for stackable and single-row pack formats.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "80-200 x 10-75 x 40-80 mm" },
      { label: "Machine Dimensions (L x W x H)", value: "3990 x 1650 x 1650 mm" },
      { label: "Machine Weight", value: "1,000 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "300 / 70 mm" },
      { label: "Conveyor Length", value: "10 ft" },
      { label: "Machine Capacity", value: "Up to 80-100 packs / minute" },
      { label: "Electric Motor", value: "1 HP + 0.5 HP" },
      { label: "Machine Load", value: "10 Amp (2 kW)" },
      { label: "Standard Equipment", value: "Photo electric eye and inverter" },
      { label: "Packing Material", value: "Food grade packaging film" },
      { label: "Voltage & Frequency", value: "220 VAC, Single Phase, 50 Hz" },
      { label: "Packing Weight", value: "2 g - 500 g" },
      { label: "Sealing Type", value: "2 Side and centre sealing" },
      { label: "Heater Size", value: "4 in - 6 in" },
      { label: "Usage / Application", value: "Biscuits, rusk, crackers and dry bakery stacks" },
    ],
    features: [
      "Optimized for dry bakery product handling",
      "Consistent sealing for stackable packs",
      "80-100 packs/min throughput",
      "Heavy-duty 1,000 KG construction",
      "Designed to reduce product breakage during transfer",
    ],
    applications: ["Biscuits", "Rusk", "Crackers", "Dry bakery stacks"],
    technicalDetails: [
      { label: "Max Speed", value: "80-100 packs/min" },
      { label: "Machine Weight", value: "1,000 KG" },
      { label: "Product Type", value: "Dry bakery" },
      { label: "Sealing", value: "Heat seal pillow pack" },
    ],
  },
  {
    id: "ar-250",
    slug: "ar-250",
    model: "AR-250",
    name: "Ice Cream Packing Machine (AR-250)",
    category: "Packing Machines",
    shortDescription:
      "Automatic ice cream packing machine for frozen-product lines up to 200 packs/min.",
    description:
      "The AR-250 Ice Cream Packing Machine is engineered for frozen-product environments. It provides high-speed automatic operation and precise sealing for ice cream bars, cups, and novelty products.",
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "Configured for ice cream bar, cup and novelty formats" },
      { label: "Machine Dimensions (L x W x H)", value: "Frozen-product packing line configuration" },
      { label: "Machine Weight", value: "850 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Cold line compatible packaging film reel" },
      { label: "Conveyor Length", value: "Configured according to frozen product infeed" },
      { label: "Machine Capacity", value: "Up to 200 packs / minute" },
      { label: "Electric Motor", value: "Automatic ice cream packing drive system" },
      { label: "Machine Load", value: "Configured for frozen line operation" },
      { label: "Standard Equipment", value: "Registration support and precision sealing system" },
      { label: "Packing Material", value: "Frozen product packaging film" },
      { label: "Voltage & Frequency", value: "As per factory electrical requirement" },
      { label: "Packing Weight", value: "Dynamic according to ice cream product" },
      { label: "Sealing Type", value: "Heat seal for frozen-product packaging" },
      { label: "Usage / Application", value: "Ice cream bars, cups, frozen novelty products and kulfi packs" },
    ],
    features: [
      "Configured for frozen product handling",
      "High-speed operation up to 200 packs/min",
      "Precise sealing for cold-environment products",
      "Durable product contact surfaces",
      "Suitable for bars, cups, and novelty formats",
    ],
    applications: ["Ice cream bars", "Ice cream cups", "Frozen novelty products", "Kulfi packs"],
    technicalDetails: [
      { label: "Max Speed", value: "Up to 200 packs/min" },
      { label: "Machine Weight", value: "850 KG" },
      { label: "Environment", value: "Frozen product line" },
      { label: "Construction", value: "Industrial production surfaces" },
    ],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((product) => product.featured).slice(0, 3);
export const CATEGORIES = Array.from(new Set(PRODUCTS.map((product) => product.category)));

export const MACHINE_SLUGS: Record<string, string> = {
  "ar-zombie-packing-machine": "zombie-packing-machine",
  "ar-toffee-wrapping-machine": "toffee-wrapping-machine",
  "ar-800": "candy-packing-machine",
  "ar-noodle-packing-machine": "noodle-packing-machine",
  "ar-210": "horizontal-flow-wrap-machine",
  "ar-200": "flow-wrap-machine-200",
  "ar-150": "flow-wrap-machine-150",
  "ar-300": "biscuit-rusk-packing-machine",
  "ar-250": "ice-cream-packing-machine",
};

export function getMachineSlug(productSlug: string): string {
  return MACHINE_SLUGS[productSlug] ?? productSlug;
}

export function getProductImage(product: Pick<Product, "category" | "applications">): string {
  return getProductImages(product)[0];
}

export function getProductImages(product: Pick<Product, "category" | "applications">): string[] {
  if (product.category === "Flow Wrap Machines") {
    return [...PRODUCT_IMAGE_SETS.flowWrap];
  }

  if (
    product.applications.some((application) =>
      ["Candy", "Toffee", "Confectionery", "Soft candy", "Hard candy"].includes(application)
    )
  ) {
    return [...PRODUCT_IMAGE_SETS.candy];
  }

  return [...PRODUCT_IMAGE_SETS.pouch];
}

export function getProductBrochurePath(productSlug: string): string {
  const product = getProductBySlug(productSlug);
  if (!product) return `/brochures/${getMachineSlug(productSlug)}.pdf`;

  return `/brochures/${getProductDocumentSlug(product)}-brochure.pdf`;
}

export function getProductTechnicalPath(productSlug: string): string {
  const product = getProductBySlug(productSlug);
  if (!product) return `/brochures/${getMachineSlug(productSlug)}-technical-specification.pdf`;

  return `/brochures/${getProductDocumentSlug(product)}-technical-specification.pdf`;
}

export function getProductDocumentSlug(product: Pick<Product, "name" | "model">): string {
  const title = product.name.replace(/\s*\([^)]*\)\s*$/, "");
  return `${slugifyDocumentPart(title)}-${slugifyDocumentPart(product.model)}`;
}

function slugifyDocumentPart(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProductByMachineSlug(machineSlug: string): Product | undefined {
  return PRODUCTS.find((product) => getMachineSlug(product.slug) === machineSlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);

  return PRODUCTS.filter(
    (product) => product.slug !== currentSlug && product.category === current.category
  )
    .concat(PRODUCTS.filter((product) => product.slug !== currentSlug && product.category !== current.category))
    .slice(0, limit);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((product) => product.slug);
}

export function getAllMachineSlugs(): string[] {
  return PRODUCTS.map((product) => getMachineSlug(product.slug));
}
