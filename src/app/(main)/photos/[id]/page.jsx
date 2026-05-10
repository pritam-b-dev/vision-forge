import React from "react";
import Image from "next/image";
import { Details } from "../../../../../lib/data";
const PhotoDetailsPages = async ({ params }) => {
  const { id } = await params;
  const viewDetailisPhoto = await Details(id);

  return (
    <div className="flex justify-around my-10 border border-amber-200 p-10 items-center">
      <div>
        <Image
          alt={viewDetailisPhoto.title}
          src={viewDetailisPhoto.imageUrl}
          width={500}
          height={500}
          className="w-2xl"
        ></Image>
      </div>
      <div>
        <p className="text-2xl font-bold">
          <span>Title: </span> <span>{viewDetailisPhoto.title}</span>
        </p>
        <p>
          <span>Prompt: </span>
          <span>{viewDetailisPhoto.prompt}</span>
        </p>
        <p>
          <span>Category: </span>
          <span>{viewDetailisPhoto.category}</span>
        </p>
        <p>
          <span>Model: </span>
          <span>{viewDetailisPhoto.model}</span>
        </p>
        <p>
          <span>Tags: </span>
          {viewDetailisPhoto.tags.map((tag, ind) => (
            <span className="mr-1 badge badge-outline" key={ind}>
              {tag}
            </span>
          ))}
        </p>
        <p>
          <span>Likes: </span>
          <span>{viewDetailisPhoto.likes}</span>
        </p>
      </div>
    </div>
  );
};

export default PhotoDetailsPages;
