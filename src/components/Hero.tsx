"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import ImageSlot from "./ImageSlot";
import LoopVideo from "./LoopVideo";
import { images, videos, whatsappLink } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section
      id="inicio"
      className="relative flex flex-col overflow-hidden bg-gradient-to-b from-pearl to-sand pb-16 lg:block lg:bg-pearl lg:pb-0"
    >
      {/* Texto: primeiro no celular, sobre a foto no desktop */}
      <div className="relative z-10 order-1 mx-auto w-full max-w-7xl px-5 pt-32 sm:px-8 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-24 lg:pt-28">
        <div className="max-w-xl lg:max-w-[34rem]">
          <motion.p {...item(0.1)} className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            Clínica de estética avançada
          </motion.p>

          <motion.h1
            {...item(0.2)}
            className="font-serif text-[3.1rem] font-medium leading-[0.98] text-cocoa sm:text-7xl lg:text-[5.2rem]"
          >
            Sua beleza em <em className="font-normal italic text-gold-deep">perfeita harmonia.</em>
          </motion.h1>

          <motion.p {...item(0.35)} className="mt-7 max-w-xl text-lg leading-relaxed text-graphite/80">
            Tratamentos faciais e corporais que valorizam sua beleza natural, com cuidado,
            tecnologia e atenção a cada detalhe.
          </motion.p>

          <motion.div {...item(0.5)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Minha Avaliação
            </a>
            <a href="#tratamentos" className="btn-ghost bg-pearl/40 backdrop-blur-sm">
              Conhecer Tratamentos
            </a>
          </motion.div>

          <motion.p
            {...item(0.65)}
            className="mt-10 flex items-center gap-2.5 text-sm text-graphite/70"
          >
            <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden />
            Estética Avançada em Santa Felicidade, Curitiba
          </motion.p>
        </div>
      </div>

      {/* Foto: arco abaixo do texto no celular, banner de fundo no desktop */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="relative order-2 mx-5 mt-14 aspect-[4/5] sm:mx-auto sm:w-full sm:max-w-md lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:max-w-none"
      >
        <ImageSlot
          src={images.hero}
          alt="Mulher sorrindo, com a mão apoiada no queixo, em uma sala de estética iluminada por luz natural"
          hint="Foto principal"
          priority
          sizes="100vw"
          position="78% center"
          className="arch h-full w-full shadow-soft lg:!rounded-none lg:shadow-none"
        >
          {videos.hero && <LoopVideo src={videos.hero} position="78% center" fade />}
        </ImageSlot>
        <div className="absolute -bottom-5 right-2 rounded-2xl bg-pearl px-5 py-4 shadow-soft lg:bottom-14 lg:right-28">
          <p className="font-serif text-3xl leading-none text-cocoa">5 anos</p>
          <p className="mt-1.5 text-[0.65rem] uppercase tracking-eyebrow text-gold-deep">
            de estética avançada
          </p>
        </div>
      </motion.div>

      {/* véu pérola para garantir leitura do texto sobre a foto */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[64%] bg-gradient-to-r from-pearl via-pearl/80 to-transparent lg:block" />

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-gold-deep lg:block"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.4} />
      </a>

      {/* transição curva para a próxima seção */}
      <svg
        className="absolute bottom-0 left-0 z-[2] w-full text-pearl"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 48V28C240 0 480 0 720 14s480 14 720-6v40z" fill="currentColor" />
      </svg>
    </section>
  );
}
