import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Panel from "@/components/ui/Panel";
import Tag from "@/components/ui/Tag";

export default function AboutPage() {
  return (
    <AppShell>
      <WelcomeHeader title="Sobre mim" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 300px",
          gap: 24,
        }}
      >
        {/* Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Panel>
            <h2 style={{ fontFamily: "Georgia, serif", marginTop: 0 }}>
              Olá! Sou o Brad.
            </h2>
            <p style={{ lineHeight: 1.7, fontWeight: "normal", fontSize: 16 }}>
              Desenvolvedor front-end apaixonado por criar interfaces bonitas e
              funcionais. Gosto de transformar ideias em código limpo e
              experiências que as pessoas realmente gostam de usar.
            </p>
            <p style={{ lineHeight: 1.7, fontWeight: "normal", fontSize: 16 }}>
              Estou sempre aprendendo e explorando novas tecnologias, com foco
              especial em React, Next.js e design de UI.
            </p>
          </Panel>

          <Panel>
            <h2 style={{ fontSize: 22, marginTop: 0 }}>Habilidades</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "HTML & CSS", variant: "teal" as const },
                { label: "JavaScript", variant: "gold" as const },
                { label: "TypeScript", variant: "teal" as const },
                { label: "React", variant: "orange" as const },
                { label: "Next.js", variant: "teal" as const },
                { label: "Git & GitHub", variant: "gold" as const },
                { label: "Responsive Design", variant: "orange" as const },
              ].map((skill) => (
                <Tag
                  key={skill.label}
                  label={skill.label}
                  variant={skill.variant}
                />
              ))}
            </div>
          </Panel>
        </div>

        {/* Links / Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Panel>
            <h2 style={{ fontSize: 20, marginTop: 0 }}>Encontre-me em</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="https://github.com/CunhazadanoDale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "var(--ink)",
                  textDecoration: "none",
                  fontSize: 15,
                  padding: "8px 0",
                  borderBottom: "1px solid var(--muted)",
                }}
              >
                <span style={{ fontSize: 20 }}>⌂</span>
                GitHub
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
