"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com backend / Resend / Formspree
    setSent(true);
  };

  return (
    <AppShell>
      <WelcomeHeader title="Contato" />
      <div style={{ maxWidth: 600 }}>
        {sent ? (
          <Panel>
            <h2 style={{ fontFamily: "Georgia, serif" }}>
              Mensagem enviada! ✳
            </h2>
            <p style={{ fontWeight: "normal" }}>
              Obrigado pelo contato. Responderei em breve!
            </p>
            <Button onClick={() => setSent(false)}>Enviar outra</Button>
          </Panel>
        ) : (
          <Panel>
            <h2 style={{ fontFamily: "Georgia, serif", marginTop: 0 }}>
              Vamos conversar?
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="name" style={{ fontSize: 15 }}>
                  Nome
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
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
                <label htmlFor="email" style={{ fontSize: 15 }}>
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
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
                <label htmlFor="message" style={{ fontSize: 15 }}>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  rows={6}
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
              <Button type="submit" style={{ alignSelf: "flex-start" }}>
                Enviar mensagem ✉
              </Button>
            </form>
          </Panel>
        )}
      </div>
    </AppShell>
  );
}
