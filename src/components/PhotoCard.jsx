import Image from "next/image";
import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={500}
            height={500}
            className="w-50 h-50"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
