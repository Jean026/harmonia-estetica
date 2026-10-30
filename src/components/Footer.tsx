import ImageSlot from "./ImageSlot";
import Logo from "./Logo";
import { clinic, developerCredit, images, whatsappLink } from "@/data/site";

const quick = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const a = clinic.address;
  return (
    <footer className="relative overflow-hidden bg-cocoa text-pearl/80">
      {/* mármore dourado visível, com um véu marrom que escurece de cima para baixo só para garantir a leitura */}
      <ImageSlot
        src={images.footer}
        alt=""
        sizes="100vw"
        className="!absolute inset-0 h-full w-full"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cocoa/45 via-cocoa/70 to-cocoa/92"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs font-serif text-xl italic leading-snug text-champagne">
            Harmonia Estética Avançada — {clinic.tagline}
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <p className="eyebrow !text-gold mb-5">Navegue</p>
          <ul className="space-y-3 text-sm">
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-champagne">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow !text-gold mb-5">Fale conosco</p>
          <address className="space-y-3 text-sm not-italic leading-relaxed">
            <p>
              {a.street}.<br />
              {a.district}, {a.city} – {a.state}. CEP {a.zip}.
            </p>
            <p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
                WhatsApp: {clinic.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={clinic.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
                Instagram: {clinic.instagramHandle}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="relative border-t border-pearl/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-pearl/80 sm:flex-row sm:px-8">
          {/* pr-16 no celular: o botão flutuante do WhatsApp não cobre o texto */}
          <p className="pr-16 sm:pr-0">
            © {year} Harmonia Estética Avançada. Todos os direitos reservados.
            <span className="ml-2 text-pearl/65">Imagens ilustrativas.</span>
          </p>
          {developerCredit.label && (
            <p>
              {developerCredit.url ? (
                <a href={developerCredit.url} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
                  {developerCredit.label}
                </a>
              ) : (
                developerCredit.label
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
