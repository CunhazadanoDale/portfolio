import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import ProjectsList from "@/components/projects/ProjectsList";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <AppShell>
      <WelcomeHeader
        title="Projetos"
        quote="Seu trabalho, no seu ritmo. Pequenos passos também são progresso."
      />

      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <ProjectsList initialProjects={PROJECTS} />
      </div>
    </AppShell>
  );
}
