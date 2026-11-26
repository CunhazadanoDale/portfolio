import { Suspense } from "react";
import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Pipeboard from "@/components/pipeline/Pipeboard";

export default function PipelinePage() {
  return (
    <AppShell>
      <WelcomeHeader
        title="Pipeline"
        quote="Acompanhe o fluxo de desenvolvimento ativo, ideias e entregas dos meus projetos."
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Suspense
          fallback={
            <div
              style={{
                background: "var(--paper)",
                border: "3px solid var(--line)",
                borderRadius: 8,
                padding: "40px",
                textAlign: "center",
                fontFamily: "Georgia, serif",
                fontSize: 18,
              }}
            >
              Carregando quadro de pipeline... ▤
            </div>
          }
        >
          <Pipeboard />
        </Suspense>
      </div>
    </AppShell>
  );
}
