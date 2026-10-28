export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
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
  seoTitle?: string;
  seoDescription?: string;
  targetKeywords?: string[];
  industrySlugs?: string[];
  faqs?: ProductFAQ[];
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
    id: "ar-300",
    slug: "ar-300",
    model: "AR-300",
    name: "Zombie Packing Machine (AR-300)",
    category: "Packing Machines",
    shortDescription:
      "Heavy-duty multi-purpose packing machine with precision sealing and inverter-controlled drive.",
    description:
      "The AR-300 Zombie Packing Machine is a robust multi-purpose packaging system for continuous industrial production. It is built for stable sealing, flexible operation, and long service life across confectionery, snacks, and portion-pack applications in Pakistan.",
    seoTitle: "Zombie Packing Machine (AR-300) | Multi-Purpose Pouch Wrapper Pakistan",
    seoDescription:
      "Heavy-duty AR-300 multi-purpose packing machine by AL Raheem Engineering Lahore. Engineered for toffee, candy, confectionery pouches, and portion packs with variable speed inverter.",
    targetKeywords: [
      "zombie packing machine",
      "AR-300 packing machine",
      "multi purpose packing machine",
      "confectionery pouch packing machine",
      "packing machine manufacturer Lahore",
      "portion packing machine Pakistan",
    ],
    industrySlugs: ["confectionery", "snacks", "pharmaceutical", "food"],
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
    faqs: [
      {
        question: "What products are suitable for the AR-300 Zombie packing machine?",
        answer:
          "The AR-300 Zombie packing machine is configured for toffees, candies, confectionery pouches, and small dry portion packs requiring dependable heat sealing.",
      },
      {
        question: "What drive and speed control mechanism is built into the AR-300?",
        answer:
          "The AR-300 features an inverter-controlled variable speed electric motor and photo-electric eye registration for stable film feeding and precise seal timing.",
      },
      {
        question: "Where is the AR-300 manufactured and supported in Pakistan?",
        answer:
          "The AR-300 is manufactured in Lahore by AL Raheem Engineering, with complete on-site commissioning, operator training, and local spare parts availability.",
      },
    ],
    featured: true,
  },
  {
    id: "ar-230",
    slug: "ar-230",
    model: "AR-230",
    name: "Toffee Packing Machine (AR-230)",
    category: "Packing Machines",
    shortDescription:
      "High-speed automatic toffee packing machine with twist-wrap and fold-wrap capability up to 800 packs/min.",
    description:
      "The AR-230 Toffee Packing Machine is designed for high-speed wrapping of soft and hard toffee products. Adjustable settings support different product dimensions while maintaining stable film handling, servo-driven feed, and reliable wrapping quality.",
    seoTitle: "Toffee Packing Machine (AR-230) | High-Speed Twist & Fold Wrapper Pakistan",
    seoDescription:
      "High-speed AR-230 toffee packing machine (up to 800 packs/min) by AL Raheem Engineering Lahore. Supports twist-wrap and fold-wrap for soft toffee, hard candy, and chewing gum.",
    targetKeywords: [
      "toffee packing machine",
      "AR-230 toffee packing machine",
      "twist wrap machine",
      "fold wrap toffee machine",
      "candy wrapping machine Pakistan",
      "high speed confectionery wrapper Lahore",
    ],
    industrySlugs: ["confectionery"],
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Machine Type", value: "Automatic toffee packing machine" },
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
    faqs: [
      {
        question: "What is the maximum operating speed of the AR-230 toffee packing machine?",
        answer:
          "The AR-230 operates at speeds of up to 800 packs per minute, making it suitable for high-volume confectionery plants.",
      },
      {
        question: "Does the AR-230 machine handle both twist wrap and fold wrap?",
        answer:
          "Yes. The AR-230 can be configured for either twist-wrap or fold-wrap formats for soft toffees, hard boiled candies, and bubble gum pieces.",
      },
      {
        question: "How does the servo-driven film feed benefit confectionery production?",
        answer:
          "The servo-driven feed ensures accurate film registration, reducing wrapping material waste and maintaining clean, uniform twist finishes.",
      },
    ],
  },
  {
    id: "ar-1200",
    slug: "ar-1200",
    model: "AR-1200",
    name: "Candy Packing Machine (AR-1200)",
    category: "Packing Machines",
    shortDescription:
      "Automatic candy packing machine with 3-side and centre sealing for industrial confectionery lines.",
    description:
      "The AR-1200 is a high-capacity automatic candy packing machine with 3-side and centre sealing. It uses photo-electric film registration and inverter-based speed control for consistent industrial output across candy, toffee, and confectionery lines.",
    seoTitle: "Candy Packing Machine (AR-1200) | High Speed 3-Side & Centre Seal Pakistan",
    seoDescription:
      "AR-1200 candy packing machine by AL Raheem Engineering. 3-side and centre sealing, 1400 KG frame, 440V 3-phase, manufactured in Lahore.",
    targetKeywords: [
      "candy packing machine",
      "AR-1200 candy packing machine",
      "high speed candy packing machine Pakistan",
      "confectionery packing machine Lahore",
      "3 side seal packing machine",
      "AR-1200 packaging machine",
    ],
    industrySlugs: ["confectionery", "pharmaceutical"],
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "Dynamic according to candy and sachet format" },
      { label: "Machine Dimensions (L x W x H)", value: "Industrial high-speed candy packing line" },
      { label: "Machine Weight", value: "1,400 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "300 / 70 mm" },
      { label: "Conveyor Length", value: "Configured according to product feeding" },
      {
        label: "Machine Capacity",
        value: "High-speed industrial output (Speed rating pending manual verification for AR-1200)",
      },
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
      { label: "Max Speed", value: "High-speed continuous (Pending verification)" },
    ],
    faqs: [
      {
        question: "What is the sealing style and configuration of the AR-1200 candy packing machine?",
        answer:
          "The AR-1200 delivers versatile 3-side and centre heat sealing for small confectionery pieces and sachets with inverter-based drive control. (Operating speed subject to factory verification for the AR-1200 series).",
      },
      {
        question: "What are the electrical and weight specifications of the AR-1200?",
        answer:
          "The AR-1200 features a heavy 1,400 KG industrial frame, is powered by a 2 HP + 0.5 HP motor arrangement, operates on 440 VAC 3-phase 50 Hz power, and draws 15 Amp (2.8 kW).",
      },
      {
        question: "What pack weight range is supported by the AR-1200?",
        answer:
          "The AR-1200 supports individual confectionery pack weights from 2 g to 200 g using standard food grade packaging film reels (300/70 mm).",
      },
    ],
    featured: true,
  },
  {
    id: "ar-250",
    slug: "ar-250",
    model: "AR-250",
    name: "Noodle Packing Machine (AR-250)",
    category: "Packing Machines",
    shortDescription:
      "Automatic noodle and pasta pouch packing with integrated weighing support.",
    description:
      "The AR-250 Noodle Packing Machine combines product feeding, pouch forming, and sealing for noodle and pasta applications. It is configured for reliable dry-product handling, date coder compatibility, and practical factory operation across Pakistan.",
    seoTitle: "Noodle Packing Machine (AR-250) | Dry Pasta & Food Pouch Packaging Pakistan",
    seoDescription:
      "AR-250 automatic pouch packing machine by AL Raheem Engineering Lahore. Form-fill-seal system for instant noodles, pasta, and vermicelli with net weight dosing support.",
    targetKeywords: [
      "noodle packing machine",
      "AR-250 noodle packing machine",
      "pasta pouch packing machine",
      "instant noodle packaging machine Pakistan",
      "form fill seal noodle machine",
      "dry food pouch packing machine Lahore",
    ],
    industrySlugs: ["food"],
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
    faqs: [
      {
        question: "What types of dry food products can be packaged with the AR-250 machine?",
        answer:
          "The AR-250 is engineered for instant noodles, dry pasta, macaroni, vermicelli, and dry noodle cake portions.",
      },
      {
        question: "Does the AR-250 machine support online date coding?",
        answer:
          "Yes. The machine is fully compatible with standard industrial date coders, batch printers, and net weight dosing systems.",
      },
      {
        question: "What sealing method is used on the AR-250 machine?",
        answer:
          "It uses a continuous form-fill-seal pouch sealing system ensuring airtight pack integrity for long shelf-life dry food products.",
      },
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
      "The AR-210 Horizontal Flow Wrap Machine wraps individual products in continuous film with stable speed, registration, and sealing. It is suitable for bakery, confectionery, wafer, and soap packaging lines with 220V single-phase electrical operation.",
    seoTitle: "Horizontal Flow Wrap Machine (AR-210) | Biscuit, Chocolate & Soap Wrapper Pakistan",
    seoDescription:
      "AR-210 horizontal flow wrap machine by AL Raheem Engineering. 100 packs/min, 220V single phase, 1000 KG frame. Ideal for biscuits, chocolates, wafers, and soap bars in Lahore, Pakistan.",
    targetKeywords: [
      "flow wrap machine",
      "AR-210 flow wrap machine",
      "horizontal flow wrap machine Pakistan",
      "biscuit packing machine",
      "soap packing machine",
      "chocolate flow wrapper Lahore",
    ],
    industrySlugs: ["bakery", "confectionery", "soap", "cosmetics", "food", "snacks"],
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
    faqs: [
      {
        question: "What pack dimensions and speeds are supported by the AR-210 flow wrapper?",
        answer:
          "The AR-210 wraps products with dimensions of 100-300 mm (length), 25-75 mm (width), and 40-80 mm (height) at speeds of up to 100 packs per minute.",
      },
      {
        question: "What are the electrical requirements for the AR-210 machine?",
        answer:
          "The AR-210 operates on convenient single-phase 220 VAC (50 Hz) electricity with a 10 Amp (2 kW) load, making it easy to install in various factory environments.",
      },
      {
        question: "Can the AR-210 wrap non-food items like soap bars?",
        answer:
          "Yes. The AR-210 is widely used for wrapping laundry and toilet soap bars, muffin cakes, biscuits, wafers, and snack portions.",
      },
    ],
    featured: true,
  },
  {
    id: "ar-310",
    slug: "ar-310",
    model: "AR-310",
    name: "Biscuit & Rusk Packing Machine (AR-310)",
    category: "Packing Machines",
    shortDescription:
      "Dedicated biscuit and rusk packing machine with consistent dry-product sealing up to 100 packs/min.",
    description:
      "The AR-310 is purpose-built for biscuit and rusk packaging in bakery production. It handles dry bakery products with stable transfer, controlled sealing, and reliable operation for stackable and single-row pack formats in Pakistan.",
    seoTitle: "Biscuit & Rusk Packing Machine (AR-310) | Bakery Packaging Machinery Pakistan",
    seoDescription:
      "AR-310 biscuit and rusk packing machine (80-100 packs/min) by AL Raheem Engineering. Single-phase 220V, 1000 KG frame, gentle product transfer for dry bakery stacks in Lahore.",
    targetKeywords: [
      "biscuit packing machine",
      "AR-310 packing machine",
      "rusk packing machine Pakistan",
      "bakery packaging machine",
      "cracker packing machine Lahore",
      "biscuit flow wrap machine",
    ],
    industrySlugs: ["bakery", "food"],
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
    faqs: [
      {
        question: "How does the AR-310 prevent biscuit and rusk breakage?",
        answer:
          "The AR-310 features customized infeed guides and synchronized conveyor transfer specifically designed for delicate, brittle bakery items.",
      },
      {
        question: "What pack sizes are accommodated by the AR-310 biscuit packing machine?",
        answer:
          "It handles pack dimensions of 80-200 mm length, 10-75 mm width, and 40-80 mm height, covering single-row, stack, and slug biscuit formats.",
      },
      {
        question: "What is the output capacity and power setup of the AR-310?",
        answer:
          "The AR-310 produces 80 to 100 packs per minute and runs on 220 VAC single-phase power with a 10 Amp electrical load.",
      },
    ],
  },
  {
    id: "ar-180",
    slug: "ar-180",
    model: "AR-180",
    name: "Ice Cream Packing Machine (AR-180)",
    category: "Packing Machines",
    shortDescription:
      "Automatic ice cream packing machine for frozen-product lines.",
    description:
      "The AR-180 Ice Cream Packing Machine is engineered for frozen-product environments in Pakistan. It provides automatic operation and precise sealing for ice cream bars, cups, kulfi sticks, and novelty products.",
    seoTitle: "Ice Cream Packing Machine (AR-180) | Frozen Product Wrapper Pakistan",
    seoDescription:
      "AR-180 automatic ice cream packing machine by AL Raheem Engineering. Engineered for frozen novelty bars, cups, and kulfi packs in Lahore, Pakistan.",
    targetKeywords: [
      "ice cream packing machine",
      "AR-180 ice cream packing machine",
      "frozen product packaging machine Pakistan",
      "kulfi packing machine",
      "ice cream bar wrapper Lahore",
      "cold environment packaging machine",
    ],
    industrySlugs: ["food"],
    specs: [
      { label: "Start / Stop", value: "Soft start and soft stop" },
      { label: "Size of Pack (L x W x H)", value: "Configured for ice cream bar, cup and novelty formats" },
      { label: "Machine Dimensions (L x W x H)", value: "Frozen-product packing line configuration" },
      { label: "Machine Weight", value: "850 KG" },
      { label: "Film Reel (Outer / Core Diameter)", value: "Cold line compatible packaging film reel" },
      { label: "Conveyor Length", value: "Configured according to frozen product infeed" },
      {
        label: "Machine Capacity",
        value: "High-speed frozen-line output (Speed rating pending manual verification for AR-180)",
      },
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
      "Fast-action sealing for cold-environment products",
      "Durable product contact surfaces",
      "Suitable for bars, cups, and novelty formats",
    ],
    applications: ["Ice cream bars", "Ice cream cups", "Frozen novelty products", "Kulfi packs"],
    technicalDetails: [
      { label: "Max Speed", value: "High-speed continuous (Pending verification)" },
      { label: "Machine Weight", value: "850 KG" },
      { label: "Environment", value: "Frozen product line" },
      { label: "Construction", value: "Industrial production surfaces" },
    ],
    faqs: [
      {
        question: "What frozen products can be packaged with the AR-180 machine?",
        answer:
          "The AR-180 is engineered for ice cream stick bars, cups, frozen confectionery novelties, and traditional Pakistani kulfi packs.",
      },
      {
        question: "What is the speed capacity of the AR-180 in cold factory environments?",
        answer:
          "It delivers high output speeds with fast-action sealing to preserve frozen product integrity. (Operating speed subject to factory verification for the AR-180 series).",
      },
      {
        question: "Where is the AR-180 manufactured and supported?",
        answer:
          "Manufactured at AL Raheem Engineering in Lahore, Pakistan, with customized infeed conveyors for cold-line integration and on-site support.",
      },
    ],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((product) => product.featured).slice(0, 3);
export const CATEGORIES = Array.from(new Set(PRODUCTS.map((product) => product.category)));

export const MACHINE_SLUGS: Record<string, string> = {
  "ar-300": "zombie-packing-machine",
  "ar-230": "toffee-packing-machine",
  "ar-1200": "candy-packing-machine",
  "ar-250": "noodle-packing-machine",
  "ar-210": "horizontal-flow-wrap-machine",
  "ar-310": "biscuit-rusk-packing-machine",
  "ar-180": "ice-cream-packing-machine",
  // Legacy product slug aliases for backward-compatible routing
  "ar-zombie-packing-machine": "zombie-packing-machine",
  "ar-toffee-wrapping-machine": "toffee-packing-machine",
  "ar-800": "candy-packing-machine",
  "ar-noodle-packing-machine": "noodle-packing-machine",
};

const LEGACY_PRODUCT_SLUGS: Record<string, string> = {
  "ar-zombie": "ar-300",
  "ar-zombie-packing-machine": "ar-300",
  "ar-toffee": "ar-230",
  "ar-toffee-wrapping-machine": "ar-230",
  "ar-800": "ar-1200",
  "ar-noodle": "ar-250",
  "ar-noodle-packing-machine": "ar-250",
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
  if (machineSlug === "toffee-wrapping-machine") {
    return PRODUCTS.find((p) => p.model === "AR-230");
  }
  return PRODUCTS.find((product) => getMachineSlug(product.slug) === machineSlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  const resolvedSlug = LEGACY_PRODUCT_SLUGS[slug] ?? slug;
  return PRODUCTS.find((product) => product.slug === resolvedSlug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);

  return PRODUCTS.filter(
    (product) => product.slug !== current.slug && product.category === current.category
  )
    .concat(PRODUCTS.filter((product) => product.slug !== current.slug && product.category !== current.category))
    .slice(0, limit);
}

export function getProductsByIndustry(industrySlug: string): Product[] {
  return PRODUCTS.filter((product) => product.industrySlugs?.includes(industrySlug));
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((product) => product.slug);
}

export function getAllMachineSlugs(): string[] {
  return PRODUCTS.map((product) => getMachineSlug(product.slug));
}
