"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import ImageSlot from "./ImageSlot";
import LoopVideo from "./LoopVideo";
import Reveal from "./Reveal";
import { posterOf, treatments, whatsappLink, type Treatment } from "@/data/site";

export default function Treatments() {
  const [active, setActive] = useState<Treatment | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="tratamentos" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Tratamentos</p>
          <h2 className="section-title">
            Tratamentos pensados para <em>realçar sua beleza.</em>
          </h2>
          <p className="mt-6 text-lg text-graphite/70">
            Descubra cuidados faciais e corporais desenvolvidos para diferentes necessidades.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.1}>
              <article className="group">
                <div className="relative">
                  <ImageSlot
                    src={t.image}
                    alt={t.imageHint}
                    hint={t.imageHint}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-2xl transition-transform duration-700 group-hover:scale-[1.015]"
                  >
                    {t.video && (
                      <LoopVideo src={t.video} position={t.videoPosition} fade whenVisible />
                    )}
                  </ImageSlot>
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 font-serif text-sm italic text-pearl/90 drop-shadow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-3xl text-cocoa">{t.name}</h3>
                <p className="mt-3 leading-relaxed text-graphite/70">{t.short}</p>
                <button
                  type="button"
                  onClick={() => setActive(t)}
                  className="mt-5 inline-flex items-center gap-1.5 border-b border-gold pb-0.5 text-sm font-medium text-gold-deep transition-colors hover:text-cocoa"
                  aria-haspopup="dialog"
                >
                  Saiba Mais <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-xl text-center text-xs leading-relaxed text-graphite/50">
          Todos os procedimentos são indicados após avaliação individual com a profissional
          responsável.
        </p>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-cocoa/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tratamento-titulo"
            className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-pearl p-6 shadow-soft sm:rounded-3xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pearl/80 text-cocoa/70 backdrop-blur hover:bg-sand"
            >
              <X className="h-5 w-5" />
            </button>
            {active.video && (
              <div className="relative mb-7 aspect-video w-full overflow-hidden rounded-2xl bg-sand">
                <LoopVideo src={active.video} poster={posterOf(active.video)} />
              </div>
            )}
            <p className="eyebrow mb-3">Tratamento</p>
            <h3 id="tratamento-titulo" className="font-serif text-4xl text-cocoa">
              {active.name}
            </h3>
            <p className="mt-5 leading-relaxed text-graphite/75">{active.short}</p>
            <p className="mt-4 leading-relaxed text-graphite/75">{active.detail}</p>
            <a
              href={whatsappLink(
                `Olá! Gostaria de saber mais sobre ${active.name} na Harmonia Estética.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Conversar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
