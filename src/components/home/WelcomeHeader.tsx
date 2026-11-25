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
    <div className="welcome-container">
      <div>
        <h1 className="welcome-heading">{title}</h1>
        {dateStr && <div className="welcome-date">{dateStr}</div>}
      </div>
      {quote && (
        <blockquote className="welcome-quote">
          {quote} <span style={{ color: "var(--orange)", fontSize: 28 }}>✳</span>
        </blockquote>
      )}
    </div>
  );
}
