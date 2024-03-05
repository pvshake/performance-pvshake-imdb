import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

export const revalidate = 900; // 15 minutes

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: "",
    category: searchParams?.category || "",
    page: "1",
  });

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="felx-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center ">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            IMDB do Pvshake
          </h1>
          {/* SEMPRE TER APENAS UM H1 NA TELA E TAGS SEMANTICAS PARA MELHORAR O SEO */}
        </div>
        <SearchForm />
      </section>

      <Filters />

      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources && resources.length > 0 ? (
            resources.map((resource: Models.Resource) => (
              <ResourceCard
                key={resource._id}
                id={resource._id}
                title={resource.title}
                rating={resource.rating}
                image={resource.image}
                category={resource.category}
                releaseyear={resource.releaseyear}
                description={resource.description}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">
              Nenhum resultado encontrado
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
