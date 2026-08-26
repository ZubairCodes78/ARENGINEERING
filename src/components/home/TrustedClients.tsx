import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { TRUSTED_CLIENTS } from "@/lib/constants";

export default function TrustedClients() {
  return (
    <section className="bg-white py-28 lg:py-[120px]">
      <Container>
        <FadeUp>
          <SectionHeading
            label="Trusted Clients"
            title="Trusted by Leading Brands"
            description="Serving food, confectionery, bakery, snacks, pharmaceutical and industrial manufacturers across Pakistan."
            align="center"
            className="mx-auto"
          />
        </FadeUp>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 place-items-center gap-x-16 gap-y-12 sm:grid-cols-3">
          {TRUSTED_CLIENTS.map((client, index) => (
            <FadeUp key={client.name} delay={index * 0.04}>
              <div className="group flex h-[120px] w-full items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} - Industrial Packaging Machinery Client of AL Raheem Engineering`}
                  width={360}
                  height={144}
                  loading="lazy"
                  sizes="(min-width: 640px) 240px, 180px"
                  className="h-auto max-h-[72px] w-auto object-contain grayscale transition duration-300 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
