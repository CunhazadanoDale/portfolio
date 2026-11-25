// Serviço de integração com a API pública do GitHub

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
 * Busca repositórios públicos de um usuário do GitHub.
 * A API do GitHub é pública e não exige token para consultas básicas (até 60 req/hora).
 */
export async function getGitHubRepos(username: string = "CunhazadanoDale"): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=15`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      // Revalida a cada 1 hora se usado no servidor Next.js
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`GitHub API retornou status ${res.status}`);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Erro ao buscar repositórios do GitHub:", err);
    return [];
  }
}
