"use client";

import Link from "next/link";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#projects", label: "Proyectos" },
  { href: "#uthopiq", label: "Uthopiq" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <Link href="#hero">Tomás Primo</Link>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
