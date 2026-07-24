import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  current: string;
}

export default function PageHeader({ label, title, description, current }: PageHeaderProps) {
  return (
    <section className="bg-primary pb-20 pt-32 text-white lg:pb-24">
      <Container>
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/62" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{current}</span>
        </nav>
        <p className="text-sm font-semibold tracking-[0.02em] text-secondary">{label}</p>
        <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">{description}</p>
      </Container>
    </section>
  );
}
