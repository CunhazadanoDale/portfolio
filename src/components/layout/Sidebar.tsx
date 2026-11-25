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
        <div className="brand-logo">☼</div>
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
