// Tipagens globais do portfolio

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  image?: string;
  video?: string;
  stars?: number;
  forks?: number;
  language?: string;
  color?: "teal" | "orange" | "gold";
}

export interface NavItem {
  label: string;
  icon: string;
  href: string;
}
