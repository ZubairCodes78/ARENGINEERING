"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsAppUrl } from "@/lib/constants";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello AL Raheem Engineering,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Machine/Product: ${form.product}`,
      "",
      form.message,
    ].join("\n");

    window.open(whatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-white p-8 shadow-sm">
      <h2 className="font-heading text-2xl font-semibold text-primary">Send an Inquiry</h2>
      <p className="mt-2 text-sm leading-7 text-dark-gray">
        Fill in the details and the message will open in WhatsApp for review before sending.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-dark-gray outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-dark-gray outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="0300 0000000"
          />
        </div>

        <div>
          <label htmlFor="product" className="mb-2 block text-sm font-medium text-primary">
            Machine or Product
          </label>
          <input
            id="product"
            required
            value={form.product}
            onChange={(event) => setForm({ ...form, product: event.target.value })}
            className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-dark-gray outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="Example: AR-1200 candy packing machine"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="w-full resize-none rounded-md border border-border bg-white px-4 py-3 text-sm text-dark-gray outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="Tell us your product type, pack size, speed target, and timeline."
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full">
        <Send className="mr-2 h-4 w-4" />
        Send via WhatsApp
      </Button>
    </form>
  );
}
