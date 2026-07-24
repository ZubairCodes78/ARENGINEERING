import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import OfficialLogo from "@/components/OfficialLogo";
import SocialIcon from "@/components/SocialIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY, LEGAL_LINKS, SOCIAL_LINKS, whatsAppUrl } from "@/lib/constants";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Machines", href: "/machines" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <OfficialLogo
                theme="dark"
                height={80}
                className="!h-[55px] !w-[176px] md:!h-[65px] md:!w-[208px] lg:!h-[80px] lg:!w-[256px]"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
              Industrial packaging machine manufacturer serving food, confectionery, bakery,
              snacks, soap, cosmetics, and pharmaceutical production.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold text-white">
              Policies
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.filter((link) => link.href !== "/refund-policy").map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{COMPANY.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href={whatsAppUrl("Hello AL Raheem Engineering, I would like to inquire about your machines.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp inquiry
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.platform}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white text-primary shadow-sm transition duration-200 hover:scale-[1.08] ${item.hoverClass}`}
                  aria-label={item.ariaLabel}
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
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/45">
            Copyright {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Lahore, Pakistan - Industrial packaging machines
          </p>
        </Container>
      </div>
    </footer>
  );
}
