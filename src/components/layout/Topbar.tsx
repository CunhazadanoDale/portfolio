"use client";

import Link from "next/link";

export default function Topbar() {
  return (
    <header
      style={{
        height: 58,
        background: "var(--teal2)",
        color: "var(--cream)",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        gap: 12,
        borderBottom: "3px solid var(--line)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <span style={{ fontSize: 28 }}>☼</span>
      <Link
        href="/"
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          fontSize: 30,
          letterSpacing: 0.3,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Portfolio
      </Link>

      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        {/* Botões decorativos estilo janela desktop */}
        <button
          aria-label="Minimizar"
          style={{
            border: "2px solid var(--line)",
            background: "var(--cream)",
            color: "var(--ink)",
            width: 42,
            height: 34,
            borderRadius: 4,
            fontSize: 19,
            boxShadow: "2px 2px 0 var(--line)",
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
            width: 42,
            height: 34,
            borderRadius: 4,
            fontSize: 19,
            boxShadow: "2px 2px 0 var(--line)",
          }}
        >
          □
        </button>
        <button
          aria-label="Fechar"
          onClick={() => alert("É só um portfolio :)")}
          style={{
            border: "2px solid var(--line)",
            background: "var(--orange)",
            color: "white",
            width: 42,
            height: 34,
            borderRadius: 4,
            fontSize: 19,
            boxShadow: "2px 2px 0 var(--line)",
          }}
        >
          ×
        </button>
      </div>
    </header>
  );
}
