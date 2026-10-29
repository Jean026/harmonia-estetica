import Image from "next/image";
import { Camera } from "lucide-react";

type Props = {
  src: string | null;
  alt: string;
  /** Texto do espaço reservado enquanto não há foto. */
  hint?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** CSS object-position, para escolher qual parte da foto fica visível no recorte. */
  position?: string;
  /** Camadas extras (ex.: vídeo) desenhadas dentro da moldura, sobre a foto. */
  children?: React.ReactNode;
};

/**
 * Mostra a foto quando `src` existe; caso contrário, um espaço reservado
 * com a paleta da marca, para a demonstração não ficar com buracos.
 */
export default function ImageSlot({
  src,
  alt,
  hint = "Imagem ilustrativa",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  position,
  children,
}: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
        {children}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-champagne via-sand to-[#d9c9a6] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center text-cocoa/55">
        <Camera className="h-6 w-6" strokeWidth={1.2} aria-hidden />
        <span className="text-[0.65rem] uppercase tracking-eyebrow">{hint}</span>
      </div>
    </div>
  );
}
