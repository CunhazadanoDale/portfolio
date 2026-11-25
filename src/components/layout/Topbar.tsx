"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Topbar() {
  return (
    <header className="portfolio-topbar">
      <span style={{ fontSize: 24, lineHeight: 1 }}>☼</span>
      <Link
        href="/"
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          fontSize: 24,
          letterSpacing: 0.3,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Gabriel.dev
      </Link>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        {/* Interruptor de Lâmpada Noturna / Modo Claro */}
        <ThemeToggle />

        {/* Botões decorativos estilo janela de aplicativo */}
        <div style={{ display: "flex", gap: 6 }}>
          <button
            aria-label="Minimizar"
            style={{
              border: "2px solid var(--line)",
              background: "var(--cream)",
              color: "var(--ink)",
              width: 36,
              height: 30,
              borderRadius: 4,
              fontSize: 16,
              boxShadow: "2px 2px 0 var(--line)",
              display: "grid",
              placeItems: "center",
            }}
          >
            −
          </button>
          <button
            aria-label="Maximizar"
            style={{
              border: "2px solid var(--line)",
              background: "var(--cream)",
              color: "var(--ink)",
              width: 36,
              height: 30,
              borderRadius: 4,
              fontSize: 16,
              boxShadow: "2px 2px 0 var(--line)",
              display: "grid",
              placeItems: "center",
            }}
          >
            □
          </button>
          <button
            aria-label="Fechar"
            onClick={() => alert("Obrigado por visitar meu portfólio! — Gabriel")}
            style={{
              border: "2px solid var(--line)",
              background: "var(--orange)",
              color: "white",
              width: 36,
              height: 30,
              borderRadius: 4,
              fontSize: 16,
              boxShadow: "2px 2px 0 var(--line)",
              display: "grid",
              placeItems: "center",
            }}
          >
            ×
          </button>
        </div>
      </div>
    </header>
  );
}
