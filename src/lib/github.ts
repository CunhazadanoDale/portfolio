import { Project } from "./types";
import { GITHUB_FEATURED_PROJECTS } from "./data";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

/**
 * Busca repositórios públicos diretamente da API do GitHub.
 * Por padrão, filtra APENAS repositórios com estrelas (> 0) e ordena do maior para o menor.
 */
export async function fetchGitHubProjects(onlyWithStars: boolean = true): Promise<Project[]> {
  try {
    const res = await fetch("https://api.github.com/users/CunhazadanoDale/repos?per_page=100", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      // Revalidação em segundo plano a cada 1 hora no Next.js
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`GitHub API indisponível (status ${res.status}). Usando repositórios locais.`);
      return filterAndSortProjects(GITHUB_FEATURED_PROJECTS, onlyWithStars);
    }

    const repos: GitHubRepo[] = await res.json();
    if (!Array.isArray(repos)) {
      return filterAndSortProjects(GITHUB_FEATURED_PROJECTS, onlyWithStars);
    }

    const colors: Array<"teal" | "orange" | "gold"> = ["teal", "gold", "orange"];

    const mapped: Project[] = repos.map((repo, idx) => ({
      id: String(repo.id),
      name: repo.name,
      description: repo.description || "Projeto desenvolvido por Gabriel Cunha Ramos.",
      tags: [repo.language, ...(repo.topics || [])].filter(Boolean) as string[],
      github: repo.html_url,
      url: repo.homepage || undefined,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || undefined,
      color: colors[idx % 3],
    }));

    return filterAndSortProjects(mapped, onlyWithStars);
  } catch (err) {
    console.warn("Erro ao conectar à API do GitHub:", err);
    return filterAndSortProjects(GITHUB_FEATURED_PROJECTS, onlyWithStars);
  }
}

function filterAndSortProjects(projects: Project[], onlyWithStars: boolean): Project[] {
  let list = [...projects];

  if (onlyWithStars) {
    list = list.filter((p) => (p.stars || 0) > 0);
  }

  // Ordena por estrelas: do mais estrelas para menos estrelas
  list.sort((a, b) => (b.stars || 0) - (a.stars || 0));

  return list;
}
