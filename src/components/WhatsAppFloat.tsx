import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Harmonia pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30 [animation-duration:2.8s]" aria-hidden />
      <MessageCircle className="relative h-6 w-6" strokeWidth={1.6} />
    </a>
  );
}
