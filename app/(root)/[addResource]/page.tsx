"use client";

import React, { useState } from "react";
import useCollection from "@/hooks/firebase/useCollection";
import ResourceEdit from "@/components/ResourceEdit";

interface Resource {
  id: string;
  title: string;
  description: string;
  rating: number;
  releaseYear: number;
}

const Page = () => {
  const [resource, setResource] = useState<Partial<Resource>>({
    title: "",
    description: "",
    rating: 0,
    releaseYear: 0,
  });
  const [yearFilter, setYearFilter] = useState("");

  const [resources, { add, remove }] = useCollection<Resource>(
    "resources",
    "releaseYear",
    yearFilter
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value }); // Update specific property
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add(resource as Resource);
  };

  const handleDelete = async (id: string) => {
    await remove(id);
  };

  return (
    <div className="mt-32">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h2>Create New Resource</h2> {/* Clearer heading */}
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={resource.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={resource.description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Rating (0-5)"
          name="rating"
          min={0}
          max={5}
          value={resource.rating}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Release Year"
          name="releaseYear"
          value={resource.releaseYear}
          onChange={handleChange}
          min={1900} // Optional: Set a minimum year
        />
        <button type="submit">Save</button>
      </form>

      <select onChange={(e) => setYearFilter(e.target.value)}>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
      </select>
      {resources &&
        resources.map((resource) => (
          <ResourceEdit key={resource.id} id_resource={resource.id} />
        ))}
    </div>
  );
};

export default Page;
