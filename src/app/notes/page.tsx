import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Pipeboard from "@/components/pipeline/Pipeboard";
import NotesBoard from "@/components/notes/NotesBoard";

export default function NotesPage() {
  return (
    <AppShell>
      <WelcomeHeader
        title="Pipeline & Notas"
        quote="O que estou construindo e pensando no dia a dia, além dos commits do GitHub."
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
        {/* 1. Pipeboard Kanban de Projetos */}
        <Pipeboard />

        {/* 2. Caderno de Anotações & Fichas de Estudo */}
        <NotesBoard />
      </div>
    </AppShell>
  );
}
