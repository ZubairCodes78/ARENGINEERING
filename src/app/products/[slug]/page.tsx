import { redirect } from "next/navigation";
import { getAllProductSlugs, getMachineSlug, getProductBySlug } from "@/lib/products";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  redirect(product ? `/machines/${getMachineSlug(product.slug)}` : "/machines");
}

