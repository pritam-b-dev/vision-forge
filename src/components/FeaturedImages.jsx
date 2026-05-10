import React from "react";
import { FeaturedImage } from "../../lib/data";
import PhotoCard from "./PhotoCard";

const FeaturedImages = () => {
  const data = FeaturedImage();
  console.log(data);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 ">
      {data.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default FeaturedImages;
