"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface MachineInquiryFormProps {
  machineName: string;
}

export default function MachineInquiryForm({ machineName }: MachineInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    product: "",
    speed: "",
    message: "",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello AL Raheem Engineering,",
      "",
      `Machine: ${machineName}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Company: ${form.company || "Not provided"}`,
      `Product to pack: ${form.product}`,
      `Target speed: ${form.speed || "Not provided"}`,
      "",
      form.message,
    ].join("\n");

    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "peer h-14 w-full rounded-lg border border-border bg-white px-4 pb-2 pt-6 text-sm font-medium text-primary outline-none transition placeholder:text-transparent focus:border-secondary focus:ring-4 focus:ring-secondary/10";

  const fieldClass = "relative";
  const labelClass =
    "pointer-events-none absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-dark-gray/56 transition-all peer-focus:text-secondary";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 shadow-[0_24px_70px_rgba(8,40,68,0.08)] sm:p-8 lg:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <div className={fieldClass}>
          <input id="inquiry-name" required placeholder="Name" value={form.name} onChange={(event) => update("name", event.target.value)} className={inputClass} />
          <label htmlFor="inquiry-name" className={labelClass}>Name</label>
        </div>
        <div className={fieldClass}>
          <input id="inquiry-phone" required type="tel" placeholder="Phone" value={form.phone} onChange={(event) => update("phone", event.target.value)} className={inputClass} />
          <label htmlFor="inquiry-phone" className={labelClass}>Phone</label>
        </div>
        <div className={fieldClass}>
          <input id="inquiry-company" placeholder="Company" value={form.company} onChange={(event) => update("company", event.target.value)} className={inputClass} />
          <label htmlFor="inquiry-company" className={labelClass}>Company</label>
        </div>
        <div className={fieldClass}>
          <input id="inquiry-product" required placeholder="Product to Pack" value={form.product} onChange={(event) => update("product", event.target.value)} className={inputClass} />
          <label htmlFor="inquiry-product" className={labelClass}>Product to Pack</label>
        </div>
        <div className={fieldClass}>
          <input id="inquiry-speed" value={form.speed} onChange={(event) => update("speed", event.target.value)} className={inputClass} placeholder="Example: 100 packs/min" />
          <label htmlFor="inquiry-speed" className={labelClass}>Target Speed</label>
        </div>
        <div className={fieldClass}>
          <input id="inquiry-machine" readOnly placeholder="Machine" value={machineName} className={`${inputClass} bg-light-gray text-primary`} />
          <label htmlFor="inquiry-machine" className={labelClass}>Machine</label>
        </div>
        <div className="relative md:col-span-2">
          <textarea id="inquiry-message" required rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} className={`${inputClass} h-36 resize-none`} placeholder="Share pack size, film type, delivery city, and any special requirements." />
          <label htmlFor="inquiry-message" className={labelClass}>Message</label>
        </div>
      </div>
      <button type="submit" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(20,121,214,0.22)] transition hover:-translate-y-0.5 hover:bg-secondary/90 sm:w-auto">
        <Send className="mr-2 h-4 w-4" />
        Send Inquiry on WhatsApp
      </button>
    </form>
  );
}
