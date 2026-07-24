export const COMPANY = {
  name: "AL RAHEEM ENGINEERING",
  legalName: "AL Raheem Engineering",
  tagline: "Industrial Packaging Machine Manufacturer",
  website: "alraheemengineering.com",
  websiteUrl: "https://alraheemengineering.com",
  description:
    "Designing reliable packaging machines engineered for performance, precision and long-term industrial use.",
  address: {
    line1: "Iqbal Chowk, Ashayana Road",
    line2: "Bank Stop",
    city: "Lahore",
    country: "Pakistan",
    full: "Iqbal Chowk, Ashayana Road, Bank Stop, Lahore, Pakistan",
  },
  phone: "0303-4142423",
  phoneRaw: "03034142423",
  whatsapp: "923034142423",
  email: "info@alraheemengineering.com",
  hours: "Monday - Saturday: 8:00 AM - 7:00 PM",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Machines", href: "/machines" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/galleryhb" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Payment Policy", href: "/payment-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

export const INDUSTRIES = [
  {
    name: "Food",
    description: "Reliable packaging systems for dry foods, grains, and FMCG products.",
    icon: "UtensilsCrossed" as const,
  },
  {
    name: "Confectionery",
    description: "High-speed wrapping and pouch packing for toffee, candy, and chocolate.",
    icon: "Candy" as const,
  },
  {
    name: "Bakery",
    description: "Flow wrap machines for biscuits, rusk, cakes, wafers, and baked goods.",
    icon: "Croissant" as const,
  },
  {
    name: "Snacks",
    description: "Production-ready systems for chips, nimco, extruded snacks, and portions.",
    icon: "Package" as const,
  },
  {
    name: "Soap",
    description: "Horizontal wrapping systems for soap bars and personal care blocks.",
    icon: "Droplets" as const,
  },
  {
    name: "Cosmetics",
    description: "Liquid-over-wrap and sachet packaging for creams and cosmetic packs.",
    icon: "Sparkles" as const,
  },
  {
    name: "Pharmaceutical",
    description: "Precise sealing and controlled packaging for regulated production lines.",
    icon: "Pill" as const,
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Engineering-First Design",
    description:
      "Every machine is developed around stable frames, proven sealing geometry, and components selected for continuous industrial duty.",
  },
  {
    title: "Manufactured in Lahore",
    description:
      "Local production means faster communication, practical customization, spare part availability, and direct factory support.",
  },
  {
    title: "Application Experience",
    description:
      "Our team understands product handling, film behavior, line speed, and changeover requirements across food and FMCG factories.",
  },
  {
    title: "Long-Term Support",
    description:
      "Installation guidance, operator training, maintenance support, and spare parts help keep production lines running reliably.",
  },
] as const;

export const MANUFACTURING_STEPS = [
  {
    step: "01",
    title: "Application Review",
    description:
      "Product size, film type, output target, and factory layout are reviewed before machine configuration begins.",
  },
  {
    step: "02",
    title: "Engineering",
    description:
      "Mechanical assemblies, controls, sealing systems, and safety details are prepared for the required production duty.",
  },
  {
    step: "03",
    title: "Fabrication",
    description:
      "Frames and assemblies are cut, welded, machined, and finished with attention to durability and service access.",
  },
  {
    step: "04",
    title: "Assembly",
    description:
      "Drive systems, control panels, sealing units, conveyors, guards, and film paths are built into the final machine.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Machines are tested for registration, seal quality, speed stability, and operating consistency before dispatch.",
  },
] as const;

export const STATS = [
  { value: "35+", label: "Founder Experience" },
  { value: "200+", label: "Machines Delivered" },
  { value: "50+", label: "Industrial Clients" },
] as const;

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@ALRaheemEngineering/";

export const SOCIAL_LINKS = [
  {
    platform: "YouTube",
    href: YOUTUBE_CHANNEL_URL,
    description: "Machine demonstrations, customer installations and factory testing videos.",
    ariaLabel: "Visit AL Raheem Engineering on YouTube",
    brandColor: "#FF0000",
    hoverClass: "hover:border-[#FF0000]/35 hover:bg-[#FF0000]/5 hover:text-[#FF0000]",
    groupHoverClass: "group-hover:text-[#FF0000]",
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/alraheem.engineering/",
    description: "Factory updates, machine visuals and production highlights.",
    ariaLabel: "Visit AL Raheem Engineering on Instagram",
    brandColor: "#E4405F",
    hoverClass: "hover:border-[#E4405F]/35 hover:bg-[#E4405F]/5 hover:text-[#E4405F]",
    groupHoverClass: "group-hover:text-[#E4405F]",
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100088003634011",
    description: "Company news, customer support updates and machine posts.",
    ariaLabel: "Visit AL Raheem Engineering on Facebook",
    brandColor: "#1877F2",
    hoverClass: "hover:border-[#1877F2]/35 hover:bg-[#1877F2]/5 hover:text-[#1877F2]",
    groupHoverClass: "group-hover:text-[#1877F2]",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/al-raheem-engineering-833267307/",
    description: "Industrial engineering updates and company profile.",
    ariaLabel: "Visit AL Raheem Engineering on LinkedIn",
    brandColor: "#0A66C2",
    hoverClass: "hover:border-[#0A66C2]/35 hover:bg-[#0A66C2]/5 hover:text-[#0A66C2]",
    groupHoverClass: "group-hover:text-[#0A66C2]",
  },
  {
    platform: "X (Twitter)",
    href: "https://x.com/Alraheemengine",
    description: "Short updates, launches and support announcements.",
    ariaLabel: "Visit AL Raheem Engineering on X",
    brandColor: "#000000",
    hoverClass: "hover:border-black/35 hover:bg-black/5 hover:text-black",
    groupHoverClass: "group-hover:text-black",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The AR-800 improved our sealing consistency and gave our line the speed we needed for continuous confectionery production.",
    author: "Production Manager",
    company: "Confectionery Manufacturer, Lahore",
  },
  {
    quote:
      "Their team understood our biscuit packing requirements quickly. The flow wrap machine integrated cleanly with our line.",
    author: "Operations Director",
    company: "Bakery and Biscuit Factory, Faisalabad",
  },
  {
    quote:
      "Local manufacturing and support made the difference for us. Spare parts and service have been accessible whenever required.",
    author: "Plant Engineer",
    company: "FMCG Packaging Unit, Karachi",
  },
  {
    quote:
      "Jojo has seen significant improvement in packaging efficiency since partnering with AL RAHEEM ENGINEERING. Their machines are reliable and well-suited for our production needs.",
    author: "Factory Manager",
    company: "Jojo, Lahore",
  },
  {
    quote:
      "Kolson's packaging line has been transformed with the installation of AR machines. The quality and consistency of seals has exceeded our expectations.",
    author: "Head of Operations",
    company: "Kolson, Karachi",
  },
  {
    quote:
      "Mayfair appreciates the professional approach and technical expertise of AL RAHEEM ENGINEERING. Their after-sales support ensures our operations run smoothly.",
    author: "Production Head",
    company: "Mayfair, Islamabad",
  },
] as const;

export const FAQS = [
  {
    question: "Which industries do your machines serve?",
    answer:
      "Our packaging machines serve food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical applications.",
  },
  {
    question: "Do you provide installation and operator training?",
    answer:
      "Yes. We provide installation guidance, commissioning support, and operator training so the machine is ready for production.",
  },
  {
    question: "Can a machine be configured for our product?",
    answer:
      "Yes. Pack size, film type, speed, sealing format, and line integration can be reviewed for your product and factory layout.",
  },
  {
    question: "How do we request a quotation?",
    answer:
      "Contact us by phone, WhatsApp, or email with your product type, pack size, and required output speed.",
  },
] as const;

export const TIMELINE = [
  {
    year: "1990",
    title: "Experience Begins",
    description:
      "Abdul Sattar starts his engineering career, developing practical machine-building expertise through hands-on industrial work.",
  },
  {
    year: "2020",
    title: "AL Raheem Engineering Established",
    description:
      "The company is founded in Lahore to manufacture reliable industrial packaging machines for local factories.",
  },
  {
    year: "Today",
    title: "Serving Industries Across Pakistan",
    description:
      "AR machines support food, bakery, confectionery, snacks, soap, cosmetics, and pharmaceutical production.",
  },
] as const;

export const ROADMAP = [
  {
    year: "1990",
    title: "Experience Begins",
    description: "Founder Abdul Sattar starts his engineering career.",
    icon: "CalendarClock" as const,
  },
  {
    year: "2020",
    title: "Company Established",
    description: "AL RAHEEM ENGINEERING officially established.",
    icon: "Factory" as const,
  },
  {
    year: "Design",
    title: "Machine Design",
    description: "Machine concepts are configured around product, film, speed, and factory layout.",
    icon: "DraftingCompass" as const,
  },
  {
    year: "Build",
    title: "Manufacturing",
    description: "Frames, sealing systems, conveyors, and controls are manufactured and assembled.",
    icon: "Cog" as const,
  },
  {
    year: "Install",
    title: "Installation",
    description: "Machines are commissioned with practical operator guidance and setup support.",
    icon: "Wrench" as const,
  },
  {
    year: "Support",
    title: "After Sales Support",
    description: "Maintenance support, spare parts, and troubleshooting keep production moving.",
    icon: "Headset" as const,
  },
  {
    year: "Success",
    title: "Customer Success",
    description: "Stable packaging performance helps factories improve output and consistency.",
    icon: "Trophy" as const,
  },
] as const;

export const TRUSTED_CLIENTS = [
  { name: "Gibs Foods", logo: "/images/clients/gibs-foods.png" },
  { name: "Rupali Foods", logo: "/images/clients/rupali-foods.png" },
  { name: "Unilever", logo: "/images/clients/unilever.png" },
  { name: "Jojo", logo: "/images/clients/jojo.png" },
  { name: "Kolson", logo: "/images/clients/kolson.png" },
  { name: "Mayfair", logo: "/images/clients/mayfair.png" },
] as const;

export const BLOG_POSTS = [
  {
    title: "How to choose a packaging machine for factory production",
    category: "Packaging Tips",
    excerpt:
      "A practical guide to reviewing product size, film type, output target, power, and operator workflow before requesting a quotation.",
    href: "/blog",
  },
  {
    title: "Why local support matters for industrial packaging machines",
    category: "Industrial Articles",
    excerpt:
      "Spare parts, commissioning support, and accessible troubleshooting can be just as important as machine speed.",
    href: "/blog",
  },
  {
    title: "Company update: expanding AR machine applications",
    category: "Company Updates",
    excerpt:
      "AL Raheem Engineering continues to serve food, bakery, confectionery, personal care, and pharmaceutical manufacturers.",
    href: "/blog",
  },
] as const;

export const FOUNDER = {
  name: "Abdul Sattar",
  title: "Founder",
  experience: "35+ Years of Engineering Experience",
  message:
    "Abdul Sattar has been working in the industrial engineering and packaging machine industry since 1990.",
  vision:
    "His focus has always been quality engineering, long-term customer relationships, reliable after-sales support and continuous innovation.",
  quote:
    "Our goal is not only to manufacture machines, but to build long-term trust through quality engineering and dependable service.",
  highlights: [
    "35+ Years Experience",
    "Since 1990",
    "Established Company in 2020",
    "Trusted Industrial Engineering Solutions",
  ],
  story: [
    "Abdul Sattar has been working in the industrial engineering and packaging machine industry since 1990.",
    "With more than 35 years of hands-on experience, he has designed, manufactured and delivered reliable packaging solutions for businesses across Pakistan.",
    "His focus has always been quality engineering, long-term customer relationships, reliable after-sales support and continuous innovation.",
    "In 2020, he officially established AL RAHEEM ENGINEERING to provide professional packaging machinery and engineering solutions under one trusted company.",
    "Today, the company continues to manufacture high-quality industrial packaging machines for the food, confectionery, bakery, snacks and pharmaceutical industries.",
  ],
} as const;

export const PAYMENT_STEPS = [
  {
    value: "60%",
    title: "Advance Payment",
    description: "Payable to confirm the order and start production.",
  },
  {
    value: "20%",
    title: "During Production",
    description: "Payable during the manufacturing stage.",
  },
  {
    value: "20%",
    title: "Before Delivery",
    description: "Payable before final delivery or dispatch.",
  },
] as const;

export const MISSION =
  "To engineer and manufacture packaging machines that deliver consistent performance, precision sealing, and long service life for industrial manufacturers.";

export const VISION =
  "To be the most trusted industrial packaging machinery manufacturer in Pakistan, recognized for engineering integrity and reliable after-sales support.";

export function whatsAppUrl(message: string) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppMessage(productName: string) {
  return `Hello AL Raheem Engineering, I am interested in the ${productName}. Please share specifications, pricing, and delivery details.`;
}

export const EVENTS = [
  {
    title: "Employee Appreciation Dinner",
    slug: "employee-appreciation-dinner-2026",
    description: "Celebrating teamwork, dedication, and the people behind our success.",
    date: "January 15, 2026",
    coverImage: "/images/events/employee-appreciation-dinner-2026/cover.jpeg",
    folder: "employee-appreciation-dinner-2026",
  },
] as const;
