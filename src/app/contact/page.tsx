"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação com opção de abrir cliente de e-mail padrão
    window.location.href = `mailto:cunharamosgabriel@gmail.com?subject=Contato de ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0AResponder para: ${encodeURIComponent(form.email)}`;
    setSent(true);
  };

  return (
    <AppShell>
      <WelcomeHeader
        title="Contato"
        quote="Tem uma ideia de projeto, freela ou oportunidade? Mande uma mensagem."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(260px, 1fr)",
          gap: 22,
          maxWidth: 960,
        }}
        className="about-grid"
      >
        {/* Formulário estilo papel de carta */}
        <div>
          {sent ? (
            <Panel>
              <h2 style={{ fontFamily: "Georgia, serif", color: "var(--teal2)", marginTop: 0 }}>
                Mensagem preparada! ✉ ✳
              </h2>
              <p style={{ fontWeight: "normal", fontSize: 16, lineHeight: 1.6 }}>
                Seu aplicativo de e-mail foi acionado com a mensagem preenchida. Caso prefira, você também pode me contatar diretamente clicando no botão ao lado.
              </p>
              <Button onClick={() => setSent(false)} style={{ marginTop: 10 }}>
                Enviar outra mensagem
              </Button>
            </Panel>
          ) : (
            <Panel>
              <h2 style={{ fontFamily: "Georgia, serif", marginTop: 0, fontSize: 22 }}>
                Envie uma mensagem
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="name" style={{ fontSize: 14, fontWeight: 700 }}>
                    Seu Nome
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Como posso te chamar?"
                    style={{
                      background: "#fff8e8",
                      border: "2px solid var(--line)",
                      borderRadius: 5,
                      padding: "10px 12px",
                      fontSize: 15,
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="email" style={{ fontSize: 14, fontWeight: 700 }}>
                    Seu E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="exemplo@dominio.com"
                    style={{
                      background: "#fff8e8",
                      border: "2px solid var(--line)",
                      borderRadius: 5,
                      padding: "10px 12px",
                      fontSize: 15,
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="message" style={{ fontSize: 14, fontWeight: 700 }}>
                    Mensagem ou Proposta
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder="Conte sobre o projeto, escopo ou dúvida..."
                    style={{
                      background: "#fff8e8",
                      border: "2px solid var(--line)",
                      borderRadius: 5,
                      padding: "10px 12px",
                      fontSize: 15,
                      resize: "vertical",
                    }}
                  />
                </div>
                <Button type="submit" style={{ alignSelf: "flex-start", marginTop: 4 }}>
                  Enviar mensagem ✉
                </Button>
              </form>
            </Panel>
          )}
        </div>

        {/* Contato direto e redes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Panel>
            <h2 style={{ fontSize: 18, marginTop: 0, marginBottom: 12 }}>Contato Rápido</h2>
            <p style={{ fontSize: 14, fontWeight: "normal", opacity: 0.85, margin: "0 0 14px", lineHeight: 1.5 }}>
              Prefere mandar um e-mail direto da sua caixa de entrada? Copie abaixo:
            </p>
            <CopyEmailButton label="Copiar meu e-mail" />
          </Panel>

          <Panel>
            <h2 style={{ fontSize: 18, marginTop: 0, marginBottom: 12 }}>Onde me encontrar</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="https://github.com/CunhazadanoDale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--ink)",
                  textDecoration: "none",
                  fontSize: 15,
                  padding: "6px 0",
                  borderBottom: "1px solid var(--muted)",
                  fontWeight: 600,
                }}
              >
                ⌂ GitHub (@CunhazadanoDale) ↗
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-cunha-ramos/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--ink)",
                  textDecoration: "none",
                  fontSize: 15,
                  padding: "6px 0",
                  borderBottom: "1px solid var(--muted)",
                  fontWeight: 600,
                }}
              >
                ▰ LinkedIn (Gabriel Cunha Ramos) ↗
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
