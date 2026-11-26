"use client";

import { useState, useEffect, useMemo } from "react";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";

interface StickyNote {
  id: string;
  title: string;
  content: string;
  project: string; // ex: "projetoBlocCondoApp", "portfolio", "gotextforge", "Geral"
  color: "gold" | "teal" | "orange" | "cream";
  date: string;
}

const DEFAULT_NOTES: StickyNote[] = [
  {
    id: "1",
    title: "Concorrência nas Reservas",
    content: "Validar reserva de áreas comuns com pessimistic lock ou transaction isolation no Spring Data JPA para evitar duplo agendamento simultâneo.",
    project: "projetoBlocCondoApp",
    color: "teal",
    date: "25 de Nov",
  },
  {
    id: "2",
    title: "Motor de Coloração no Terminal",
    content: "Estudo de sequências de escape ANSI em Go para coloração de sintaxe e autocomplete nativo na IDE de terminal.",
    project: "gotextforge",
    color: "gold",
    date: "24 de Nov",
  },
  {
    id: "3",
    title: "Rate Limiting por IP",
    content: "Implementar middleware de bucket token em Go para proteger os endpoints da API de tarefas contra abuso de requisições.",
    project: "TaskFlowAPI",
    color: "orange",
    date: "23 de Nov",
  },
  {
    id: "4",
    title: "Otimizações de Imagem & Caching",
    content: "Garantir carregamento instantâneo do portfolio retrô com Next.js 15 partial prerendering e revalidação de 1 hora.",
    project: "portfolio",
    color: "teal",
    date: "22 de Nov",
  },
  {
    id: "5",
    title: "Migrações de Banco com Flyway",
    content: "Configurar controle de versão de schema do PostgreSQL para as tabelas de pedidos e produtos da loja.",
    project: "ecommerceProjectIndiano",
    color: "gold",
    date: "20 de Nov",
  },
  {
    id: "6",
    title: "Estudo: Goroutines vs Threads OS",
    content: "Aprofundar nos custos de contexto: goroutines ocupam poucos KB de stack inicial enquanto threads do SO demandam MB.",
    project: "Geral / Estudos",
    color: "cream",
    date: "18 de Nov",
  },
];

const colorStyles: Record<string, { bg: string; border: string; headerBg: string; text: string }> = {
  gold: { bg: "#fef8e7", border: "var(--gold)", headerBg: "var(--gold)", text: "var(--ink)" },
  teal: { bg: "#edf5f4", border: "var(--teal)", headerBg: "var(--teal)", text: "white" },
  orange: { bg: "#fef3ed", border: "var(--orange)", headerBg: "var(--orange)", text: "white" },
  cream: { bg: "#fffaf0", border: "var(--muted)", headerBg: "var(--muted)", text: "var(--ink)" },
};

const AVAILABLE_PROJECTS = [
  "projetoBlocCondoApp",
  "gotextforge",
  "TaskFlowAPI",
  "portfolio",
  "ecommerceProjectIndiano",
  "cbpitu-backend",
  "Geral / Estudos",
];

