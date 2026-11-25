"use client";

import { useEffect, useState } from "react";

interface WelcomeHeaderProps {
  title: string;
  quote?: string;
}

export default function WelcomeHeader({ title, quote }: WelcomeHeaderProps) {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setDateStr(
      new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        marginBottom: 25,
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 62,
            margin: 0,
            lineHeight: 1,
          }}
        >
          {title}
        </h1>
        {dateStr && (
          <div
            style={{
              fontSize: 17,
              marginTop: 10,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {dateStr}
          </div>
        )}
      </div>
      {quote && (
        <blockquote
          style={{
            borderLeft: "3px solid var(--line)",
            padding: "12px 20px",
            font: "italic bold 20px Georgia, serif",
            maxWidth: 340,
            margin: 0,
          }}
        >
          {quote}{" "}
          <span style={{ color: "var(--orange)", fontSize: 36 }}>✳</span>
        </blockquote>
      )}
    </div>
  );
}
