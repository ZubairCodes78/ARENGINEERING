import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Machines | AL RAHEEM ENGINEERING",
  description:
    "View the complete AR machine catalog from AL Raheem Engineering, including candy packing, toffee wrapping, flow wrap, biscuit, noodle, and ice cream packing machines.",
};

export default function MachinesPage() {
  return (
    <>
      <PageHeader
        label="Complete Machine Catalogue"
        title="Industrial packaging machines"
        description="The complete AL Raheem Engineering machine catalog. Every AR series model links to a dedicated specification page for production buyers."
        current="Machines"
      />
      <section className="bg-light-gray py-28 lg:py-[120px]">
        <Container>
          <div className="flex flex-wrap gap-2">
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
