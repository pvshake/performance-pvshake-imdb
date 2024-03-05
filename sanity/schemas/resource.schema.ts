const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 0,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "releaseYear",
      title: "Release Year",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ["todos", "filmes", "series", "animes", "documentários"],
      },
    },
  ],
};

export default schema;
