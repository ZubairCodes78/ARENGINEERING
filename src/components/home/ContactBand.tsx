import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import { COMPANY } from "@/lib/constants";

export default function ContactBand() {
  return (
    <section className="bg-white py-28 lg:py-[120px]">
      <Container>
        <FadeUp>
          <div className="rounded-2xl border border-border bg-primary p-8 text-white shadow-[0_24px_70px_rgba(8,40,68,0.16)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-secondary">
                  Contact
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
                  Discuss your packaging machine requirement.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Share your product, pack size, output target, and available floor space. The team
                  will guide you toward the appropriate AR machine configuration.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary">Contact Us</Button>
                  <Button href={`tel:${COMPANY.phoneRaw}`} variant="outline-light">Call {COMPANY.phone}</Button>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-white/72">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {COMPANY.address.full}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {COMPANY.phone}
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {COMPANY.email}
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
