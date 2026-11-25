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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 355px",
          gap: 24,
        }}
      >
        {/* Coluna esquerda */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Destaque / Hero */}
          <Panel>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 28,
                marginTop: 0,
              }}
            >
              Desenvolvedor Front-end
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                fontWeight: "normal",
                maxWidth: 540,
              }}
            >
              Apaixonado por interfaces bonitas e experiências que fazem
              sentido. Aqui você encontra meus projetos, aprendizados e um
              pouco da minha forma de pensar código.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
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
                  padding: "9px 18px",
                  boxShadow: "2px 2px 0 var(--line)",
                  fontSize: 15,
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
                  padding: "9px 18px",
                  boxShadow: "2px 2px 0 var(--line)",
                  fontSize: 15,
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
            <h2 style={{ fontSize: 22, marginTop: 0 }}>Stack & Ferramentas</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "HTML", "CSS", "JavaScript", "TypeScript", "React",
                "Next.js", "Git", "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "7px 14px",
                    border: "2px solid var(--line)",
                    borderRadius: 5,
                    fontSize: 14,
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
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Calendar />

          {/* Status card */}
          <Panel
            style={{
              background: "var(--teal)",
              color: "var(--cream)",
            }}
          >
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 22,
                marginTop: 0,
              }}
            >
              Status atual
            </h2>
            <p
              style={{ fontStyle: "italic", fontSize: 16, fontWeight: "normal" }}
            >
              🟢 Disponível para oportunidades
            </p>
            <p
              style={{ fontSize: 14, fontWeight: "normal", opacity: 0.85 }}
            >
              Estudando e construindo. Aberto a freelas e posições front-end.
            </p>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 44,
                opacity: 0.25,
                background:
                  "repeating-linear-gradient(90deg,#1e3938 0 18px,transparent 18px 26px)",
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
