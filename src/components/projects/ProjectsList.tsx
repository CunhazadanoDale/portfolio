"use client";

import { useState } from "react";
import Panel from "@/components/ui/Panel";
import PanelHead from "@/components/ui/PanelHead";
import Button from "@/components/ui/Button";
import ProjectListItem from "@/components/projects/ProjectListItem";
import { Project } from "@/lib/types";

interface ProjectsListProps {
  initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [filter, setFilter] = useState<"all" | "in-progress" | "done">("all");
  const [search, setSearch] = useState("");
  const [loadingGitHub, setLoadingGitHub] = useState(false);
  const [isGitHubSource, setIsGitHubSource] = useState(false);

  // Busca repositórios públicos ao vivo do GitHub
  const fetchFromGitHub = async () => {
    try {
      setLoadingGitHub(true);
      const res = await fetch("https://api.github.com/users/CunhazadanoDale/repos?sort=updated&per_page=15");
      if (!res.ok) throw new Error("Erro na requisição");
      const repos = await res.json();

      const githubProjects: Project[] = repos.map((repo: any, index: number) => {
        const colors: Array<"teal" | "orange" | "gold"> = ["teal", "orange", "gold"];
        return {
          id: String(repo.id),
          name: repo.name,
          description: repo.description || "Repositório público no GitHub sem descrição informada.",
          tags: [repo.language, ...(repo.topics || [])].filter(Boolean),
          github: repo.html_url,
          url: repo.homepage || undefined,
          color: colors[index % 3],
          status: "in-progress",
          progress: repo.archived ? 100 : Math.min(95, 30 + ((repo.stargazers_count + repo.forks_count + 1) * 15)),
        };
      });

      if (githubProjects.length > 0) {
        setProjects(githubProjects);
        setIsGitHubSource(true);
      }
    } catch (err) {
      alert("Não foi possível carregar os repositórios do GitHub no momento. Exibindo dados locais.");
    } finally {
      setLoadingGitHub(false);
    }
  };

  const filtered = projects.filter((p) => {
    const matchesFilter =
      filter === "all" ? true : filter === "done" ? p.progress === 100 : p.progress < 100;
    const matchesSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <Panel style={{ boxShadow: "5px 5px 0 var(--line)" }}>
      {/* Cabeçalho do painel */}
      <PanelHead
        title="Seu trabalho, no seu ritmo"
        action={
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <Button
              variant="action"
              onClick={fetchFromGitHub}
              disabled={loadingGitHub}
              style={{
                fontSize: 13,
                padding: "6px 12px",
                background: isGitHubSource ? "var(--teal2)" : "var(--orange)",
              }}
            >
              {loadingGitHub ? "Carregando..." : isGitHubSource ? "✓ Sincronizado com GitHub" : "＋ Carregar do GitHub API"}
            </Button>
          </div>
        }
      />

      {/* Barra de Filtro e Busca */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 16,
          paddingBottom: 14,
          borderBottom: "2px solid #dfd0b2",
        }}
      >
        {/* Abas de filtro */}
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { id: "all", label: "Todos" },
            { id: "in-progress", label: "Em andamento" },
            { id: "done", label: "Concluídos" },
          ].map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                style={{
                  background: active ? "var(--gold)" : "#eedcb7",
                  color: active ? "var(--ink)" : "#5a5247",
                  border: "2px solid var(--line)",
                  borderRadius: 4,
                  padding: "4px 10px",
                  fontSize: 13,
                  fontWeight: 700,
                  boxShadow: active ? "1px 1px 0 var(--line)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Input de busca rápida */}
        <div style={{ flex: "1 1 200px", maxWidth: 320 }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtrar por nome ou tag..."
            style={{
              width: "100%",
              background: "#fff8e8",
              border: "2px solid var(--line)",
              borderRadius: 4,
              padding: "6px 10px",
              fontSize: 13,
            }}
          />
        </div>
      </div>

      {/* Lista de projetos */}
      <div>
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))
        ) : (
          <p style={{ fontStyle: "italic", color: "#6e6659", padding: "16px 0" }}>
            Nenhum projeto encontrado para o filtro aplicado.
          </p>
        )}
      </div>

      {/* Nota de rodapé fiel ao protótipo */}
      <p
        style={{
          opacity: 0.75,
          fontSize: 14,
          fontStyle: "italic",
          marginTop: 20,
          marginBottom: 0,
          borderTop: "1px dashed var(--muted)",
          paddingTop: 12,
        }}
      >
        Pequenos passos também são progresso. <span style={{ color: "var(--orange)" }}>✳</span>
      </p>
    </Panel>
  );
}
