"use client";

import { useState, useEffect, useMemo } from "react";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import {
  PipelineItem,
  PipelineStage,
  STAGE_CONFIG,
  INITIAL_PIPELINE_ITEMS,
} from "@/lib/pipeline";

const STAGES: PipelineStage[] = ["backlog", "in-progress", "testing", "done"];

export default function Pipeboard() {
  const [items, setItems] = useState<PipelineItem[]>(INITIAL_PIPELINE_ITEMS);
  const [selectedProject, setSelectedProject] = useState<string>("all");
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newProject, setNewProject] = useState("portfolio");
  const [newStage, setNewStage] = useState<PipelineStage>("in-progress");

  // Hidratação com localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-pipeline-items");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const saveItems = (newItems: PipelineItem[]) => {
    setItems(newItems);
    localStorage.setItem("portfolio-pipeline-items", JSON.stringify(newItems));
  };

  // Mover tarefa entre estágios
  const moveItem = (id: string, direction: "next" | "prev") => {
    const updated = items.map((item) => {
      if (item.id !== id) return item;
      const currentIdx = STAGES.indexOf(item.stage);
      const nextIdx = direction === "next" ? currentIdx + 1 : currentIdx - 1;
      if (nextIdx < 0 || nextIdx >= STAGES.length) return item;
      return { ...item, stage: STAGES[nextIdx], updatedAt: "Hoje" };
    });
    saveItems(updated);
  };

  // Deletar item
  const deleteItem = (id: string) => {
    saveItems(items.filter((i) => i.id !== id));
  };

  // Adicionar nova tarefa ao pipeline
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: PipelineItem = {
      id: `pipe-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim() || "Tarefa em andamento no roadmap.",
      projectName: newProject,
      stage: newStage,
      tags: [newProject],
      priority: "medium",
      updatedAt: "Recente",
    };

    saveItems([newItem, ...items]);
    setNewTitle("");
    setNewDesc("");
    setIsAdding(false);
  };

  // Lista única de projetos para o filtro
  const uniqueProjects = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => set.add(i.projectName));
    return Array.from(set);
  }, [items]);

  // Itens filtrados por projeto
  const filteredItems = useMemo(() => {
    if (selectedProject === "all") return items;
    return items.filter((i) => i.projectName === selectedProject);
  }, [items, selectedProject]);

  return (
    <Panel style={{ boxShadow: "5px 5px 0 var(--line)" }}>
      {/* Header do Pipeboard */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
          marginBottom: 16,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, margin: 0 }}>
              Pipeboard de Projetos & Roadmap ▤
            </h2>
            <span
              style={{
                fontSize: 12,
                background: "var(--gold)",
                color: "var(--ink)",
                border: "1px solid var(--line)",
                padding: "2px 8px",
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              {filteredItems.length} tarefas
            </span>
          </div>
          <p style={{ margin: "4px 0 0", fontSize: 14, opacity: 0.85, fontWeight: "normal" }}>
            Visão viva e transparente do que estou construindo e planejando além dos commits do GitHub.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {/* Filtro por projeto */}
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            style={{
              background: "#fff8e8",
              border: "2px solid var(--line)",
              borderRadius: 4,
              padding: "6px 10px",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--ink)",
            }}
          >
            <option value="all">Todos os Projetos</option>
            {uniqueProjects.map((p) => (
              <option key={p} value={p}>
                Projeto: {p}
              </option>
            ))}
          </select>

          <Button
            variant="action"
            onClick={() => setIsAdding(!isAdding)}
            style={{ fontSize: 13, padding: "6px 12px" }}
          >
            {isAdding ? "✕ Fechar" : "＋ Nova Tarefa"}
          </Button>
        </div>
      </div>

      {/* Formulário de Nova Tarefa */}
      {isAdding && (
        <form
          onSubmit={handleAddItem}
          style={{
            background: "#fffaf0",
            border: "2px solid var(--line)",
            borderRadius: 6,
            padding: "16px",
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input
              type="text"
              placeholder="Título da tarefa ou feature..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              style={{
                background: "white",
                border: "2px solid var(--line)",
                borderRadius: 4,
                padding: "8px 12px",
                fontSize: 14,
              }}
            />

            <select
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
              style={{
                background: "white",
                border: "2px solid var(--line)",
                borderRadius: 4,
                padding: "8px 12px",
                fontSize: 14,
              }}
            >
              {uniqueProjects.map((p) => (
                <option key={p} value={p}>
                  Vincular a: {p}
                </option>
              ))}
              <option value="novo-projeto">Outro / Estudo Geral</option>
            </select>
          </div>

          <textarea
            placeholder="Descrição do que será implementado ou estudado..."
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            rows={2}
            style={{
              background: "white",
              border: "2px solid var(--line)",
              borderRadius: 4,
              padding: "8px 12px",
              fontSize: 14,
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: "bold" }}>Coluna inicial:</span>
              <select
                value={newStage}
                onChange={(e) => setNewStage(e.target.value as PipelineStage)}
                style={{
                  background: "white",
                  border: "2px solid var(--line)",
                  borderRadius: 4,
                  padding: "4px 8px",
                  fontSize: 13,
                }}
              >
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {STAGE_CONFIG[s].icon} {STAGE_CONFIG[s].label}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" style={{ padding: "6px 14px", fontSize: 13 }}>
              Salvar no Pipeboard 📌
            </Button>
          </div>
        </form>
      )}

      {/* As 4 Colunas do Pipeline (Kanban Retrô) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 16,
          alignItems: "flex-start",
        }}
      >
        {STAGES.map((stage) => {
          const cfg = STAGE_CONFIG[stage];
          const stageItems = filteredItems.filter((i) => i.stage === stage);
          const currentStageIdx = STAGES.indexOf(stage);

          return (
            <div
              key={stage}
              style={{
                background: cfg.color,
                border: `2px solid var(--line)`,
                borderRadius: 8,
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxShadow: "2px 2px 0 var(--line)",
                minHeight: 320,
              }}
            >
              {/* Header da Coluna */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 8,
                  borderBottom: `2px solid ${cfg.border}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span>{cfg.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{cfg.label}</span>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    background: "var(--cream)",
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                    padding: "1px 6px",
                  }}
                >
                  {stageItems.length}
                </span>
              </div>

              {/* Cards da Coluna */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {stageItems.length > 0 ? (
                  stageItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        background: "#fffaf0",
                        border: "2px solid var(--line)",
                        borderRadius: 6,
                        padding: "10px 12px",
                        boxShadow: "2px 2px 0 var(--line)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {/* Topo do card: Projeto vinculado */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "var(--teal2)",
                            background: "var(--cream)",
                            padding: "2px 6px",
                            borderRadius: 4,
                            border: "1px solid var(--line)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: 140,
                          }}
                        >
                          {item.projectName}
                        </span>

                        <button
                          onClick={() => deleteItem(item.id)}
                          title="Remover card"
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#8a4f3b",
                            fontSize: 14,
                            fontWeight: "bold",
                            cursor: "pointer",
                            padding: "0 2px",
                          }}
                        >
                          ×
                        </button>
                      </div>

                      {/* Título da tarefa */}
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", lineHeight: 1.3 }}>
                        {item.title}
                      </div>

                      {/* Descrição */}
                      <p style={{ margin: 0, fontSize: 12, color: "#4f473c", fontWeight: "normal", lineHeight: 1.4 }}>
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 2 }}>
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: 10,
                              background: "#efe4ce",
                              padding: "1px 5px",
                              borderRadius: 3,
                              border: "1px solid #d5c4a5",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Botões de Mover de Estágio */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 6,
                          paddingTop: 6,
                          borderTop: "1px dashed #e3d5b9",
                        }}
                      >
                        {currentStageIdx > 0 ? (
                          <button
                            onClick={() => moveItem(item.id, "prev")}
                            style={{
                              background: "transparent",
                              border: "1px solid var(--line)",
                              borderRadius: 3,
                              padding: "1px 6px",
                              fontSize: 11,
                              cursor: "pointer",
                            }}
                            title="Voltar estágio"
                          >
                            ← Voltar
                          </button>
                        ) : (
                          <span />
                        )}

                        {currentStageIdx < STAGES.length - 1 && (
                          <button
                            onClick={() => moveItem(item.id, "next")}
                            style={{
                              background: "var(--teal)",
                              color: "white",
                              border: "1px solid var(--line)",
                              borderRadius: 3,
                              padding: "1px 8px",
                              fontSize: 11,
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                            title="Avançar estágio"
                          >
                            Avançar →
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      padding: "20px 10px",
                      textAlign: "center",
                      fontStyle: "italic",
                      fontSize: 12,
                      opacity: 0.6,
                    }}
                  >
                    Nenhuma tarefa nesta etapa
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
