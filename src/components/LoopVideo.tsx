"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  /** Primeiro quadro do vídeo. Mostrado até o vídeo começar (ou para sempre, sem animações). */
  poster?: string;
  /** CSS object-position do recorte. */
  position?: string;
  /** true = entra com fade sobre uma foto que já está atrás (hero e cartões). */
  fade?: boolean;
  /** true = só carrega e toca enquanto estiver visível na tela (cartões da página). */
  whenVisible?: boolean;
  className?: string;
};

/**
 * Vídeo mudo em loop, como fundo animado. Com "reduzir movimento" ativo no
 * sistema do visitante, não toca: fica a foto (ou o poster) parada.
 */
export default function LoopVideo({
  src,
  poster,
  position,
  fade = false,
  whenVisible = false,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;

    // O React não escreve o atributo `muted` no HTML de vídeos criados no navegador.
    // Sem ele, Safari, Firefox e Chrome do celular bloqueiam o autoplay e o vídeo
    // fica parado na foto. Então garantimos mudo + inline antes de tocar.
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");

    const play = () => {
      v.play().catch(() => {});
    };

    // O vídeo pode ter começado antes da hidratação, perdendo o evento onPlaying.
    if (!v.paused && v.readyState >= 3) setPlaying(true);

    if (whenVisible) {
      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? play() : v.pause()),
        { threshold: 0.35 },
      );
      io.observe(v);
      return () => io.disconnect();
    }

    play();
    v.addEventListener("canplay", play);
    return () => v.removeEventListener("canplay", play);
  }, [reduce, whenVisible, src]);

  if (reduce) {
    return poster && !fade ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={poster} alt="" className={`absolute inset-0 h-full w-full object-cover ${className}`} />
    ) : null;
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay={!whenVisible}
      muted
      loop
      playsInline
      preload={whenVisible ? "none" : "auto"}
      aria-hidden
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
        fade && !playing ? "opacity-0" : "opacity-100"
      } ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
