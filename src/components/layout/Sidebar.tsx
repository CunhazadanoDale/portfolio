"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        background: "var(--teal)",
        color: "var(--cream)",
        borderRight: "3px solid var(--line)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      {/* Brand block */}
      <div
        style={{
          padding: "34px 20px 26px",
          textAlign: "center",
          borderBottom: "2px solid #264d4a",
        }}
      >
        <div style={{ fontSize: 76, lineHeight: 1 }}>☼</div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 28,
            margin: "10px 0 0",
          }}
        >
          Brad B.
        </h2>
        <p
          style={{
            fontSize: 13,
            margin: "6px 0 0",
            opacity: 0.75,
            fontWeight: "normal",
            fontStyle: "italic",
          }}
        >
          Desenvolvedor Front-end
        </p>
      </div>

      {/* Nav */}
      <nav style={{ padding: "14px 0", flex: 1 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 15,
                width: "100%",
                padding: "16px 24px",
                borderBottom: "1px solid #467875",
                background: isActive ? "var(--gold)" : "transparent",
                color: isActive ? "var(--ink)" : "inherit",
                fontSize: 18,
                textDecoration: "none",
                fontWeight: 600,
                transition: "background 0.15s",
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  width: 28,
                  textAlign: "center",
                }}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Stripe decorativa */}
      <div
        style={{
          height: 72,
          borderTop: "10px solid var(--orange)",
          borderBottom: "10px solid var(--gold)",
          background: "var(--teal2)",
        }}
      />
    </aside>
  );
}
