"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import { images, testimonials, testimonialsConfig } from "@/data/site";

export default function Testimonials() {
  const track = useRef<HTMLUListElement>(null);

  if (!testimonialsConfig.show || testimonials.length === 0) return null;

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-pearl py-24 lg:py-32">
      {/* recepção em segundo plano, bem suave, para não competir com os textos */}
      <ImageSlot
        src={images.testimonials}
        alt=""
        sizes="100vw"
        className="!absolute inset-0 h-full w-full opacity-[0.22]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-pearl via-pearl/70 to-pearl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-5">Depoimentos</p>
            <h2 className="section-title">
              A confiança de quem escolhe <em>se cuidar.</em>
            </h2>
            <p className="mt-6 text-lg text-graphite/70">
              A experiência de nossas clientes faz parte da nossa história.
            </p>
          </Reveal>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Depoimentos anteriores"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors hover:border-gold hover:text-gold-deep"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Próximos depoimentos"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors hover:border-gold hover:text-gold-deep"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {testimonialsConfig.isDemo && (
          <p className="mt-8 inline-block rounded-full bg-champagne px-4 py-2 text-xs font-medium uppercase tracking-wide text-cocoa">
            Conteúdo de exemplo — substituir por depoimentos reais e autorizados
          </p>
        )}

        <ul
          ref={track}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="w-[85%] shrink-0 snap-start rounded-3xl bg-sand p-8 sm:w-[26rem] sm:p-10"
            >
              <Quote className="h-8 w-8 text-gold" strokeWidth={1.2} aria-hidden />
              {t.rating && (
                <div className="mt-5 flex gap-1" aria-label={`${t.rating} de 5 estrelas`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                  ))}
                </div>
              )}
              <blockquote className="mt-5 font-serif text-2xl leading-snug text-cocoa">
                {t.text}
              </blockquote>
              <p className="mt-7 text-sm font-medium text-cocoa">{t.author}</p>
              {t.source && <p className="text-xs text-graphite/55">{t.source}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
