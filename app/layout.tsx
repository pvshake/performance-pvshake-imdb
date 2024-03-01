// ESTE É O LAYOUT PRIMÁRIO DO SISTEMA. AQUI QUE DEFINE-SE METADATA, FONTES, ESTILOS GLOBAIS, ETC.

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Performance Pvshake IMDB",
  description: "Performance Pvshake IMDB",
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
