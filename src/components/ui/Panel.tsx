import React from "react";

interface PanelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function Panel({ children, style, className }: PanelProps) {
  return (
    <section
      className={className}
      style={{
        background: "var(--paper)",
        border: "3px solid var(--line)",
        borderRadius: 8,
        padding: "20px 22px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}
