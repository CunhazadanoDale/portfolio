import { Project, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", icon: "⌂", href: "/" },
  { label: "Projetos", icon: "▰", href: "/projects" },
  { label: "Sobre", icon: "✎", href: "/about" },
  { label: "Contato", icon: "✉", href: "/contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Portfolio Papelaria Retro",
    description: "Portfolio pessoal com design system retrô, arquitetura modular de componentes, Next.js 15 e layout responsivo adaptável.",
    tags: ["Next.js", "TypeScript", "CSS Modules", "Tailwind"],
    github: "https://github.com/CunhazadanoDale/portfolio",
    color: "teal",
    status: "in-progress",
    progress: 85,
  },
  {
    id: "2",
    name: "Estudo de Go & Microserviços",
    description: "Laboratório prático de desenvolvimento backend com Go (Golang), explorando goroutines, canais e APIs REST de alta performance.",
    tags: ["Go", "Docker", "REST API"],
    github: "https://github.com/CunhazadanoDale",
    color: "teal",
    status: "in-progress",
    progress: 75,
  },
  {
    id: "3",
    name: "Forkarsenet Core",
    description: "Sistema e utilitários de interface web focados em usabilidade e performance front-end com arquitetura reativa.",
    tags: ["React", "JavaScript", "UI Design"],
    github: "https://github.com/CunhazadanoDale",
    color: "orange",
    status: "in-progress",
    progress: 50,
  },
  {
    id: "4",
    name: "Leitura Técnica Semanal",
    description: "Resumos, anotações de arquitetura de software, padrões de design de código limpo e engenharia de software.",
    tags: ["Estudos", "Arquitetura", "Docs"],
    github: "https://github.com/CunhazadanoDale",
    color: "gold",
    status: "in-progress",
    progress: 40,
  },
  {
    id: "5",
    name: "Component Library Retro",
    description: "Biblioteca de componentes de interface inspirada em papelaria e design analógico clássico.",
    tags: ["Design System", "CSS", "Acessibilidade"],
    github: "https://github.com/CunhazadanoDale",
    color: "orange",
    status: "done",
    progress: 100,
  },
];
