"use client";

import { useState, useEffect, useMemo } from "react";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";

interface DayActivity {
  date: string; // YYYY-MM-DD
  count: number;
  label: string;
}

const LEVEL_COLORS = [
  "#eddcb5", // Nível 0 (vazio)
  "#8bbdb9", // Nível 1
  "#589793", // Nível 2
  "#356c69", // Nível 3
  "#1c4b48", // Nível 4 (máximo)
];

export default function ActivityHeatmap() {
  const [activities, setActivities] = useState<Record<string, number>>({});
  const [hoveredDay, setHoveredDay] = useState<DayActivity | null>(null);
  const [checkedToday, setCheckedToday] = useState(false);

  // Formato YYYY-MM-DD
  const todayStr = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, []);

  // Gera dados simulados realistas dos últimos 112 dias (16 semanas)
  const daysList = useMemo(() => {
    const list: DayActivity[] = [];
    const base = new Date();

    // 16 semanas = 112 dias
    const TOTAL_DAYS = 112;

    for (let i = TOTAL_DAYS - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(base.getDate() - i);
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

      // Padrão pseudo-realista com base no dia da semana
      const dayOfWeek = d.getDay();
      const seed = (d.getDate() * 7 + d.getMonth() * 13) % 10;
      let initialCount = 0;

      if (seed > 3) {
        initialCount = dayOfWeek === 0 || dayOfWeek === 6 ? (seed % 4) + 1 : (seed % 5) + 1;
      }

      list.push({
        date: iso,
        count: initialCount,
        label: d.toLocaleDateString("pt-BR", { day: "numeric", month: "short" }),
      });
    }

    return list;
  }, []);

  // Carrega e hidrata check-ins salvos do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-activity-checkins");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setActivities(parsed);
        if (parsed[todayStr]) setCheckedToday(true);
      } catch {}
    }
  }, [todayStr]);

  const handleCheckIn = () => {
    const current = activities[todayStr] || 0;
    const nextCount = current + 1;
    const updated = { ...activities, [todayStr]: nextCount };
    setActivities(updated);
    setCheckedToday(true);
    localStorage.setItem("portfolio-activity-checkins", JSON.stringify(updated));
  };

  const getLevel = (count: number) => {
    if (count <= 0) return 0;
    if (count === 1) return 1;
    if (count === 2) return 2;
    if (count === 3) return 3;
    return 4;
  };

  // Calcula estatísticas
  const totalCount = useMemo(() => {
    let sum = 0;
    daysList.forEach((d) => {
      const extra = activities[d.date] || 0;
      sum += d.count + extra;
    });
    return sum;
  }, [daysList, activities]);

  return (
    <Panel style={{ boxShadow: "4px 4px 0 var(--line)" }}>
      {/* Cabeçalho com Título e Ação de Check-in */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, margin: 0 }}>
              Atividade Diária & Check-in
            </h2>
            <span
              style={{
                fontSize: 12,
                background: "var(--teal)",
                color: "white",
                padding: "2px 8px",
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              {totalCount} atividades
            </span>
          </div>
          <p style={{ margin: "4px 0 0", fontSize: 13, opacity: 0.8, fontWeight: "normal" }}>
            Registro de consistência em código, estudos e entregas nos últimos 4 meses.
          </p>
        </div>

        <Button
          variant="action"
          onClick={handleCheckIn}
          style={{
            fontSize: 13,
            padding: "6px 12px",
            background: checkedToday ? "var(--teal2)" : "var(--orange)",
          }}
        >
          {checkedToday ? "✓ Check-in de hoje feito!" : "＋ Fazer Check-in de Hoje"}
        </Button>
      </div>

      {/* Grid de Contribuição Retrô (Estilo GitHub) */}
      <div style={{ overflowX: "auto", paddingBottom: 6 }}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(7, 12px)",
            gridAutoFlow: "column",
            gridAutoColumns: "12px",
            gap: 4,
            width: "max-content",
            margin: "0 auto",
          }}
        >
          {daysList.map((day) => {
            const added = activities[day.date] || 0;
            const currentCount = day.count + added;
            const level = getLevel(currentCount);
            const isToday = day.date === todayStr;

            return (
              <div
                key={day.date}
                onMouseEnter={() => setHoveredDay({ ...day, count: currentCount })}
                onMouseLeave={() => setHoveredDay(null)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: LEVEL_COLORS[level],
                  border: isToday ? "1px solid var(--orange)" : "1px solid rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.1s ease",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Rodapé do Heatmap: Tooltip dinâmico + Legenda */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 10,
          borderTop: "1px dashed var(--muted)",
          paddingTop: 8,
          fontSize: 12,
        }}
      >
        {/* Info do dia sob hover */}
        <div style={{ fontStyle: "italic", color: "var(--ink)" }}>
          {hoveredDay ? (
            <span>
              <strong>{hoveredDay.label}</strong>: {hoveredDay.count}{" "}
              {hoveredDay.count === 1 ? "atividade registrada" : "atividades registradas"}
            </span>
          ) : (
            <span style={{ opacity: 0.75 }}>Passe o mouse sobre os blocos para ver detalhes</span>
          )}
        </div>

        {/* Legenda Menos -> Mais */}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ opacity: 0.75 }}>Menos</span>
          {LEVEL_COLORS.map((col, idx) => (
            <span
              key={idx}
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: col,
                border: "1px solid rgba(0,0,0,0.1)",
                display: "inline-block",
              }}
            />
          ))}
          <span style={{ opacity: 0.75 }}>Mais</span>
        </div>
      </div>
    </Panel>
  );
}
