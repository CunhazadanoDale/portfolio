import Panel from "@/components/ui/Panel";
import PanelHead from "@/components/ui/PanelHead";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <Panel>
      <PanelHead
        title="▮ Projetos em andamento"
        action={
          <Link href="/projects">
            <Button variant="action">Ver todos →</Button>
          </Link>
        }
      />
      {featured.map((project) => (
        <ProjectCard key={project.id} project={project} compact />
      ))}
    </Panel>
  );
}
