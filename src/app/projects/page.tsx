import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <AppShell>
      <WelcomeHeader title="Projetos" />
      <p
        style={{
          fontStyle: "italic",
          fontSize: 16,
          marginBottom: 20,
          opacity: 0.8,
          fontWeight: "normal",
        }}
      >
        Seu trabalho, no seu ritmo. Pequenos passos também são progresso.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: 20,
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AppShell>
  );
}
