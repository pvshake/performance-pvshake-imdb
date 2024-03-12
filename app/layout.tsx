// ESTE É O LAYOUT PRIMÁRIO DO SISTEMA. AQUI QUE DEFINE-SE METADATA, FONTES, ESTILOS GLOBAIS, ETC.

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Performance Pvshake IMDB",
  description: "Performance Pvshake IMDB",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "/homepage-thumbnail.png",
    "twitter:card": "summary_large_image",
    "og:url": "performance-imdb",
    "og:image": "/homepage-thumbnail.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
