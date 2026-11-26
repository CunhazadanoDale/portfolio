import { Project } from "./types";

/**
 * Dados reais dos repositórios do Gabriel Cunha Ramos (@CunhazadanoDale).
 * Servem tanto como lista direta quanto como fallback de alta disponibilidade
 * caso a API do GitHub atinja o limite de requisições por IP sem token.
 */
export const GITHUB_FEATURED_PROJECTS: Project[] = [
  {
    id: "1",
    name: "projetoBlocCondoApp",
    description: "Projeto idealizado para atender condomínios por todo o Brasil com arquitetura moderna, gestão de blocos, unidades e administração.",
    tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    github: "https://github.com/CunhazadanoDale/projetoBlocCondoApp",
    language: "Java",
    stars: 2,
    forks: 0,
    color: "teal",
  },
  {
    id: "2",
    name: "cbpitu-backend",
    description: "Desenvolvimento de uma aplicação REST focada em Java com modelo arquitetural MVC para gerenciamento e comunicação de grupos.",
    tags: ["Java", "MVC", "REST API", "Backend"],
    github: "https://github.com/CunhazadanoDale/cbpitu-backend",
    language: "Java",
    stars: 1,
    forks: 0,
    color: "gold",
  },
  {
    id: "3",
    name: "ComunicacaoInternaAthena",
    description: "Sistema para comunicações internas dentro de corporações ou instituições. Foco em mensagens, avisos e integração entre membros.",
    tags: ["Java", "Spring", "Comunicação Interna"],
    github: "https://github.com/CunhazadanoDale/ComunicacaoInternaAthena",
    language: "Java",
    stars: 1,
    forks: 0,
    color: "teal",
  },
  {
    id: "4",
    name: "ecommerceProjectIndiano",
    description: "Plataforma completa de loja virtual desenvolvendo o conceito integrado de FRONT-BACK utilizando ecossistema Spring, React e Docker.",
    tags: ["Java", "Spring Boot", "React", "Docker", "Full Stack"],
    github: "https://github.com/CunhazadanoDale/ecommerceProjectIndiano",
    language: "Java",
    stars: 1,
    forks: 0,
    color: "orange",
  },
  {
    id: "5",
    name: "rocketZada",
    description: "Jogo desenvolvido com Unity utilizando C#. Experimentação com mecânicas de física, movimentação de foguete e lógica de jogos 2D/3D.",
    tags: ["C#", "Unity", "Game Dev", "Física 2D/3D"],
    github: "https://github.com/CunhazadanoDale/rocketZada",
    language: "C#",
    stars: 1,
    forks: 0,
    color: "orange",
  },
  {
    id: "6",
    name: "gotextforge",
    description: "IDE desenvolvida em Go (Golang) feita com conceitos nativos da linguagem. Executa localmente no terminal e no desktop.",
    tags: ["Go", "Golang", "CLI", "IDE", "Desktop"],
    github: "https://github.com/CunhazadanoDale/gotextforge",
    language: "Go",
    stars: 0,
    forks: 0,
    color: "teal",
  },
  {
    id: "7",
    name: "TaskFlowAPI",
    description: "API de alta performance desenvolvida em Go para gerenciamento de tarefas e produtividade.",
    tags: ["Go", "Golang", "REST API", "Clean Arch"],
    github: "https://github.com/CunhazadanoDale/TaskFlowAPI",
    language: "Go",
    stars: 0,
    forks: 0,
    color: "gold",
  },
  {
    id: "8",
    name: "projetoEdmilson",
    description: "Landing page personalizada desenvolvida para serviço de consultoria financeira, com layout responsivo e alta conversão.",
    tags: ["TypeScript", "React", "Next.js", "Vercel"],
    github: "https://github.com/CunhazadanoDale/projetoEdmilson",
    url: "https://projeto-edmilson.vercel.app",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    color: "orange",
  },
];

export const NAV_ITEMS = [
  { label: "Início", icon: "⌂", href: "/" },
  { label: "Projetos", icon: "▰", href: "/projects" },
  { label: "Pipeline & Notas", icon: "▤", href: "/notes" },
  { label: "Sobre", icon: "☺", href: "/about" },
  { label: "Contato", icon: "✉", href: "/contact" },
];

export const PROJECTS: Project[] = GITHUB_FEATURED_PROJECTS;
