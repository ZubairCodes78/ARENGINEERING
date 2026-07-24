import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsAppUrl("Hello AL Raheem Engineering, I would like to inquire about your packaging machines.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.32)] transition-transform duration-200 hover:scale-[1.08] focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 lg:bottom-8 lg:right-8"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
