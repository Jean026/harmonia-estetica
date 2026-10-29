import { HeartHandshake, Flower2, Armchair, Leaf } from "lucide-react";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import { images } from "@/data/site";

const highlights = [
  { icon: HeartHandshake, label: "Atendimento personalizado" },
  { icon: Flower2, label: "Tratamentos faciais e corporais" },
  { icon: Armchair, label: "Ambiente acolhedor" },
  { icon: Leaf, label: "Foco na beleza natural" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-pearl py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <ImageSlot
              src={images.about}
              alt="Profissional realizando uma limpeza facial com aparelho em uma cliente, em sala de estética com flores e luz suave"
              hint="Foto do ambiente ou atendimento"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full rounded-[1.25rem] shadow-soft lg:w-[92%]"
            />
            <div
              className="absolute -bottom-8 right-0 hidden aspect-square w-[46%] rounded-full border border-gold/50 lg:block"
              aria-hidden
            />
            <div
              className="absolute -bottom-6 right-6 hidden aspect-square w-[40%] rounded-full bg-champagne/70 lg:block"
              aria-hidden
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-5">Sobre a Harmonia</p>
            <h2 className="section-title">
              Cuidar de você é a nossa <em>essência.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-graphite/75">
            <p>
              Na Harmonia Estética Avançada, acreditamos que a beleza está diretamente ligada
              ao bem-estar e à autoestima.
            </p>
            <p>
              Nosso propósito é oferecer uma experiência de cuidado personalizada, valorizando
              as características e necessidades de cada pessoa.
            </p>
            <p>
              Com foco em estética facial e corporal, buscamos unir acolhimento, técnicas
              especializadas e atenção aos detalhes para proporcionar uma experiência
              diferenciada.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.3} aria-hidden />
                  </span>
                  <span className="text-[0.95rem] text-cocoa">{label}</span>
                </li>
              ))}
            </ul>
            <a href="#tratamentos" className="btn-primary mt-12">
              Conheça Nossos Tratamentos
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
