"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Carrega preferência salva ou detecta preferência do sistema
    const saved = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      title={theme === "light" ? "Acender lâmpada noturna (Modo Escuro)" : "Voltar ao modo diurno (Papel Claro)"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        border: "2px solid var(--line)",
        background: theme === "light" ? "var(--cream)" : "var(--gold)",
        color: "var(--ink)",
        padding: "5px 10px",
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 700,
        boxShadow: "2px 2px 0 var(--line)",
        transition: "all 0.15s ease",
      }}
    >
      <span>{theme === "light" ? "💡" : "☀️"}</span>
      <span style={{ fontSize: 12 }}>{theme === "light" ? "Lâmpada" : "Diurno"}</span>
    </button>
  );
}
