"use client";

interface CvDownloadButtonProps {
  label?: string;
  variant?: "primary" | "stamp";
}

export default function CvDownloadButton({
  label = "Baixar Currículo (PDF)",
  variant = "stamp",
}: CvDownloadButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Tenta acessar o arquivo /cv.pdf
    // Se o usuário ainda não adicionou o arquivo em public/cv.pdf, informa amigavelmente
    fetch("/cv.pdf", { method: "HEAD" }).then((res) => {
      if (!res.ok) {
        alert("Dica: Adicione seu arquivo em formato PDF com o nome 'cv.pdf' dentro da pasta 'public/' do projeto!");
      }
    }).catch(() => {});
  };

  if (variant === "stamp") {
    return (
      <a
        href="/cv.pdf"
        download="Curriculo-Gabriel-Cunha-Ramos.pdf"
        onClick={handleClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--orange)",
          color: "white",
          border: "2px dashed var(--line)",
          borderRadius: 6,
          padding: "8px 16px",
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none",
          boxShadow: "2px 2px 0 var(--line)",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          transition: "transform 0.15s ease",
        }}
      >
        <span>📄</span>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href="/cv.pdf"
      download="Curriculo-Gabriel-Cunha-Ramos.pdf"
      onClick={handleClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "var(--teal)",
        color: "white",
        border: "2px solid var(--line)",
        borderRadius: 5,
        padding: "8px 14px",
        fontSize: 14,
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "2px 2px 0 var(--line)",
      }}
    >
      <span>📄</span>
      <span>{label}</span>
    </a>
  );
}
