"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { Project } from "@/lib/types";

interface ProjectsFeedProps {
  initialStarredProjects: Project[];
  allProjects: Project[];
}

export default function ProjectsFeed({
  initialStarredProjects,
  allProjects,
}: ProjectsFeedProps) {
  const [filterMode, setFilterMode] = useState<"starred" | "all">("starred");
  const [search, setSearch] = useState("");

  const currentList = filterMode === "starred" ? initialStarredProjects : allProjects;

  const filtered = currentList.filter((project) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      project.name.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      (project.language && project.language.toLowerCase().includes(q)) ||
      project.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Barra de controle: Abas de filtro + Busca */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          background: "var(--paper)",
          border: "3px solid var(--line)",
          borderRadius: 8,
          padding: "14px 18px",
          boxShadow: "4px 4px 0 var(--line)",
        }}
      >
        {/* Abas */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={() => setFilterMode("starred")}
            style={{
              background: filterMode === "starred" ? "var(--gold)" : "transparent",
              color: filterMode === "starred" ? "var(--ink)" : "inherit",
              border: "2px solid var(--line)",
              borderRadius: 4,
              padding: "6px 14px",
              fontSize: 14,
              fontWeight: 700,
              boxShadow: filterMode === "starred" ? "2px 2px 0 var(--line)" : "none",
              cursor: "pointer",
            }}
          >
            ★ Apenas com estrelas ({initialStarredProjects.length})
          </button>
          <button
            onClick={() => setFilterMode("all")}
            style={{
              background: filterMode === "all" ? "var(--gold)" : "transparent",
              color: filterMode === "all" ? "var(--ink)" : "inherit",
              border: "2px solid var(--line)",
              borderRadius: 4,
              padding: "6px 14px",
              fontSize: 14,
              fontWeight: 700,
              boxShadow: filterMode === "all" ? "2px 2px 0 var(--line)" : "none",
              cursor: "pointer",
            }}
          >
            Todos os projetos ({allProjects.length})
          </button>
        </div>

        {/* Campo de busca */}
        <div style={{ flex: "1 1 240px", maxWidth: 360 }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtrar por nome, linguagem ou tag..."
            style={{
              width: "100%",
              background: "#fff8e8",
              border: "2px solid var(--line)",
              borderRadius: 4,
              padding: "7px 12px",
              fontSize: 14,
              color: "var(--ink)",
            }}
          />
        </div>
      </div>

      {/* Lista de Cards Individuais */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div
            style={{
              background: "var(--paper)",
              border: "3px solid var(--line)",
              borderRadius: 8,
              padding: "30px",
              textAlign: "center",
              fontStyle: "italic",
              color: "#5f5647",
            }}
          >
            Nenhum projeto encontrado para o termo pesquisado.
          </div>
        )}
      </div>

      {/* Rodapé da seção */}
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          opacity: 0.8,
          fontSize: 15,
          padding: "10px 0 20px",
        }}
      >
        Projetos carregados automaticamente da sua conta GitHub (@CunhazadanoDale). <span style={{ color: "var(--orange)" }}>✳</span>
      </div>
    </div>
  );
}
