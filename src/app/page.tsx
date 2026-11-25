import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Calendar from "@/components/widgets/Calendar";
import Panel from "@/components/ui/Panel";
import CvDownloadButton from "@/components/ui/CvDownloadButton";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

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
            {/* Foto de perfil + Nome e Cargo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 92,
                  height: 92,
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 26,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Gabriel Cunha Ramos
                </h2>
                <div
                  style={{
                    fontSize: 15,
                    fontStyle: "italic",
                    color: "var(--teal2)",
                    fontWeight: 700,
                    marginTop: 4,
                  }}
                >
                  Desenvolvedor Front-end
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                fontWeight: "normal",
                maxWidth: 620,
                margin: "0 0 18px 0",
              }}
            >
              Desenvolvedor front-end focado em criar interfaces elegantes, funcionais
              e interativas com React e Next.js. Aqui você encontra meus projetos práticos, experimentos técnicos e código aberto.
            </p>

            {/* Ações Rápidas: CV, E-mail, GitHub, Sobre */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <CvDownloadButton variant="stamp" label="Baixar CV" />
              <CopyEmailButton label="Copiar E-mail" />
              <a
                href="https://github.com/CunhazadanoDale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--ink)",
                  color: "var(--cream)",
                  border: "2px solid var(--line)",
                  borderRadius: 5,
                  padding: "8px 14px",
                  boxShadow: "2px 2px 0 var(--line)",
                  fontSize: 14,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-cunha-ramos/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--teal)",
                  color: "white",
                  border: "2px solid var(--line)",
                  borderRadius: 5,
                  padding: "8px 14px",
                  boxShadow: "2px 2px 0 var(--line)",
                  fontSize: 14,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                LinkedIn ↗
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
                "Next.js", "Tailwind CSS", "Go", "Java", "Git", "GitHub",
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
              🟢 Disponível para projetos & freelas
            </p>
            <p
              style={{ fontSize: 13, fontWeight: "normal", opacity: 0.9, lineHeight: 1.4 }}
            >
              Desenvolvendo aplicações com Next.js e TypeScript. Aberto a posições front-end e parcerias.
            </p>

            <div style={{ marginTop: 14 }}>
              <CopyEmailButton label="Entrar em contato" />
            </div>

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