export default function NotesBoard() {
  const [scratchpad, setScratchpad] = useState("");
  const [notes, setNotes] = useState<StickyNote[]>(DEFAULT_NOTES);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [isSaved, setIsSaved] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newProject, setNewProject] = useState("portfolio");
  const [newColor, setNewColor] = useState<"gold" | "teal" | "orange" | "cream">("gold");
  const [isAdding, setIsAdding] = useState(false);

  // Carrega rascunho salvo do localStorage
  useEffect(() => {
    const savedText = localStorage.getItem("portfolio-scratchpad");
    if (savedText) setScratchpad(savedText);

    const savedNotes = localStorage.getItem("portfolio-sticky-notes-v2");
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch {}
    }
  }, []);

  // Salva no localStorage com debounce
  const handleTextChange = (val: string) => {
    setScratchpad(val);
    localStorage.setItem("portfolio-scratchpad", val);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 1500);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newNote: StickyNote = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      content: newContent.trim(),
      project: newProject,
      color: newColor,
      date: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    localStorage.setItem("portfolio-sticky-notes-v2", JSON.stringify(updated));
    setNewTitle("");
    setNewContent("");
    setIsAdding(false);
  };

  const handleDeleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    localStorage.setItem("portfolio-sticky-notes-v2", JSON.stringify(updated));
  };

  // Filtragem por projeto
  const filteredNotes = useMemo(() => {
    if (selectedFilter === "all") return notes;
    return notes.filter((n) => n.project === selectedFilter);
  }, [notes, selectedFilter]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* 1. Bloco de Rascunho Livre */}
      <Panel style={{ boxShadow: "5px 5px 0 var(--line)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", margin: 0, fontSize: 24 }}>
              Um cantinho para ideias ✎
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 14, opacity: 0.8, fontWeight: "normal" }}>
              Rabisque pensamentos, snippets de código ou lembretes livres. Salvo automaticamente no seu navegador.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {isSaved && (
              <span style={{ fontSize: 13, color: "var(--teal2)", fontWeight: 700 }}>
                ✓ Salvo!
              </span>
            )}
            {scratchpad && (
              <button
                onClick={() => {
                  if (confirm("Deseja limpar o rascunho?")) handleTextChange("");
                }}
                style={{
                  background: "transparent",
                  border: "1px dashed var(--muted)",
                  padding: "4px 8px",
                  borderRadius: 4,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Textarea pautado estilo caderno retrô */}
        <textarea
          value={scratchpad}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Rabisque uma ideia, lógica de código ou nota rápida..."
          rows={6}
          style={{
            width: "100%",
            minHeight: 160,
            resize: "vertical",
            background: "#fffaf0",
            border: "2px solid var(--line)",
            borderRadius: 6,
            padding: "16px 18px",
            fontSize: 15,
            lineHeight: 1.7,
            fontFamily: "Arial, sans-serif",
            color: "var(--ink)",
            boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.05)",
          }}
        />

        <p
          style={{
            margin: "12px 0 0",
            fontSize: 13,
            fontStyle: "italic",
            opacity: 0.75,
            borderTop: "1px dashed var(--muted)",
            paddingTop: 8,
          }}
        >
          As anotações digitadas permanecem salvas na memória local do seu navegador. ✳
        </p>
      </Panel>

      {/* 2. Mural de Fichas & Lembretes Vinculados a Projetos */}
      <Panel style={{ boxShadow: "5px 5px 0 var(--line)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h2 style={{ fontFamily: "Georgia, serif", margin: 0, fontSize: 22 }}>
                Fichas de Estudo & Lembretes por Projeto 📌
              </h2>
              <span
                style={{
                  fontSize: 12,
                  background: "var(--teal)",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: 12,
                  fontWeight: 700,
                }}
              >
                {filteredNotes.length} lembretes
              </span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 14, opacity: 0.8, fontWeight: "normal" }}>
              Anotações técnicas, regras de negócio e aprendizados vinculados aos meus repositórios.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            {/* Filtro por projeto */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
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
              {AVAILABLE_PROJECTS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <Button
              variant="action"
              onClick={() => setIsAdding(!isAdding)}
              style={{ fontSize: 13, padding: "6px 12px" }}
            >
              {isAdding ? "✕ Cancelar" : "＋ Novo Lembrete"}
            </Button>
          </div>
        </div>

        {/* Formulário de novo post-it */}
        {isAdding && (
          <form
            onSubmit={handleAddNote}
            style={{
              background: "#fff8e8",
              border: "2px solid var(--line)",
              borderRadius: 6,
              padding: "16px",
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12 }}>
              <input
                type="text"
                placeholder="Título do lembrete..."
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
                {AVAILABLE_PROJECTS.map((p) => (
                  <option key={p} value={p}>
                    Vincular a: {p}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              placeholder="O que precisa ser lembrado ou estudado neste projeto?"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              required
              rows={3}
              style={{
                background: "white",
                border: "2px solid var(--line)",
                borderRadius: 4,
                padding: "8px 12px",
                fontSize: 14,
                resize: "vertical",
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: "bold" }}>Cor da Ficha:</span>
                {(["gold", "teal", "orange", "cream"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setNewColor(c)}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: `var(--${c})`,
                      border: newColor === c ? "3px solid var(--line)" : "1px solid var(--line)",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
              <Button type="submit" style={{ padding: "6px 14px", fontSize: 13 }}>
                Salvar Ficha 📌
              </Button>
            </div>
          </form>
        )}

        {/* Grid de Post-its */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {filteredNotes.map((note) => {
            const conf = colorStyles[note.color] || colorStyles.gold;
            return (
              <div
                key={note.id}
                style={{
                  background: conf.bg,
                  border: `2px solid var(--line)`,
                  borderRadius: 6,
                  overflow: "hidden",
                  boxShadow: "3px 3px 0 var(--line)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.15s ease",
                }}
              >
                {/* Header do Post-it */}
                <div
                  style={{
                    background: conf.headerBg,
                    color: conf.text,
                    padding: "8px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "2px solid var(--line)",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    📌 {note.title}
                  </span>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    title="Excluir lembrete"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "inherit",
                      fontSize: 16,
                      fontWeight: "bold",
                      cursor: "pointer",
                      padding: "0 4px",
                      opacity: 0.8,
                    }}
                  >
                    ×
                  </button>
                </div>

                {/* Badge do Projeto Vinculado */}
                <div style={{ padding: "8px 12px 0" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--teal2)",
                      background: "var(--cream)",
                      padding: "2px 6px",
                      borderRadius: 4,
                      border: "1px solid var(--line)",
                      display: "inline-block",
                    }}
                  >
                    {note.project}
                  </span>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: "10px 12px", flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: "normal", color: "#3d362b", lineHeight: 1.6 }}>
                    {note.content}
                  </p>
                </div>

                {/* Rodapé da data */}
                <div
                  style={{
                    padding: "6px 12px",
                    fontSize: 11,
                    fontStyle: "italic",
                    opacity: 0.65,
                    borderTop: "1px dashed rgba(0,0,0,0.15)",
                    textAlign: "right",
                  }}
                >
                  {note.date}
                </div>
              </div>
            );
          })}
        </div>
      </Panel>
    </div>
  );
}
