interface TagProps {
  label: string;
  variant?: "teal" | "gold" | "orange";
}

const variantStyles: Record<string, React.CSSProperties> = {
  teal: { background: "var(--teal)", color: "white" },
  gold: { background: "var(--gold)", color: "var(--ink)" },
  orange: { background: "var(--orange)", color: "white" },
};

export default function Tag({ label, variant = "teal" }: TagProps) {
  return (
    <span
      style={{
        padding: "5px 10px",
        borderRadius: 20,
        fontSize: 12,
        whiteSpace: "nowrap",
        fontWeight: 600,
        ...variantStyles[variant],
      }}
    >
      {label}
    </span>
  );
}
