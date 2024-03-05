"use client"; // tem eventos de clique e ações diretas do usuário, então é melhor ser client side
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Filters = () => {
  const links = ["todos", "filmes", "séries", "animes", "documentários"];

  const [activeFilter, setActiveFilter] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = "";

    if (activeFilter === link) {
      setActiveFilter("");
      formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: null,
      });
    } else {
      setActiveFilter(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLocaleLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
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
