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
  alternates: {
    canonical: "/",
  },
  title: "AL RAHEEM ENGINEERING | Industrial Packaging Machine Manufacturer",
  description:
    "AL Raheem Engineering manufactures reliable industrial packaging machines for food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical production.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/logo.png",
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
  },
  keywords: [
    "AL Raheem Engineering",
    "industrial packaging machines",
    "packing machine manufacturer Lahore",
    "flow wrap machine",
    "candy packing machine",
    "toffee wrapping machine",
    "AR Engineering",
  ],
  openGraph: {
    title: "AL RAHEEM ENGINEERING",
    description:
      "Industrial packaging machines engineered for performance, precision, and long-term production use.",
    url: COMPANY.websiteUrl,
    siteName: COMPANY.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL RAHEEM ENGINEERING | Industrial Packaging Machine Manufacturer",
    description:
      "Reliable industrial packaging machines for food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY.name,
              url: COMPANY.websiteUrl,
              email: COMPANY.email,
              telephone: COMPANY.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
                addressLocality: COMPANY.address.city,
                addressCountry: COMPANY.address.country,
              },
            }),
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
