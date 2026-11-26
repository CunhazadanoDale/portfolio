import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import NotesBoard from "@/components/notes/NotesBoard";

export default function NotesPage() {
  return (
    <AppShell>
      <WelcomeHeader
        title="Notas"
        quote="Um cantinho para ideias, rascunhos livres e lembretes dos meus projetos."
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <NotesBoard />
      </div>
    </AppShell>
  );
}
