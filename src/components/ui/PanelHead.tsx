interface PanelHeadProps {
  title: string;
  action?: React.ReactNode;
}

export default function PanelHead({ title, action }: PanelHeadProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 16,
      }}
    >
      <h2 style={{ fontSize: 24, margin: 0 }}>{title}</h2>
      {action && <div>{action}</div>}
    </div>
  );
}
