"use client";

import { useState } from "react";

interface CopyEmailButtonProps {
  email?: string;
  label?: string;
}

export default function CopyEmailButton({
  email = "cunharamosgabriel@gmail.com",
  label = "Copiar E-mail",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback simples
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      onClick={handleCopy}
      title={`Copiar ${email}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: copied ? "var(--teal2)" : "var(--cream)",
        color: copied ? "white" : "var(--ink)",
        border: "2px solid var(--line)",
        borderRadius: 5,
        padding: "8px 14px",
        fontSize: 14,
        fontWeight: 700,
        boxShadow: "2px 2px 0 var(--line)",
        transition: "all 0.15s ease",
      }}
    >
      <span>{copied ? "✓" : "✉"}</span>
      <span>{copied ? "E-mail Copiado!" : label}</span>
    </button>
  );
}
