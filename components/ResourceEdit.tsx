import { useDocument } from "@/hooks/firebase/useDocument";
import React from "react";

interface Props {
  id_resource: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  rating: number;
  releaseYear: number;
}

const ResourceEdit = ({ id_resource }: Props) => {
  const [resource, { remove, set, update }] = useDocument<Resource>(
    `resources/${id_resource}`
  );

  const handleDelete = async (id: string) => {
    await remove();
  };

  const handleUpdate = async () => {
    await update({
      ...resource,
      title: "Updated Title",
    });
  };

  return (
    <>
      {/* button to set */}
      {resource && (
        <div>
          <h2>{resource.title}</h2>
          <p>{resource.description}</p>
          <p>Rating: {resource.rating}</p>
          <p>Release Year: {resource.releaseYear}</p>
          <button onClick={() => handleDelete(resource.id)}>Delete</button>
          <hr />
        </div>
      )}
    </>
  );
};

export default ResourceEdit;
