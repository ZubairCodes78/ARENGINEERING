import Container from "@/components/ui/Container";

interface PolicyPageProps {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PolicyPage({ label, title, description, children }: PolicyPageProps) {
  return (
    <section className="bg-light-gray pb-24 pt-32 lg:pb-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            {label}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-dark-gray">{description}</p>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-white p-7 shadow-sm md:p-10">
          {children}
        </div>
      </Container>
    </section>
  );
}
