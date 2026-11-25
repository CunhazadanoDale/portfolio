"use client";

import { useState, useMemo } from "react";
import Panel from "@/components/ui/Panel";
import PanelHead from "@/components/ui/PanelHead";
import Button from "@/components/ui/Button";

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function Calendar() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  const [month, setMonth] = useState(() => new Date().getMonth());
  const [selected, setSelected] = useState(() => new Date().getDate());

  const { firstDay, daysInMonth } = useMemo(() => {
    return {
      firstDay: new Date(year, month, 1).getDay(),
      daysInMonth: new Date(year, month + 1, 0).getDate(),
    };
  }, [year, month]);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
    setSelected(1);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
    setSelected(1);
  };

  return (
    <Panel style={{ padding: 0, overflow: "hidden" }}>
      {/* Header do calendário */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 18px",
          background: "var(--teal)",
          color: "var(--cream)",
          fontFamily: "Georgia, serif",
          fontSize: 20,
        }}
      >
        <Button variant="ghost" onClick={prevMonth} style={{ color: "var(--cream)", fontSize: 24 }}>
          ‹
        </Button>
        <span>{MONTHS[month]} {year}</span>
        <Button variant="ghost" onClick={nextMonth} style={{ color: "var(--cream)", fontSize: 24 }}>
          ›
        </Button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 4,
          padding: 14,
        }}
      >
        {WEEKDAYS.map((d, i) => (
          <span
            key={i}
            style={{
              display: "grid",
              placeItems: "center",
              minHeight: 36,
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {d}
          </span>
        ))}
        {/* Empty cells */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={`e-${i}`} style={{ minHeight: 36 }} />
        ))}
        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected = day === selected;
          return (
            <span
              key={day}
              onClick={() => setSelected(day)}
              style={{
                display: "grid",
                placeItems: "center",
                minHeight: 36,
                borderRadius: "50%",
                cursor: "pointer",
                fontWeight: isSelected ? "bold" : "normal",
                background: isSelected ? "var(--orange)" : "transparent",
                color: isSelected ? "white" : "inherit",
                fontSize: 14,
              }}
            >
              {day}
            </span>
          );
        })}
      </div>
    </Panel>
  );
}
