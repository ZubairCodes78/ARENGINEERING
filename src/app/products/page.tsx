import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Container from "@/components/ui/Container";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Machines | AL RAHEEM ENGINEERING",
  description:
    "View the complete AR machine catalog from AL Raheem Engineering, including zombie packing, toffee packing, candy packing, noodle packing, flow wrap, biscuit and rusk, and ice cream packing machines.",
};

export default function ProductsPage() {
  return (
    <section className="bg-light-gray pb-24 pt-32 lg:pb-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Machines
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Industrial packaging machines
          </h1>
          <p className="mt-5 text-base leading-8 text-dark-gray">
            The complete AL Raheem Engineering machine catalog. Only AR series machines are listed,
            with each model linked to a dedicated specification page.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
