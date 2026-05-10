"use client";
import React, { useState } from "react";
import data from "@/data/db.json";
import PhotoCard from "../../../components/PhotoCard";
import { CategoryOfPhotos } from "../../../../lib/data";
import Link from "next/link";

const AllPhotosPages = () => {
  const allCategories = CategoryOfPhotos();

  //কেটাগরি বদলানোর জন্য useState নিলাম, শুরুতে null
  const [selectedCategory, setSelectedCategory] = useState(null);

  // এখানে displaySelectedPhotos এ হয় সব ডাটা না হয় ফিল্টার করা ডাটা রাখছি, state এর setSelectedCategory ফাংশনে onClick করে কেটাগরি নিয়ে।
  let displaySelectedPhotos = selectedCategory
    ? data.filter((d) => d.category === selectedCategory)
    : [...data];

  const [selectLikes, setSelectLikes] = useState(null);
  if (selectLikes === "high") {
    displaySelectedPhotos = displaySelectedPhotos.sort(
      (a, b) => b.likes - a.likes,
    );
  } else if (selectLikes === "low") {
    displaySelectedPhotos = displaySelectedPhotos.sort(
      (a, b) => a.likes - b.likes,
    );
  }
  console.log(selectLikes);
  return (
    <div>
      <div className="flex justify-between">
        <div className="mt-5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`btn btn-outline mr-2 ${selectedCategory === null && "bg-gray-400 text-black"}`}
          >
            All photos
          </button>
          {allCategories.map((c, i) => (
            <button
              onClick={() => setSelectedCategory(c)}
              key={i}
              className={`btn btn-outline mr-2 ${c === selectedCategory ? "bg-gray-400 text-black" : ""}`}
            >
              {" "}
              {c}{" "}
            </button>
          ))}
        </div>
        <div className="dropdown dropdown-end mt-5">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by Likes <span className="text-2xl">↓</span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button
                onClick={() => {
                  setSelectLikes(null);
                  document.activeElement.blur();
                }}
              >
                Default
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSelectLikes("high");
                  document.activeElement.blur();
                }}
              >
                Highest Likes
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSelectLikes("low");
                  document.activeElement.blur();
                }}
              >
                Lowest Likes
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 ">
        {displaySelectedPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPages;
