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
    name: "Portfolio Pessoal",
    description: "Este mesmo portfolio — feito com Next.js e estilo papelaria.",
    tags: ["Next.js", "TypeScript", "CSS"],
    github: "https://github.com/CunhazadanoDale",
    color: "teal",
    status: "in-progress",
    progress: 60,
  },
  {
    id: "2",
    name: "Projeto 2",
    description: "Em breve...",
    tags: [],
    color: "orange",
    status: "in-progress",
    progress: 20,
  },
  {
    id: "3",
    name: "Projeto 3",
    description: "Em breve...",
    tags: [],
    color: "gold",
    status: "in-progress",
    progress: 10,
  },
];
