"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav, whatsappLink } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-pearl/90 shadow-[0_1px_0_rgba(185,154,90,0.25)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#inicio" aria-label="Harmonia Estética Avançada — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm tracking-wide text-graphite/80 transition-colors hover:text-cocoa"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-3 sm:inline-flex">
            Agendar Avaliação
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/20 text-cocoa lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal (mobile)"
          className="flex h-[calc(100dvh-4.5rem)] flex-col justify-between bg-pearl px-6 pb-10 pt-6 lg:hidden"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gold/20 py-4 font-serif text-3xl text-cocoa"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
            Agendar Avaliação
          </a>
        </nav>
      )}
    </header>
  );
}
