import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURED_PRODUCTS } from "@/lib/products";

export default function FeaturedMachines() {
  return (
    <section className="bg-light-gray py-28 lg:py-[120px]">
      <Container>
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label="Featured Machines"
              title="Selected AR packaging systems"
              description="Three core machines shown on the home page. The full catalog is available on the machines page."
            />
            <Button href="/machines" variant="outline" className="shrink-0">
              View All Machines
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURED_PRODUCTS.map((product, index) => (
            <FadeUp key={product.slug} delay={index * 0.08}>
              <ProductCard product={product} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
