import { Gem, Heart, Sparkles, UserRound } from "lucide-react";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import { differentials, images } from "@/data/site";

const icons = { user: UserRound, heart: Heart, sparkles: Sparkles, gem: Gem };

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-pearl py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">Diferenciais</p>
            <h2 className="section-title">
              Uma experiência de cuidado em <em>cada detalhe.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-graphite/70">
              Mais do que tratamentos estéticos, um espaço dedicado ao seu bem-estar.
            </p>
            <ImageSlot
              src={images.differentials}
              alt="Bandeja dourada com produtos de skincare, toalhas e flores sobre uma bancada de mármore"
              hint="Foto — detalhes do cuidado"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mt-10 aspect-[4/3] w-full rounded-t-[999px] rounded-b-2xl"
            />
          </Reveal>

          <ol className="grid gap-px overflow-hidden rounded-3xl bg-gold/25 sm:grid-cols-2">
            {differentials.map((d, i) => {
              const Icon = icons[d.icon];
              return (
                <li key={d.title} className="bg-pearl">
                  <Reveal delay={i * 0.1} className="group h-full p-8 transition-colors duration-500 hover:bg-sand sm:p-10">
                    <div className="flex items-start justify-between">
                      <Icon className="h-9 w-9 text-gold" strokeWidth={1.1} aria-hidden />
                      <span className="font-serif text-lg italic text-gold/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-8 font-serif text-2xl text-cocoa">{d.title}</h3>
                    <p className="mt-3 leading-relaxed text-graphite/70">{d.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
