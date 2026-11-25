import Topbar from "@/components/layout/Topbar";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-window">
      <Topbar />
      <div className="portfolio-layout">
        <Sidebar />
        <main className="portfolio-main">{children}</main>
      </div>
      <footer className="portfolio-footer">
        <BarDecoration />
        <span style={{ textAlign: "center" }}>Faça com calma, mas faça.</span>
        <BarDecoration />
      </footer>
    </div>
  );
}

function BarDecoration() {
  return (
    <div
      className="bar-decoration"
      style={{
        height: 28,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {["var(--orange)", "var(--gold)", "var(--teal)"].map((color, i) => (
        <i
          key={i}
          style={{
            height: 6,
            borderRadius: 2,
            background: color,
            display: "block",
          }}
        />
      ))}
    </div>
  );
}
