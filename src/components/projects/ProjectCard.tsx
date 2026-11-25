import Panel from "@/components/ui/Panel";
import PanelHead from "@/components/ui/PanelHead";
import ProgressBar from "@/components/ui/ProgressBar";
import Tag from "@/components/ui/Tag";
import { Project } from "@/lib/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const colorDot: Record<string, string> = {
  teal: "var(--teal)",
  orange: "var(--orange)",
  gold: "var(--gold)",
};

export default function ProjectCard({
  project,
  compact = false,
}: ProjectCardProps) {
  if (compact) {
    // Versão compacta para o dashboard com layout responsivo
    return (
      <div className="project-compact-row">
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: colorDot[project.color],
            display: "inline-block",
          }}
        />
        <span style={{ fontSize: 16, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {project.name}
        </span>
        <ProgressBar value={project.progress} color={project.color} height={12} />
        <span style={{ textAlign: "right", fontSize: 14, opacity: 0.9 }}>
          {project.progress}%
        </span>
      </div>
    );
  }

  // Versão completa para a página de projetos
  return (
    <Panel
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxShadow: "4px 4px 0 var(--line)",
      }}
    >
      <PanelHead
        title={project.name}
        action={
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: colorDot[project.color],
              display: "inline-block",
            }}
          />
        }
      />
      <p
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: "normal",
          color: "#5a5247",
          lineHeight: 1.5,
        }}
      >
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} variant={project.color} />
        ))}
      </div>
      <ProgressBar value={project.progress} color={project.color} />
      <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "var(--teal2)",
              textDecoration: "underline",
              fontWeight: 700,
            }}
          >
            GitHub →
          </Link>
        )}
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "var(--orange)",
              textDecoration: "underline",
              fontWeight: 700,
            }}
          >
            Demo →
          </Link>
        )}
      </div>
    </Panel>
  );
}
