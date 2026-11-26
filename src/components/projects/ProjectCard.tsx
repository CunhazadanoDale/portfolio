"use client";

import { useState } from "react";
import Link from "next/link";
import Panel from "@/components/ui/Panel";
import Tag from "@/components/ui/Tag";
import ProjectMediaModal from "@/components/projects/ProjectMediaModal";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const starsCount = project.stars ?? 0;
  const isFeatured = starsCount >= 2;

  return (
    <>
      <Panel
        style={{
          padding: 0,
          overflow: "hidden",
          boxShadow: "5px 5px 0 var(--line)",
          position: "relative",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
      >
        {/* Carimbo de Projeto em Destaque */}
        {isFeatured && (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "var(--orange)",
              color: "white",
              border: "2px dashed var(--line)",
              padding: "3px 8px",
              borderRadius: 4,
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 0.8,
              boxShadow: "2px 2px 0 var(--line)",
              zIndex: 10,
              transform: "rotate(2deg)",
            }}
          >
            ★ Destaque Principal
          </div>
        )}

        <div className="project-card-layout">
          {/* Lado Esquerdo: Espaço para Foto ou Vídeo (Clicável para ampliar) */}
          <div
            onClick={() => (project.image || project.video) && setModalOpen(true)}
            className="project-media-col"
            style={{ cursor: project.image || project.video ? "pointer" : "default" }}
            title={project.image || project.video ? "Clique para ampliar a imagem/vídeo" : undefined}
          >
            {project.video ? (
              <video
                src={project.video}
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : project.image ? (
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img
                  src={project.image}
                  alt={`Preview do projeto ${project.name}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    padding: "2px 6px",
                    borderRadius: 3,
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  🔍 Ampliar
                </span>
              </div>
            ) : (
              /* Placeholder com visual retrô de moldura técnica / papelaria */
              <div className="project-media-placeholder">
                <div style={{ fontSize: 36, lineHeight: 1, opacity: 0.85 }}>☼</div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "var(--teal2)",
                    marginTop: 6,
                    textAlign: "center",
                  }}
                >
                  {project.language || "Projeto"}
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontStyle: "italic",
                    opacity: 0.7,
                    marginTop: 4,
                    textAlign: "center",
                  }}
                >
                  [ Espaço para Foto ou Vídeo ]
                </span>
              </div>
            )}
          </div>

          {/* Lado Direito: Informações do Projeto */}
          <div className="project-content-col">
            {/* Cabeçalho do Card: Nome + Estrelas */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
                flexWrap: "wrap",
                paddingRight: isFeatured ? 110 : 0,
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 22,
                  margin: 0,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  wordBreak: "break-word",
                }}
              >
                {project.name}
              </h3>

              {/* Badge de Estrelas GitHub */}
              {starsCount > 0 && !isFeatured && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "var(--gold)",
                    color: "var(--ink)",
                    padding: "3px 9px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700,
                    border: "2px solid var(--line)",
                    boxShadow: "2px 2px 0 var(--line)",
                    whiteSpace: "nowrap",
                  }}
                >
                  ★ {starsCount} {starsCount === 1 ? "estrela" : "estrelas"}
                </span>
              )}
            </div>

            {/* Descrição */}
            <p
              style={{
                margin: "10px 0 14px",
                fontSize: 15,
                fontWeight: "normal",
                color: "#474035",
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            {/* Linguagens e Tecnologias */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
              {project.language && (
                <Tag label={project.language} variant="teal" />
              )}
              {project.tags
                ?.filter((t) => t !== project.language)
                .map((tag) => (
                  <Tag key={tag} label={tag} variant="gold" />
                ))}
            </div>

            {/* Links e Ações */}
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                flexWrap: "wrap",
                borderTop: "1px dashed var(--muted)",
                paddingTop: 12,
              }}
            >
              <Link
                href={`/pipeline?project=${encodeURIComponent(project.name)}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--teal)",
                  color: "white",
                  border: "2px solid var(--line)",
                  borderRadius: 4,
                  padding: "7px 12px",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "2px 2px 0 var(--line)",
                }}
              >
                Pipeline ▤
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "var(--ink)",
                    color: "var(--cream)",
                    border: "2px solid var(--line)",
                    borderRadius: 4,
                    padding: "7px 14px",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "2px 2px 0 var(--line)",
                  }}
                >
                  GitHub ↗
                </a>
              )}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "var(--orange)",
                    color: "white",
                    border: "2px solid var(--line)",
                    borderRadius: 4,
                    padding: "7px 14px",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "2px 2px 0 var(--line)",
                  }}
                >
                  Demonstração ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Panel>

      {/* Modal ampliado */}
      {modalOpen && (
        <ProjectMediaModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
