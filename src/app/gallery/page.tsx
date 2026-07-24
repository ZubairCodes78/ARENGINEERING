import type { Metadata } from "next";
import MachineVisual from "@/components/MachineVisual";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gallery | AL Raheem Engineering",
  description:
    "Factory gallery, machine gallery, installation gallery, and video-ready sections for AL Raheem Engineering.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Factory Gallery"
        title="Machines, installations, and factory views"
        description="A structured gallery area prepared for real factory photos, installation images, machine views, and videos."
        current="Gallery"
      />
      <section className="bg-light-gray py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {["Factory Gallery", "Machine Gallery", "Installation Gallery"].map((title, index) => (
              <article key={title} className="rounded-xl border border-border bg-white p-8 shadow-sm">
                <MachineVisual
                  model={PRODUCTS[index]?.model ?? "AR"}
                  name={title}
                  className="min-h-[240px] rounded-b-none border-0 border-b border-border"
                />
                <h2 className="mt-5 font-heading text-xl font-semibold text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-gray">
                  Placeholder area ready for verified photography and production media.
                </p>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-xl border border-border bg-white p-8 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-primary">Videos</h2>
            <p className="mt-3 text-sm leading-7 text-dark-gray">
              This section is prepared for factory walkthroughs, machine demos, installation clips, and customer training videos.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
