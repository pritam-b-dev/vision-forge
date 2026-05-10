import React from "react";
import data from "@/data/db.json";
import PhotoCard from "../../../components/PhotoCard";

const AllPhotosPages = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 ">
        {data.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPages;
