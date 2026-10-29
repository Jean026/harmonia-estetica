import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { clinic } from "@/data/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harmonia Estética Avançada | Clínica de Estética em Curitiba",
  description:
    "Conheça a Harmonia Estética Avançada em Santa Felicidade, Curitiba. Tratamentos faciais e corporais com cuidado personalizado. Agende sua avaliação.",
  openGraph: {
    title: "Harmonia Estética Avançada | Clínica de Estética em Curitiba",
    description:
      "Tratamentos faciais e corporais com cuidado personalizado em Santa Felicidade, Curitiba.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
};

// Somente dados confirmados (nome, endereço, telefone e Instagram).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: clinic.name,
  telephone: "+5541991433113",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Veneto, 1421, Sala 13, 2º andar",
    addressLocality: clinic.address.district + ", " + clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.zip,
    addressCountry: "BR",
  },
  sameAs: [clinic.instagramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
