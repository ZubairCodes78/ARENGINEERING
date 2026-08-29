import Link from "next/link";
import { ArrowRight, Home, LayoutGrid, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-light-gray py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Error 404
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-primary sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-5 text-base leading-8 text-dark-gray">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable. Browse our industrial packaging machinery catalogue or return to the homepage.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
            <Button href="/machines" variant="outline">
              <LayoutGrid className="mr-2 h-4 w-4" />
              View Machines
            </Button>
            <Button href="/contact" variant="outline">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          <div className="mt-14 border-t border-border pt-8 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Popular Machinery Links:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/machines/candy-packing-machine"
                className="group flex items-center justify-between rounded-lg border border-border bg-white p-3.5 text-sm font-medium text-primary shadow-xs transition hover:border-secondary hover:text-secondary"
              >
                <span>Candy Packing Machine (AR-800)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/machines/horizontal-flow-wrap-machine"
                className="group flex items-center justify-between rounded-lg border border-border bg-white p-3.5 text-sm font-medium text-primary shadow-xs transition hover:border-secondary hover:text-secondary"
              >
                <span>Horizontal Flow Wrapper (AR-210)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/machines/toffee-wrapping-machine"
                className="group flex items-center justify-between rounded-lg border border-border bg-white p-3.5 text-sm font-medium text-primary shadow-xs transition hover:border-secondary hover:text-secondary"
              >
                <span>Toffee Wrapping Machine (AR-Toffee)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/machines/zombie-packing-machine"
                className="group flex items-center justify-between rounded-lg border border-border bg-white p-3.5 text-sm font-medium text-primary shadow-xs transition hover:border-secondary hover:text-secondary"
              >
                <span>Zombie Packing Machine (AR-Zombie)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
