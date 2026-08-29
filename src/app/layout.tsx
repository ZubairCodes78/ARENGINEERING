import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.websiteUrl),
  applicationName: COMPANY.name,
  title: {
    default: "Packaging Machine Manufacturer Pakistan | AL RAHEEM ENGINEERING",
    template: "%s | AL RAHEEM ENGINEERING",
  },
  description:
    "AL Raheem Engineering is a premier packaging machine manufacturer in Pakistan. We engineer high-speed flow wrap, candy packing, toffee wrapping, biscuit, noodle, and soap packaging machinery in Lahore.",
  keywords: [
    "Packaging Machine Manufacturer Pakistan",
    "Packaging Machinery Pakistan",
    "Packing Machine Manufacturer Pakistan",
    "Industrial Packaging Machine Pakistan",
    "Packaging Machine Manufacturer Lahore",
    "Packaging Machinery Lahore",
    "Flow Wrap Machine Pakistan",
    "Candy Packing Machine Pakistan",
    "Toffee Wrapping Machine Pakistan",
    "Biscuit Packing Machine Pakistan",
    "Noodle Packing Machine Pakistan",
    "Soap Packing Machine Pakistan",
    "Cosmetic Packing Machine Pakistan",
    "AL Raheem Engineering",
    "AR Engineering Pakistan",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.websiteUrl }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "Industrial Machinery & Packaging Systems",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: COMPANY.name,
    statusBarStyle: "default",
  },
  other: {
    "msapplication-TileImage": "/images/logo.png",
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.4258;74.3414",
    ICBM: "31.4258, 74.3414",
  },
  openGraph: {
    title: "Packaging Machine Manufacturer Pakistan | AL RAHEEM ENGINEERING",
    description:
      "Reliable industrial packaging machinery engineered for performance, precision, and long-term production use across Pakistan and global markets.",
    url: COMPANY.websiteUrl,
    siteName: COMPANY.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/hero-flow-wrap.png",
        width: 1200,
        height: 630,
        alt: "AL RAHEEM ENGINEERING - Packaging Machine Manufacturer Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Machine Manufacturer Pakistan | AL RAHEEM ENGINEERING",
    description:
      "Reliable industrial packaging machines for food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical production in Pakistan.",
    images: ["/images/hero-flow-wrap.png"],
    site: "@Alraheemengine",
    creator: "@Alraheemengine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "Manufacturer"],
        "@id": `${COMPANY.websiteUrl}/#organization`,
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        url: COMPANY.websiteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${COMPANY.websiteUrl}/images/logo.png`,
          caption: COMPANY.name,
        },
        image: `${COMPANY.websiteUrl}/images/hero-flow-wrap.png`,
        description: COMPANY.description,
        email: COMPANY.email,
        telephone: COMPANY.phoneInternational,
        foundingDate: "2020",
        founder: {
          "@type": "Person",
          name: "Abdul Sattar",
          jobTitle: "Founder & Chief Packaging Engineer",
          description:
            "Over 35 years of engineering and industrial packaging machine building experience since 1990 in Pakistan.",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
          addressLocality: COMPANY.address.city,
          addressRegion: COMPANY.address.state,
          postalCode: COMPANY.address.postalCode,
          addressCountry: COMPANY.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: COMPANY.geo.latitude,
          longitude: COMPANY.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          {
            "@type": "Country",
            name: "Pakistan",
          },
          {
            "@type": "AdministrativeArea",
            name: "Worldwide",
          },
        ],
        priceRange: "$$$",
        sameAs: [
          "https://www.youtube.com/@ALRaheemEngineering/",
          "https://www.instagram.com/alraheem.engineering/",
          "https://www.facebook.com/profile.php?id=100088003634011",
          "https://www.linkedin.com/in/al-raheem-engineering-833267307/",
          "https://x.com/Alraheemengine",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${COMPANY.websiteUrl}/#website`,
        url: COMPANY.websiteUrl,
        name: COMPANY.name,
        publisher: {
          "@id": `${COMPANY.websiteUrl}/#organization`,
        },
        inLanguage: "en-PK",
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="gPUBNBIwMzKPEkHyrnX_aWhaSTUKJYjdi8spc8VXqJc"
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalSchema),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
