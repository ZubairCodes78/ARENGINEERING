import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getMachineSlug, getProductImage, type Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const image = getProductImage(product);

  return (
    <Link
      href={`/machines/${getMachineSlug(product.slug)}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_14px_40px_rgba(8,40,68,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-[0_28px_70px_rgba(8,40,68,0.14)]"
    >
      <div className="relative min-h-[320px] overflow-hidden border-b border-border" aria-label={`${product.name} machine visual`}>
        <Image src={image} alt={product.name} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,40,68,0.08),rgba(8,40,68,0.58))]" />
        <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/90 px-3 py-2 text-primary shadow-sm backdrop-blur">
          <p className="text-xs font-semibold">{product.model}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8 lg:p-9">
        <p className="text-sm font-semibold text-secondary">
          {product.category}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold text-primary group-hover:text-secondary">
          {product.name}
        </h2>
        <p className="mt-4 flex-1 text-sm leading-7 text-dark-gray">{product.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {product.applications.slice(0, 3).map((application) => (
            <span
              key={application}
              className="inline-flex items-center gap-1.5 rounded-full bg-light-gray px-3 py-1.5 text-xs font-medium text-primary"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-secondary" strokeWidth={1.8} />
              {application}
            </span>
          ))}
        </div>
        <span className="mt-8 inline-flex min-h-11 w-fit items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-all group-hover:bg-secondary">
          View Details
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
