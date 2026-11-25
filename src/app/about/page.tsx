import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Panel from "@/components/ui/Panel";
import Tag from "@/components/ui/Tag";

export default function AboutPage() {
  return (
    <AppShell>
      <WelcomeHeader title="Sobre mim" />
      <div className="about-grid">
        {/* Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <Panel>
            <h2 style={{ fontFamily: "Georgia, serif", marginTop: 0, fontSize: 24 }}>
              Olá! Sou o Gabriel Cunha Ramos.
            </h2>
            <p style={{ lineHeight: 1.7, fontWeight: "normal", fontSize: 16 }}>
              Desenvolvedor front-end focado em construir aplicações web modernas,
              interativas e bem arquitetadas. Gosto de unir design visual expressivo
              com código limpo, componentes modulares e boas práticas.
            </p>
            <p style={{ lineHeight: 1.7, fontWeight: "normal", fontSize: 16 }}>
              Trabalho com ecossistema React e Next.js, explorando TypeScript e
              estilizações consistentes para entregar experiências fluidas em qualquer dispositivo.
            </p>
          </Panel>

          <Panel>
            <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 12 }}>Habilidades</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "HTML5 & CSS3", variant: "teal" as const },
                { label: "JavaScript (ES6+)", variant: "gold" as const },
                { label: "TypeScript", variant: "teal" as const },
                { label: "React & Hooks", variant: "orange" as const },
                { label: "Next.js (App Router)", variant: "teal" as const },
                { label: "Design Responsivo", variant: "orange" as const },
                { label: "Git & GitHub", variant: "gold" as const },
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
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <Panel>
            <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 12 }}>Conecte-se</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: 20 }}>⌂</span>
                GitHub (@CunhazadanoDale)
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
