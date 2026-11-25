"use client";

import { useEffect } from "react";
import { Project } from "@/lib/types";

interface ProjectMediaModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectMediaModal({
  project,
  onClose,
}: ProjectMediaModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(30, 27, 22, 0.75)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--cream)",
          border: "4px solid var(--line)",
          borderRadius: 10,
          boxShadow: "8px 8px 0 var(--line)",
          maxWidth: 900,
          width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top bar do modal estilo janela */}
        <div
          style={{
            background: "var(--teal2)",
            color: "var(--cream)",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "3px solid var(--line)",
          }}
        >
          <span style={{ fontFamily: "Georgia, serif", fontWeight: "bold", fontSize: 18 }}>
            Prancheta de Detalhes — {project.name}
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            style={{
              background: "var(--orange)",
              color: "white",
              border: "2px solid var(--line)",
              borderRadius: 4,
              width: 30,
              height: 28,
              fontSize: 16,
              fontWeight: "bold",
              boxShadow: "1px 1px 0 var(--line)",
            }}
          >
            ×
          </button>
        </div>

        {/* Mídia ampliada */}
        <div
          style={{
            background: "#222",
            flex: 1,
            maxHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {project.video ? (
            <video
              src={project.video}
              controls
              autoPlay
              style={{ maxWidth: "100%", maxHeight: "60vh", display: "block" }}
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{ maxWidth: "100%", maxHeight: "60vh", objectFit: "contain", display: "block" }}
            />
          ) : (
            <div
              style={{
                padding: "60px 20px",
                textAlign: "center",
                color: "var(--cream)",
                fontFamily: "Georgia, serif",
                fontSize: 20,
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 10 }}>☼</div>
              <span>{project.name}</span>
              <p style={{ fontSize: 14, fontStyle: "italic", opacity: 0.8, marginTop: 8 }}>
                Nenhuma foto ou vídeo vinculada ainda.
              </p>
            </div>
          )}
        </div>

        {/* Rodapé informativo */}
        <div style={{ padding: "16px 20px", background: "var(--paper)" }}>
          <p style={{ margin: "0 0 10px", fontSize: 15, fontWeight: "normal", color: "#453f35" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <span style={{ fontSize: 13, fontStyle: "italic", opacity: 0.8 }}>
              {project.language} • {project.stars ? `★ ${project.stars} estrelas` : "Repositório GitHub"}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--teal)",
                  color: "white",
                  border: "2px solid var(--line)",
                  borderRadius: 4,
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "2px 2px 0 var(--line)",
                }}
              >
                Abrir Repositório no GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
