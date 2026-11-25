interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "action";
  children: React.ReactNode;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: "var(--teal)",
    color: "white",
    border: "2px solid var(--line)",
    borderRadius: 5,
    padding: "9px 16px",
    boxShadow: "2px 2px 0 var(--line)",
  },
  ghost: {
    background: "transparent",
    color: "inherit",
    border: "none",
  },
  action: {
    background: "var(--orange)",
    color: "white",
    border: "2px solid var(--line)",
    borderRadius: 5,
    padding: "8px 14px",
    boxShadow: "2px 2px 0 var(--line)",
    fontSize: 14,
  },
};

export default function Button({
  variant = "primary",
  children,
  style,
  ...rest
}: ButtonProps) {
  return (
    <button style={{ ...variantStyles[variant], ...style }} {...rest}>
      {children}
    </button>
  );
}
