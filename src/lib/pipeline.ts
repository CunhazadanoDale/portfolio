export type PipelineStage = "backlog" | "in-progress" | "testing" | "done";

export interface PipelineItem {
  id: string;
  title: string;
  description: string;
  projectName: string;
  projectId?: string;
  githubUrl?: string;
  stage: PipelineStage;
  tags: string[];
  priority: "high" | "medium" | "low";
  updatedAt: string;
}

export const STAGE_CONFIG: Record<
  PipelineStage,
  { label: string; icon: string; color: string; border: string }
> = {
  backlog: {
    label: "Ideias & Backlog",
    icon: "💡",
    color: "#f5ebda",
    border: "var(--muted)",
  },
  "in-progress": {
    label: "Em Desenvolvimento",
    icon: "⚡",
    color: "#eef6f5",
    border: "var(--teal)",
  },
  testing: {
    label: "Testes & Refinamento",
    icon: "🧪",
    color: "#fef6eb",
    border: "var(--orange)",
  },
  done: {
    label: "Entregue & Concluído",
    icon: "🚀",
    color: "#fef9e8",
    border: "var(--gold)",
  },
};

export const INITIAL_PIPELINE_ITEMS: PipelineItem[] = [
  {
    id: "pipe-1",
    title: "Heatmap de Atividade & Pipeboard Integrado",
    description: "Criando o mapa de contribuição diário estilo GitHub com paleta retrô e quadro de tarefas conectado aos projetos.",
    projectName: "portfolio",
    projectId: "portfolio",
    githubUrl: "https://github.com/CunhazadanoDale/portfolio",
    stage: "in-progress",
    tags: ["Next.js", "TypeScript", "UI Retrô"],
    priority: "high",
    updatedAt: "Hoje",
  },
  {
    id: "pipe-2",
    title: "Gestão de Reservas e Validação de Moradores",
    description: "Modelagem das regras de agendamento de áreas comuns com Spring Boot e validação de conflito de horários.",
    projectName: "projetoBlocCondoApp",
    projectId: "1",
    githubUrl: "https://github.com/CunhazadanoDale/projetoBlocCondoApp",
    stage: "in-progress",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    priority: "high",
    updatedAt: "Ontem",
  },
  {
    id: "pipe-3",
    title: "Parser de Sintaxe e Comandos de Terminal",
    description: "Desenvolvendo o interpretador de comandos no terminal para a IDE em Go sem dependências pesadas externas.",
    projectName: "gotextforge",
    projectId: "6",
    githubUrl: "https://github.com/CunhazadanoDale/gotextforge",
    stage: "backlog",
    tags: ["Go", "CLI", "Compiladores"],
    priority: "medium",
    updatedAt: "Esta semana",
  },
  {
    id: "pipe-4",
    title: "Testes de Paginação e Middleware de Segurança",
    description: "Garantindo cobertura de testes unitários nos endpoints de paginação e validação de payloads da API.",
    projectName: "TaskFlowAPI",
    projectId: "7",
    githubUrl: "https://github.com/CunhazadanoDale/TaskFlowAPI",
    stage: "testing",
    tags: ["Go", "REST API", "Unit Tests"],
    priority: "medium",
    updatedAt: "2 dias atrás",
  },
  {
    id: "pipe-5",
    title: "Microsserviços de Pagamento com Docker",
    description: "Estruturação dos containers com Docker Compose e mensageria entre os serviços da loja virtual.",
    projectName: "ecommerceProjectIndiano",
    projectId: "4",
    githubUrl: "https://github.com/CunhazadanoDale/ecommerceProjectIndiano",
    stage: "backlog",
    tags: ["Docker", "Spring", "React"],
    priority: "low",
    updatedAt: "Planejado",
  },
  {
    id: "pipe-6",
    title: "Landing Page Financeira Otimizada",
    description: "Deploy na Vercel com pontuação máxima no Lighthouse e formulário de conversão de clientes.",
    projectName: "projetoEdmilson",
    projectId: "8",
    githubUrl: "https://github.com/CunhazadanoDale/projetoEdmilson",
    stage: "done",
    tags: ["Next.js", "Vercel", "SEO"],
    priority: "high",
    updatedAt: "Concluído",
  },
  {
    id: "pipe-7",
    title: "Design Tokens & Paleta de Papelaria Retrô",
    description: "Definição de variáveis CSS (--cream, --teal, --orange, --gold) e sistema de bordas sólidas offset.",
    projectName: "portfolio",
    projectId: "portfolio",
    githubUrl: "https://github.com/CunhazadanoDale/portfolio",
    stage: "done",
    tags: ["CSS", "Design System"],
    priority: "high",
    updatedAt: "Concluído",
  },
];
