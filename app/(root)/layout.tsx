// AQUI É O LAYOUT QUE ENVOLVE TUDO DENTRO DE (root). É ONDE TERÁ A GRANDE MAIORIA DAS ROTAS DO SISTEMA
// UNICA COISA QUE VAI MUDAR É O CHILDREN, QUE SÃO CADA page.tsx DENTRO DE CADA PASTA (exemplo)
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
