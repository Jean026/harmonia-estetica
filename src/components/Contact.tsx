import { Instagram, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { clinic, mapDirectionsUrl, mapEmbedUrl, whatsappLink } from "@/data/site";

export default function Contact() {
  const a = clinic.address;
  return (
    <section id="contato" className="bg-pearl py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5">Localização e contato</p>
          <h2 className="section-title">
            Estamos esperando <em>por você.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg text-graphite/70">
            Um espaço dedicado à beleza e ao bem-estar no coração de Santa Felicidade.
          </p>

          <address className="mt-10 space-y-6 not-italic">
            <p className="font-serif text-2xl text-cocoa">{clinic.name}</p>
            <p className="flex gap-4 text-graphite/80">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden />
              <span>
                {a.street}.
                <br />
                {a.district}, {a.city} – {a.state}.
                <br />
                CEP: {a.zip}.
              </span>
            </p>
            <p className="flex items-center gap-4 text-graphite/80">
              <Phone className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden />
              <a href={`tel:+${clinic.phoneDigits}`} className="hover:text-gold-deep">
                {clinic.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-4 text-graphite/80">
              <Instagram className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden />
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-deep"
              >
                {clinic.instagramHandle}
              </a>
            </p>
          </address>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Navigation className="h-4 w-4" aria-hidden /> Como Chegar
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" aria-hidden /> Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-[1.5rem] border border-gold/30 shadow-soft">
            <iframe
              title="Mapa: Harmonia Estética Avançada, Santa Felicidade, Curitiba"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0 lg:h-[560px]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
