import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { CATEGORIES, PRODUCTS, getMachineSlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Packaging Machinery Pakistan | Industrial Packaging Machine Manufacturer",
  description:
    "Explore the complete industrial packaging machinery catalogue from AL Raheem Engineering Pakistan. Featuring Zombie packing, toffee packing, candy packing, noodle packing, horizontal flow wrap, biscuit and rusk, and ice cream packing machines.",
  keywords: [
    "Packaging Machine Manufacturer Pakistan",
    "Packaging Machinery Pakistan",
    "Packing Machine Manufacturer Pakistan",
    "Industrial Packaging Machine Pakistan",
    "Packaging Machine Lahore",
    "Packaging Machinery Lahore",
    "Flow Wrap Machine Pakistan",
    "Candy Packing Machine Pakistan",
    "Toffee Packing Machine Pakistan",
    "Zombie Packing Machine Pakistan",
    "Biscuit Packing Machine Pakistan",
    "Noodle Packing Machine Pakistan",
    "Ice Cream Packing Machine Pakistan",
  ],
  alternates: {
    canonical: "/machines",
  },
  openGraph: {
    title: "Packaging Machinery Pakistan | Industrial Packaging Machine Manufacturer",
    description:
      "Explore the complete industrial packaging machinery catalogue from AL Raheem Engineering Pakistan. High-speed flow wrap, candy packing, toffee packing, zombie packing, biscuit, noodle, and ice cream packing machines.",
    url: `${COMPANY.websiteUrl}/machines`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
    images: [
      {
        url: "/images/hero-flow-wrap.png",
        width: 1200,
        height: 630,
        alt: "AL Raheem Engineering Packaging Machines Catalog Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Machinery Pakistan | Industrial Packaging Machine Manufacturer",
    description:
      "Complete AR series industrial packaging machinery catalogue from AL Raheem Engineering in Pakistan.",
    images: ["/images/hero-flow-wrap.png"],
  },
};

export default function MachinesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${COMPANY.websiteUrl}/machines#collection`,
    name: "Industrial Packaging Machines Catalogue",
    description:
      "Complete catalogue of industrial packaging machines manufactured by AL Raheem Engineering in Lahore, Pakistan.",
    url: `${COMPANY.websiteUrl}/machines`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PRODUCTS.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${COMPANY.websiteUrl}/machines/${getMachineSlug(product.slug)}`,
        description: product.shortDescription,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <PageHeader
        label="Complete Machine Catalogue"
        title="Industrial packaging machines"
        description="The complete AL Raheem Engineering machine catalog. Every AR series model links to a dedicated specification page for production buyers across Pakistan and international markets."
        current="Machines"
      />
      <section className="bg-light-gray py-28 lg:py-[120px]">
        <Container>
          <div className="flex flex-wrap gap-2" aria-label="Packaging categories">
            {CATEGORIES.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
