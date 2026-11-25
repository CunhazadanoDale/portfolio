// Tipagens globais do portfolio

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  image?: string;
  color: "teal" | "orange" | "gold";
  status: "in-progress" | "done" | "archived";
  progress: number; // 0–100
}

export interface NavItem {
  label: string;
  icon: string;
  href: string;
}
