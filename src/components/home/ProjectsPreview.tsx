import Panel from "@/components/ui/Panel";
import PanelHead from "@/components/ui/PanelHead";
import Tag from "@/components/ui/Tag";
import { GITHUB_FEATURED_PROJECTS } from "@/lib/data";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ProjectsPreview() {
  // Pega os 3 projetos mais estrelados
  const featured = [...GITHUB_FEATURED_PROJECTS]
    .sort((a, b) => (b.stars || 0) - (a.stars || 0))
    .slice(0, 3);

  return (
    <Panel>
      <PanelHead
        title="★ Projetos em destaque"
        action={
          <Link href="/projects">
            <Button variant="action">Ver todos →</Button>
          </Link>
        }
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {featured.map((project) => (
          <div
            key={project.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              padding: "10px 0",
              borderBottom: "1px solid #e5d8be",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "var(--teal)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--ink)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {project.name}
              </span>
              {project.language && (
                <Tag label={project.language} variant="teal" />
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {(project.stars || 0) > 0 && (
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--ink)",
                    background: "var(--gold)",
                    padding: "2px 8px",
                    borderRadius: 12,
                    border: "1px solid var(--line)",
                  }}
                >
                  ★ {project.stars}
                </span>
              )}
              {project.github && (
                <a
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
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
