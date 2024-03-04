"use client"; // tem eventos de clique e ações diretas do usuário, então é melhor ser client side
import React, { useState } from "react";

const Filters = () => {
  const links = ["todos", "filmes", "séries", "animes", "documentários"];

  const [activeFilter, setActiveFilter] = useState("");

  const handleFilter = (link: string) => {
    setActiveFilter(link);
  };

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            activeFilter === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
