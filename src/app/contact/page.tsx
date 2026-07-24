import type { Metadata } from "next";
import { Clock, Globe, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/SocialIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { COMPANY, SOCIAL_LINKS, whatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | AL RAHEEM ENGINEERING",
  description:
    "Contact AL Raheem Engineering in Lahore for industrial packaging machine inquiries, specifications, quotations, and support.",
};

const contactItems: Array<{ icon: LucideIcon; label: string; value: string }> = [
  { icon: MapPin, label: "Address", value: COMPANY.address.full },
  { icon: Phone, label: "Phone", value: COMPANY.phone },
  { icon: Mail, label: "Email", value: COMPANY.email },
  { icon: Globe, label: "Website", value: COMPANY.website },
  { icon: Clock, label: "Business Hours", value: COMPANY.hours },
];

export default function ContactPage() {
  return (
    <section className="bg-light-gray pb-28 pt-32 lg:pb-[120px]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-secondary">
            Contact
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Discuss your production requirement
          </h1>
          <p className="mt-5 text-base leading-8 text-dark-gray">
            Contact AL Raheem Engineering for AR machine specifications, quotation requests,
            installation discussions, and after-sales support.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold text-primary">Quick Contact</h2>
              <ul className="mt-6 space-y-5">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" strokeWidth={1.8} />
                    <div>
                      <p className="text-sm font-semibold text-primary">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-dark-gray">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={whatsAppUrl("Hello AL Raheem Engineering, I would like to inquire about your packaging machines.")}
                  external
                  variant="whatsapp"
                >
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button href={`tel:${COMPANY.phoneRaw}`} variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="font-heading text-sm font-semibold text-primary">Official Social Channels</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.platform}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.platform}
                      aria-label={item.ariaLabel}
                      className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm transition duration-200 hover:scale-[1.08] ${item.hoverClass}`}
                    >
                      <SocialIcon platform={item.platform} className="h-4 w-4" />
                      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                        {item.platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
              <iframe
                title="AL Raheem Engineering location map"
                src="https://www.google.com/maps?q=Iqbal%20Chowk%20Ashayana%20Road%20Bank%20Stop%20Lahore&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
