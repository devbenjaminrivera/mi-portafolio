"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/",          label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi",  label: "Sobre Mí" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="top-nav" role="banner">
        <div className="top-nav-inner">

          {/* Logo */}
          <Link href="/" className="top-nav-logo" onClick={() => setOpen(false)}>
            BR
          </Link>

          {/* Desktop links */}
          <ul className="top-nav-links" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`top-nav-link ${pathname === href ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contacto" className="top-nav-cta">
            Contacto
          </Link>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              style={{
                transform: open ? "translateY(6.5px) rotate(45deg)" : undefined,
              }}
            />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span
              style={{
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : undefined,
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      <nav
        className={`nav-mobile-panel ${open ? "open" : ""}`}
        aria-label="Navegación móvil"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="nav-mobile-link"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contacto"
          className="nav-mobile-link"
          style={{ fontWeight: 900 }}
          onClick={() => setOpen(false)}
        >
          Contacto →
        </Link>
      </nav>
    </>
  );
}
