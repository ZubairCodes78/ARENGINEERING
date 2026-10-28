import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import OfficialLogo from "@/components/OfficialLogo";
import SocialIcon from "@/components/SocialIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY, LEGAL_LINKS, SOCIAL_LINKS, whatsAppUrl } from "@/lib/constants";

const machineLinks = [
  { label: "Zombie Packing Machine (AR-300)", href: "/machines/zombie-packing-machine" },
  { label: "Toffee Packing Machine (AR-230)", href: "/machines/toffee-packing-machine" },
  { label: "Candy Packing Machine (AR-1200)", href: "/machines/candy-packing-machine" },
  { label: "Noodle Packing Machine (AR-250)", href: "/machines/noodle-packing-machine" },
  { label: "Flow Wrap Machine (AR-210)", href: "/machines/horizontal-flow-wrap-machine" },
  { label: "Biscuit & Rusk Packing Machine (AR-310)", href: "/machines/biscuit-rusk-packing-machine" },
  { label: "Ice Cream Packing Machine (AR-180)", href: "/machines/ice-cream-packing-machine" },
  { label: "View Complete Machine Catalogue →", href: "/machines" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Founder Profile", href: "/founder" },
  { label: "Manufacturing Process", href: "/manufacturing" },
  { label: "Industries Served", href: "/industries" },
  { label: "Client Testimonials", href: "/testimonials" },
  { label: "Packaging Machine FAQs", href: "/faqs" },
  { label: "Articles & Buying Guides", href: "/blog" },
  { label: "Life at AR Engineering", href: "/galleryhb" },
  { label: "Official Social Media", href: "/social" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_0.9fr_1fr]">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <OfficialLogo
                theme="dark"
                height={80}
                className="!h-[55px] !w-[176px] md:!h-[65px] md:!w-[208px] lg:!h-[80px] lg:!w-[256px]"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
              Industrial packaging machine manufacturer in Lahore, Pakistan. Engineering reliable
              systems for food, confectionery, bakery, snacks, soap, and pharmaceutical
              production lines.
            </p>
            <div className="mt-6 space-y-2 text-xs text-white/50">
              <p>📍 {COMPANY.address.full}</p>
              <p>📞 Phone: {COMPANY.phone}</p>
              <p>✉️ Email: {COMPANY.email}</p>
            </div>
          </div>

          {/* Column 2: Packaging Machines */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold tracking-wide text-white">
              Packaging Machinery
            </h3>
            <ul className="space-y-2.5">
              {machineLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold tracking-wide text-white">
              Company & Resources
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold tracking-wide text-white">
              Contact & Policies
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-xs text-white/70">
                <Phone className="h-3.5 w-3.5 shrink-0 text-secondary" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-white/70">
                <Mail className="h-3.5 w-3.5 shrink-0 text-secondary" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-white/70">
                <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-secondary" />
                <a
                  href={whatsAppUrl("Hello AL Raheem Engineering, I would like to inquire about your packaging machines.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Inquiry
                </a>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                Policies & Terms
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-white/60">
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.platform}
                  className={`group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white text-primary shadow-sm transition duration-200 hover:scale-[1.08] ${item.hoverClass}`}
                  aria-label={item.ariaLabel}
                >
                  <SocialIcon platform={item.platform} className="h-3.5 w-3.5" />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
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
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Lahore, Pakistan — Industrial Packaging Machines & Systems
          </p>
        </Container>
      </div>
    </footer>
  );
}
