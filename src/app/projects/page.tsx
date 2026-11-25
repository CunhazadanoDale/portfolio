import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import ProjectsFeed from "@/components/projects/ProjectsFeed";
import { fetchGitHubProjects } from "@/lib/github";

export default async function ProjectsPage() {
  // Carregamento automático direto da API do GitHub (sem clique em botão)
  // 1. Filtrado para projetos com estrelas, ordenado por mais estrelas decrescente
  const starredProjects = await fetchGitHubProjects(true);
  // 2. Lista completa de repositórios ordenada por estrelas
  const allProjects = await fetchGitHubProjects(false);

  return (
    <AppShell>
      <WelcomeHeader
        title="Projetos"
        quote="Seus projetos individuais em destaque, do mais estrelado ao mais recente."
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <ProjectsFeed
          initialStarredProjects={starredProjects}
          allProjects={allProjects}
        />
      </div>
    </AppShell>
  );
}
