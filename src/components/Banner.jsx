import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)`,
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">
            Create. Imagine. Generate.
          </h1>
          <p className="mb-5">
            A modern AI-powered gallery platform where users can explore, view,
            and interact with AI-generated images. Users can browse categorized
            images, view detailed prompts, and manage their profiles after
            authentication.
          </p>
          <Link href={"/photos"}>
            <button className="btn btn-primary">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
