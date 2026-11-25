import Link from "next/link";
import AppShell from "@/components/layout/AppShell";

export default function NotFound() {
  return (
    <AppShell>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          gap: 20,
        }}
      >
        <div style={{ fontSize: 80 }}>☼</div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 56,
            margin: 0,
          }}
        >
          404
        </h1>
        <p style={{ fontSize: 20, fontStyle: "italic" }}>
          Essa página se perdeu no arquivo...
        </p>
        <Link
          href="/"
          style={{
            background: "var(--teal)",
            color: "white",
            border: "2px solid var(--line)",
            borderRadius: 5,
            padding: "10px 20px",
            boxShadow: "2px 2px 0 var(--line)",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Voltar ao início ⌂
        </Link>
      </div>
    </AppShell>
  );
}
