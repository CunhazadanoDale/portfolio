"use client";

import { useState } from "react";
import Tag from "@/components/ui/Tag";
import ProgressBar from "@/components/ui/ProgressBar";
import { Project } from "@/lib/types";

interface ProjectListItemProps {
  project: Project;
  defaultExpanded?: boolean;
}

const colorDot: Record<string, string> = {
  teal: "var(--teal)",
  orange: "var(--orange)",
  gold: "var(--gold)",
};

export default function ProjectListItem({
  project,
  defaultExpanded = false,
}: ProjectListItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div
      style={{
        borderBottom: "1px solid #e3d5b9",
        padding: "14px 0",
        transition: "background 0.15s ease",
      }}
    >
      {/* Linha principal idêntica ao protótipo */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="project-list-row"
        style={{
          display: "grid",
          alignItems: "center",
          gap: 14,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Dot colorido */}
        <span
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: colorDot[project.color] || "var(--teal)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />

        {/* Nome do projeto */}
        <span
          style={{
            fontSize: 17,
            fontWeight: 700,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {project.name}
        </span>

        {/* Barra de progresso */}
        <ProgressBar value={project.progress} color={project.color} height={14} />

        {/* Porcentagem */}
        <span
          style={{
            textAlign: "right",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          {project.progress}%
        </span>

        {/* Indicador de expansão */}
        <span
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "var(--teal2)",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ▼
        </span>
      </div>

      {/* Detalhes expansíveis com estilo de anotação de papelaria */}
      {expanded && (
        <div
          style={{
            marginTop: 12,
            padding: "12px 16px 14px 32px",
            background: "#fffaf0",
            borderLeft: `3px solid ${colorDot[project.color]}`,
            borderRadius: "0 6px 6px 0",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: "normal",
              color: "#474035",
              lineHeight: 1.5,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.75, fontWeight: "normal" }}>Tags:</span>
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} variant={project.color} />
              ))}
            </div>
          )}

          {/* Links e Ações */}
          <div style={{ display: "flex", gap: 14, marginTop: 4, alignItems: "center" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--teal2)",
                  textDecoration: "underline",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Ver no GitHub ↗
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--orange)",
                  textDecoration: "underline",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Abrir Demonstração ↗
              </a>
            )}
            <span
              style={{
                marginLeft: "auto",
                fontSize: 12,
                fontStyle: "italic",
                fontWeight: "normal",
                opacity: 0.8,
              }}
            >
              Status: {project.progress === 100 ? "Concluído" : "Em andamento"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
