interface ProgressBarProps {
  value: number; // 0–100
  color?: "teal" | "orange" | "gold";
  height?: number;
}

const colorMap: Record<string, string> = {
  teal: "var(--teal)",
  orange: "var(--orange)",
  gold: "var(--gold)",
};

export default function ProgressBar({
  value,
  color = "teal",
  height = 15,
}: ProgressBarProps) {
  return (
    <div
      style={{
        height,
        background: "#dfd0b2",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${Math.min(100, Math.max(0, value))}%`,
          background: colorMap[color],
          borderRadius: 20,
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );
}
