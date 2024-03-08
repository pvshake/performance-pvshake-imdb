import { groq } from "next-sanity"; // groq é uma linguagem intuitiva e fácil de queries para o Sanity
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          rating,
          "image": poster.asset->url,
          category,
          releaseYear,
          description
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        rating,
        "image": poster.asset->url,
        slug,
        category,
        releaseYear,
        description
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};
