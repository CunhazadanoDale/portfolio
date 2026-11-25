import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import NotesBoard from "@/components/notes/NotesBoard";

export default function NotesPage() {
  return (
    <AppShell>
      <WelcomeHeader
        title="Notas"
        quote="Grandes ideias e códigos nascem de pequenos rascunhos."
      />

      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <NotesBoard />
      </div>
    </AppShell>
  );
}
