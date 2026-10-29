"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import { gallery } from "@/data/site";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const total = gallery.length;

  const move = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, move]);

  const current = index === null ? null : gallery[index];

  return (
    <section id="resultados" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Resultados e galeria</p>
          <h2 className="section-title">
            Beleza que inspira <em>confiança.</em>
          </h2>
          <p className="mt-6 text-lg text-graphite/70">
            Conheça um pouco mais do nosso trabalho e dos cuidados realizados na Harmonia.
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-5 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 0.07} className={`h-full ${g.span}`}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ampliar imagem: ${g.caption}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
              >
                <ImageSlot
                  src={g.image}
                  alt={g.caption}
                  hint={g.caption}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-cocoa/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-pearl opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="text-sm">{g.caption}</span>
                  <Expand className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dashed border-gold/60 bg-pearl/60 p-6 text-center">
          <p className="font-serif text-xl text-cocoa">Antes e depois</p>
          <p className="mt-2 text-sm leading-relaxed text-graphite/65">
            Espaço reservado para registros reais e autorizados de clientes. As imagens acima
            são ilustrativas e não representam resultados.
          </p>
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-pearl/10 text-pearl hover:bg-pearl/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-pearl/10 text-pearl hover:bg-pearl/20 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <ImageSlot
              src={current.image}
              alt={current.caption}
              hint={current.caption}
              sizes="90vw"
              className="aspect-[4/3] w-full rounded-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-pearl/80">
              {current.caption}
              {current.kind === "ilustrativa" && (
                <span className="ml-2 text-pearl/50">· imagem ilustrativa</span>
              )}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-pearl/10 text-pearl hover:bg-pearl/20 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
