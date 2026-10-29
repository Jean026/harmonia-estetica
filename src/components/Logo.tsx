type Props = { light?: boolean; className?: string };

/** Logotipo provisório em texto. Substituir pelo arquivo oficial da clínica quando disponível. */
export default function Logo({ light = false, className = "" }: Props) {
  const main = light ? "text-pearl" : "text-cocoa";
  const sub = light ? "text-champagne" : "text-gold-deep";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="19" stroke="#B99A5A" strokeWidth="1" />
        <path
          d="M12 28V12M28 28V12M12 20h16"
          stroke="#B99A5A"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.65rem] font-medium tracking-wide ${main}`}>
          Harmonia
        </span>
        <span className={`mt-1 text-[0.58rem] font-medium uppercase tracking-[0.28em] ${sub}`}>
          Estética Avançada
        </span>
      </span>
    </span>
  );
}
