import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Panel from "@/components/ui/Panel";
import Tag from "@/components/ui/Tag";
import CvDownloadButton from "@/components/ui/CvDownloadButton";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

export default function AboutPage() {
  return (
    <AppShell>
      <WelcomeHeader title="Sobre mim" />
      <div className="about-grid">
        {/* Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <Panel>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 16, flexWrap: "wrap" }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "3px solid var(--line)",
                  boxShadow: "3px 3px 0 var(--line)",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "var(--cream)",
                }}
              >
                <img
                  src="/images/foto.jpg"
                  alt="Gabriel Cunha Ramos"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div>
                <h2 style={{ fontFamily: "Georgia, serif", margin: 0, fontSize: 24 }}>
                  Gabriel Cunha Ramos
                </h2>
                <div style={{ fontSize: 14, fontStyle: "italic", color: "var(--teal2)", fontWeight: 700, marginTop: 4 }}>
                  Desenvolvedor Front-end & Criador de Interfaces
                </div>
              </div>
            </div>

            <p style={{ lineHeight: 1.7, fontWeight: "normal", fontSize: 16, margin: "0 0 12px" }}>
              Desenvolvedor front-end focado em construir aplicações web modernas,
              interativas e bem arquitetadas. Gosto de unir design visual expressivo
              com código limpo, componentes modulares e atenção aos detalhes.
            </p>
            <p style={{ lineHeight: 1.7, fontWeight: "normal", fontSize: 16, margin: 0 }}>
              Trabalho principalmente com o ecossistema React, Next.js e TypeScript,
              além de explorar backend em Go e Java. Estou sempre buscando criar experiências fluidas
              que realmente funcionam bem no dia a dia.
            </p>
          </Panel>

          <Panel>
            <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 12 }}>Habilidades & Conhecimentos</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "HTML5 & CSS3 Moderno", variant: "teal" as const },
                { label: "JavaScript (ES6+)", variant: "gold" as const },
                { label: "TypeScript", variant: "teal" as const },
                { label: "React & Hooks", variant: "orange" as const },
                { label: "Next.js (App Router)", variant: "teal" as const },
                { label: "Design Responsivo", variant: "orange" as const },
                { label: "Tailwind CSS", variant: "gold" as const },
                { label: "Golang (Go)", variant: "teal" as const },
                { label: "Java & Spring", variant: "gold" as const },
                { label: "Git & GitHub", variant: "orange" as const },
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
            <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 14 }}>Currículo & Contato</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CvDownloadButton variant="stamp" label="Baixar Currículo" />
              <CopyEmailButton label="Copiar E-mail" />
            </div>
          </Panel>

          <Panel>
            <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 12 }}>Redes & Conexões</h2>
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
                <span style={{ fontSize: 18 }}>⌂</span>
                GitHub (@CunhazadanoDale) ↗
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-cunha-ramos/"
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
                <span style={{ fontSize: 18 }}>▰</span>
                LinkedIn (Gabriel Cunha Ramos) ↗
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
