import { CalendarCheck, MessageCircle } from "lucide-react";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import { clinic, images, whatsappLink } from "@/data/site";

export default function BookingCTA() {
  return (
    <section id="agendar" className="grain relative overflow-hidden bg-champagne">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="relative z-10 px-5 py-20 sm:px-8 lg:py-32 lg:pr-16">
          <Reveal>
            <p className="eyebrow mb-5">Agendamento</p>
            <h2 className="section-title">
              Seu momento de se cuidar <em>começa aqui.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa/80">
              Reserve um tempo para você e descubra os cuidados que combinam com suas
              necessidades.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-4 w-4" aria-hidden /> Agendar Minha Avaliação
              </a>
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !border-cocoa/40"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar On-line
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[22rem] lg:min-h-full">
          <ImageSlot
            src={images.cta}
            alt="Mulher sorrindo, com a mão apoiada no queixo, em um ambiente sofisticado de estética"
            hint="Foto — momento de cuidado"
            sizes="(min-width: 1024px) 50vw, 100vw"
            position="82% 30%"
            className="absolute inset-0 h-full w-full !rounded-none lg:rounded-l-[999px]"
          />
        </div>
      </div>
    </section>
  );
}
