namespace Models {
  interface Resource {
    title: string;
    _id: string;
    rating: number;
    image: string;
    slug: string;
    category: string;
    releaseyear: string;
    description: string;
  }
}
