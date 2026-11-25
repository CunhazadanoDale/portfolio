"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="portfolio-sidebar">
      {/* Brand block */}
      <div className="brand-block">
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            border: "3px solid var(--line)",
            boxShadow: "3px 3px 0 var(--line)",
            overflow: "hidden",
            margin: "0 auto 10px",
            background: "var(--cream)",
          }}
        >
          <img
            src="/images/foto.jpg"
            alt="Gabriel Cunha Ramos"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <h2 className="brand-name">Gabriel Cunha Ramos</h2>
        <p className="brand-sub">Desenvolvedor Front-end</p>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <span style={{ fontSize: 20, width: 24, textAlign: "center" }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Stripe decorativa */}
      <div className="sidebar-stripe" />
    </aside>
  );
}
