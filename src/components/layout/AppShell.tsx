import Topbar from "@/components/layout/Topbar";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1500,
        margin: "20px auto",
        background: "var(--cream)",
        border: "4px solid var(--line)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "7px 7px 0 #8f8064",
        minHeight: "calc(100vh - 40px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Topbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "245px minmax(0, 1fr)",
          flex: 1,
        }}
      >
        <Sidebar />
        <main style={{ padding: 30, minWidth: 0 }}>{children}</main>
      </div>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: "15px 22px",
          borderTop: "3px solid var(--line)",
          font: "italic bold 20px Georgia, serif",
        }}
      >
        <BarDecoration />
        <span>Faça com calma, mas faça.</span>
        <BarDecoration />
      </footer>
    </div>
  );
}

function BarDecoration() {
  return (
    <div
      style={{
        height: 34,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {["var(--orange)", "var(--gold)", "var(--teal)"].map((color, i) => (
        <i
          key={i}
          style={{
            height: 8,
            borderRadius: 2,
            background: color,
            display: "block",
          }}
        />
      ))}
    </div>
  );
}
