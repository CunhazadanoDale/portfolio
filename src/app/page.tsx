import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Calendar from "@/components/widgets/Calendar";
import Panel from "@/components/ui/Panel";

export default function HomePage() {
  return (
    <AppShell>
      <WelcomeHeader
        title="Olá! 👋"
        quote="Grandes conquistas começam com um bom código."
      />

      <div className="dashboard-columns">
        {/* Coluna esquerda */}
        <div className="dashboard-left">
          {/* Destaque / Hero */}
          <Panel>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 26,
                marginTop: 0,
                marginBottom: 10,
              }}
            >
              Gabriel Cunha Ramos
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                fontWeight: "normal",
                maxWidth: 620,
                margin: "0 0 16px 0",
              }}
            >
              Desenvolvedor front-end focado em criar interfaces elegantes, funcionais
              e interativas. Aqui você encontra meus projetos, experimentos e tecnologias com que trabalho.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a
                href="https://github.com/CunhazadanoDale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "var(--ink)",
                  color: "var(--cream)",
                  border: "2px solid var(--line)",
                  borderRadius: 5,
                  padding: "8px 16px",
                  boxShadow: "2px 2px 0 var(--line)",
                  fontSize: 14,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                GitHub →
              </a>
              <a
                href="/about"
                style={{
                  display: "inline-block",
                  background: "var(--teal)",
                  color: "white",
                  border: "2px solid var(--line)",
                  borderRadius: 5,
                  padding: "8px 16px",
                  boxShadow: "2px 2px 0 var(--line)",
                  fontSize: 14,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Sobre mim
              </a>
            </div>
          </Panel>

          {/* Stack de tecnologias */}
          <Panel>
            <h2 style={{ fontSize: 20, marginTop: 0, marginBottom: 12 }}>
              Stack & Ferramentas
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
                "Next.js", "Tailwind CSS", "Git", "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "6px 12px",
                    border: "2px solid var(--line)",
                    borderRadius: 5,
                    fontSize: 13,
                    background: "var(--cream)",
                    boxShadow: "2px 2px 0 var(--line)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Panel>

          {/* Projetos preview */}
          <ProjectsPreview />
        </div>

        {/* Coluna direita */}
        <div className="dashboard-right">
          <Calendar />

          {/* Status card */}
          <Panel
            style={{
              background: "var(--teal)",
              color: "var(--cream)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 20,
                marginTop: 0,
                marginBottom: 8,
              }}
            >
              Status atual
            </h2>
            <p
              style={{ fontStyle: "italic", fontSize: 15, fontWeight: "normal", margin: "0 0 6px 0" }}
            >
              🟢 Disponível para projetos
            </p>
            <p
              style={{ fontSize: 13, fontWeight: "normal", opacity: 0.9, lineHeight: 1.4 }}
            >
              Construindo projetos dinâmicos com Next.js. Aberto a colaborações e oportunidades front-end.
            </p>
            <div
              style={{
                height: 36,
                marginTop: 14,
                opacity: 0.25,
                background:
                  "repeating-linear-gradient(90deg,#1e3938 0 16px,transparent 16px 24px)",
                clipPath:
                  "polygon(0 65%,10% 65%,10% 30%,16% 30%,16% 80%,26% 80%,26% 20%,32% 20%,32% 55%,42% 55%,42% 10%,49% 10%,49% 85%,60% 85%,60% 40%,70% 40%,70% 70%,82% 70%,82% 20%,90% 20%,90% 55%,100% 55%,100% 100%,0 100%)",
              }}
            />
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
