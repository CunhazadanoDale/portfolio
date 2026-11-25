import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gabriel-cunha-ramos.vercel.app"),
  title: "Gabriel Cunha Ramos — Desenvolvedor Front-end",
  description: "Portfolio de Gabriel Cunha Ramos — Desenvolvedor Front-end especializado em React, Next.js e TypeScript com design retrô de papelaria.",
  keywords: ["Gabriel Cunha Ramos", "Front-end", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Gabriel Cunha Ramos", url: "https://github.com/CunhazadanoDale" }],
  openGraph: {
    title: "Gabriel Cunha Ramos — Desenvolvedor Front-end",
    description: "Portfolio de Gabriel Cunha Ramos com projetos, estudos e experiências interativas em Next.js.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/foto.jpg",
        width: 800,
        height: 800,
        alt: "Gabriel Cunha Ramos — Desenvolvedor Front-end",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Cunha Ramos — Desenvolvedor Front-end",
    description: "Portfolio de Gabriel Cunha Ramos com projetos, estudos e experiências interativas em Next.js.",
    images: ["/images/foto.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
