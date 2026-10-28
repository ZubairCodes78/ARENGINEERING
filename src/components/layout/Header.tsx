"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import OfficialLogo from "@/components/OfficialLogo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { NAV_LINKS, whatsAppUrl } from "@/lib/constants";
import { PRODUCTS, getMachineSlug } from "@/lib/products";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 32;
}

function getScrollServerSnapshot() {
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const scrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, getScrollServerSnapshot);

  useEffect(() => {
    if (!mounted) return;
    
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  const transparent = isHome && !scrolled && !open;
  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        transparent ? "bg-transparent" : "border-b border-border/80 bg-white/95 shadow-sm backdrop-blur"
      )}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="AL Raheem Engineering home">
          <OfficialLogo theme={transparent ? "dark" : "light"} priority />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) =>
            link.href === "/machines" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href="/machines"
                  className={cn(
                    "group inline-flex items-center gap-1.5 font-heading text-sm font-semibold transition-colors",
                    transparent ? "text-white/78 hover:text-white" : "text-primary/82 hover:text-secondary"
                  )}
                >
                  <span className="relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all group-hover:after:w-full">
                    Machines
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 top-full w-[900px] max-w-[calc(100vw-40px)] -translate-x-1/2 pt-5">
                    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0 rounded-[24px] border border-border bg-white p-6 lg:p-10 shadow-[0_32px_80px_rgba(8,40,68,0.12)]">
                      {/* Left Panel */}
                      <div className="border-b lg:border-b-0 lg:border-r border-border pb-6 lg:pb-0 lg:pr-10">
                        <p className="text-[14px] font-semibold uppercase tracking-wider text-secondary">
                          Machines
                        </p>
                        <h3 className="mt-4 font-heading text-[28px] lg:text-[34px] font-bold text-primary leading-tight">
                          AR Packaging Systems
                        </h3>
                        <p className="mt-4 text-[15px] lg:text-[17px] leading-7 text-dark-gray">
                          Browse our complete range of industrial packaging machinery for confectionery, bakery, snacks, noodles, food, pharmaceuticals and more.
                        </p>
                        <Link
                          href="/machines"
                          className="mt-6 lg:mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                        >
                          View All Machines
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Right Panel - Responsive Columns */}
                      <div className="pt-6 lg:pt-0 lg:pl-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                          {PRODUCTS.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/machines/${getMachineSlug(product.slug)}`}
                              className="group relative rounded-xl p-4 transition-all duration-200 hover:bg-[#F0F7FF] hover:shadow-sm hover:-translate-y-0.5"
                            >
                              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-transparent transition-colors duration-200 group-hover:bg-secondary" />
                              <h4 className="text-[15px] lg:text-[17px] font-semibold text-primary leading-tight">
                                {product.name.replace(/\s*\([^)]*\)\s*$/, "")}
                              </h4>
                              <p className="mt-1.5 text-[12px] lg:text-[13px] font-medium text-dark-gray/60 tracking-wide">
                                {product.model}
                              </p>
                              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  transparent
                    ? "text-white/78 hover:text-white"
                    : pathname === link.href
                      ? "text-secondary"
                      : "text-primary/82 hover:text-secondary",
                  "relative font-heading text-sm font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button
            href={whatsAppUrl("Hello AL Raheem Engineering, I would like to discuss a packaging machine.")}
            external
            variant="whatsapp"
            className="gap-2 px-3 py-2 text-xs shadow-none"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button href="/contact" variant={transparent ? "outline-light" : "outline"} className="px-3.5 py-2 text-xs shadow-none">
            Request Quote
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-lg border p-2 xl:hidden",
            transparent ? "border-white/20 text-white" : "border-border text-primary"
          )}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-white px-5 py-5 shadow-lg xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-primary hover:bg-light-gray"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-4">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Machines
              </p>
              {PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  href={`/machines/${getMachineSlug(product.slug)}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-primary hover:bg-light-gray"
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg bg-secondary px-4 py-3 text-center text-sm font-medium text-white"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
