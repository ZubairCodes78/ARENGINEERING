"use client";

import { useEffect, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  COMPANY,
  PAYMENT_STEPS,
  productWhatsAppMessage,
  whatsAppUrl,
} from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";

interface ChatMessage {
  role: "assistant" | "user";
  text: string;
}

const starters = [
  "Recommend a machine",
  "Payment policy",
  "Contact details",
  "WhatsApp inquiry",
];

function recommendMachine(message: string) {
  const value = message.toLowerCase();
  const product =
    PRODUCTS.find((item) =>
      [item.name, item.model, item.category, ...item.applications]
        .join(" ")
        .toLowerCase()
        .split(/\s+/)
        .some((word) => word.length > 3 && value.includes(word))
    ) ??
    PRODUCTS.find((item) =>
      item.applications.some((application) => value.includes(application.toLowerCase()))
    ) ??
    PRODUCTS[0];

  return `Based on your requirement, I would start with ${product.name}. It is used for ${product.applications
    .slice(0, 3)
    .join(", ")} and is described as: ${product.shortDescription} For a precise recommendation, share your product size, film type, target speed, and pack weight.`;
}

function getAssistantReply(message: string) {
  const value = message.toLowerCase();
  const mentionedProduct = PRODUCTS.find((product) =>
    [product.name, product.model, ...product.applications].some((field) =>
      value.includes(field.toLowerCase())
    )
  );

  if (value.includes("spec") || value.includes("capacity") || value.includes("speed") || value.includes("technical")) {
    if (mentionedProduct) {
      return `${mentionedProduct.name} specifications: ${mentionedProduct.specs
        .map((spec) => `${spec.label}: ${spec.value}`)
        .join("; ")}. For exact configuration, share your product size, pack weight and film type.`;
    }
    return "I can explain machine specifications. Tell me the machine name or product you want to pack, such as candy, toffee, biscuit, rusk, noodle, soap, cosmetics or ice cream.";
  }

  if (value.includes("price") || value.includes("cost") || value.includes("quote") || value.includes("quotation")) {
    return "Pricing depends on machine model, pack size, speed target, feeding system, coding requirements and delivery location. Use the Request Quote form or WhatsApp inquiry and include your product, pack size, output target and city.";
  }

  if (value.includes("delivery") || value.includes("dispatch") || value.includes("shipping")) {
    return "Delivery timing depends on the selected machine, customization level and production schedule. Share your preferred delivery city and required timeline so the team can confirm availability and dispatch details.";
  }

  if (value.includes("payment") || value.includes("advance") || value.includes("terms")) {
    return `Payment policy: ${PAYMENT_STEPS.map((step) => `${step.value} ${step.title.toLowerCase()}`).join(", ")}. The payment stages are used to confirm the order, continue production, and complete dispatch preparation.`;
  }

  if (value.includes("contact") || value.includes("phone") || value.includes("email") || value.includes("address")) {
    return `Contact AL Raheem Engineering at ${COMPANY.phone}, email ${COMPANY.email}, or visit ${COMPANY.address.full}. Business hours are ${COMPANY.hours}.`;
  }

  if (value.includes("whatsapp")) {
    return `You can open WhatsApp at https://wa.me/${COMPANY.whatsapp}. Share your product, pack size, required speed, and delivery city for a practical response.`;
  }

  if (value.includes("company") || value.includes("about") || value.includes("founder")) {
    return "AL Raheem Engineering is a Lahore-based industrial packaging machine manufacturer. The company builds AR series packaging machines and is led by founder Abdul Sattar, with 35+ years of engineering experience since 1990.";
  }

  if (
    value.includes("recommend") ||
    value.includes("which") ||
    value.includes("machine") ||
    value.includes("candy") ||
    value.includes("toffee") ||
    value.includes("biscuit") ||
    value.includes("rusk") ||
    value.includes("noodle") ||
    value.includes("soap") ||
    value.includes("cosmetic") ||
    value.includes("ice cream") ||
    value.includes("flow")
  ) {
    return recommendMachine(message);
  }

  return "I can help with machine selection, specifications, payment policy, company information, contact details, and WhatsApp inquiry guidance. Tell me what product you want to pack and your target production speed.";
}

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Welcome. I am AR Assistant. Ask about machines, payment policy, company details, contact, WhatsApp, or machine recommendations.",
    },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY;
        setVisible(currentY > 300);
        setScrollingDown(delta > 18 && currentY > 420 && !open);
        lastY = currentY;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, mounted]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: getAssistantReply(trimmed) },
    ]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-[calc(250px+env(safe-area-inset-bottom))] right-5 z-[70] flex max-h-[min(640px,calc(100vh-290px))] w-[min(calc(100vw-40px),390px)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_28px_80px_rgba(8,40,68,0.24)] lg:bottom-[184px] lg:right-8"
            aria-label="AR Assistant chat widget"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-primary px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-secondary" />
                <div>
                  <h2 className="font-heading text-base font-semibold">AR Assistant</h2>
                  <p className="text-xs text-white/60">Industrial machine guidance</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close AR Assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-white p-5">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[88%] rounded-xl px-4 py-3 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "bg-light-gray text-dark-gray"
                      : "ml-auto bg-primary text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {starters.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => sendMessage(starter)}
                    className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-primary transition hover:border-secondary hover:text-secondary"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
              className="border-t border-border bg-white p-4"
            >
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  className="min-w-0 flex-1 rounded-md border border-border px-3 py-2 text-sm text-dark-gray outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                  placeholder="Ask AR Assistant"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-white transition hover:bg-secondary/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <a
                href={whatsAppUrl(productWhatsAppMessage("packaging machine"))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-border px-3 py-2 text-xs font-semibold text-primary transition hover:border-secondary hover:text-secondary"
              >
                Continue on WhatsApp
              </a>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{
          opacity: visible && !scrollingDown ? 1 : 0,
          y: visible && !scrollingDown ? 0 : 18,
          scale: visible && !scrollingDown ? 1 : 0.96,
          pointerEvents: visible && !scrollingDown ? "auto" : "none",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed bottom-[calc(120px+env(safe-area-inset-bottom))] right-5 z-[80] flex flex-col gap-4 lg:bottom-8 lg:right-8"
      >
        <div className="group relative">
          <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
            Need Help?
          </span>
          <motion.button
            type="button"
            initial={{ y: 10, scale: 0.94 }}
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.015, 1],
              boxShadow: [
                "0 18px 38px rgba(20,121,214,0.34)",
                "0 22px 48px rgba(20,121,214,0.42)",
                "0 18px 38px rgba(20,121,214,0.34)",
              ],
            }}
            whileHover={{ scale: 1.08, boxShadow: "0 24px 58px rgba(20,121,214,0.48)" }}
            whileTap={{ scale: 0.96 }}
            transition={{
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 7.2, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 7.2, repeat: Infinity, ease: "easeInOut" },
            }}
            onClick={() => setOpen((value) => !value)}
            className="relative flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#1479D6] text-white outline-none ring-[#1479D6]/25 transition focus:ring-4 lg:h-16 lg:w-16"
            aria-label="AR Assistant"
          >
            <span className="absolute inset-0 rounded-full border border-white/30 opacity-0 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <Bot className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.8} />
          </motion.button>
        </div>

        <div className="group relative">
          <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
          <motion.a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 10, scale: 0.94 }}
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.012, 1],
              boxShadow: [
                "0 18px 38px rgba(37,211,102,0.32)",
                "0 22px 48px rgba(37,211,102,0.42)",
                "0 18px 38px rgba(37,211,102,0.32)",
              ],
            }}
            whileHover={{ scale: 1.08, boxShadow: "0 24px 58px rgba(37,211,102,0.48)" }}
            whileTap={{ scale: 0.96 }}
            transition={{
              y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
              scale: { duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
              boxShadow: { duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            }}
            className="relative flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white outline-none ring-[#25D366]/25 transition focus:ring-4 lg:h-16 lg:w-16"
            aria-label="Chat on WhatsApp"
          >
            <span className="absolute inset-0 rounded-full border border-white/30 opacity-0 animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <WhatsAppIcon className="h-6 w-6 lg:h-7 lg:w-7" />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
