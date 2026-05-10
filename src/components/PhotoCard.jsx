import Image from "next/image";
import Link from "next/link";
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
          <h2 className="card-title flex justify-between">
            {photo.title}

            <div className="badge badge-secondary ">{photo.category}</div>
          </h2>

          <div className="">
            <span>Likes:</span>
            <span className=" mr-2">{photo.likes}</span>
            <span>Downloads:</span>
            <span className="">{photo.downloads}</span>
          </div>
          <Link
            href={`/photos/${photo.id}`}
            className="bg-amber-700 text-center text-white p-1 rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
