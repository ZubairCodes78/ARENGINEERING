"use client";

import {
  CalendarClock,
  Cog,
  DraftingCompass,
  Factory,
  Headset,
  Trophy,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { ROADMAP } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  CalendarClock,
  Factory,
  DraftingCompass,
  Cog,
  Wrench,
  Headset,
  Trophy,
};

export default function RoadmapSection() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            label="Company Journey"
            title="From experience to customer success"
            description="A premium view of the milestones and operating path behind every AL Raheem Engineering machine."
            align="center"
            className="mx-auto"
          />
        </FadeUp>

        <div className="relative mt-16">
          <motion.div
            className="absolute left-6 top-0 h-full w-px origin-top bg-secondary/25 lg:left-0 lg:right-0 lg:top-12 lg:mx-auto lg:h-px lg:w-full lg:origin-left"
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            aria-hidden
          />
          <div className="grid gap-6 lg:grid-cols-7">
            {ROADMAP.map((item, index) => {
              const Icon = ICONS[item.icon];

              return (
                <FadeUp key={`${item.year}-${item.title}`} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="group relative ml-12 min-h-[190px] rounded-2xl border border-border bg-white p-5 shadow-sm lg:ml-0 lg:pt-16"
                  >
                    <motion.div
                      whileHover={{ rotate: -4, scale: 1.08 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute -left-[3.25rem] top-5 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/20 bg-white text-secondary shadow-md lg:left-5 lg:top-5"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </motion.div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {item.year}
                    </p>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-dark-gray">
                      {item.description}
                    </p>
                  </motion.article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
