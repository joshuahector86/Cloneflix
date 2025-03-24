"use client";
import Image from "next/image";
import React from "react";
import movieImg from "@/assets/movie.jpg";

const MovieCard = () => {
  return (
    <div className="flex flex-col text-center">
      <Image
        onClick={() => alert("clicked")}
        src={movieImg}
        alt="movie-card-img"
        className="p-5 rounded-[24px] w-[200px] h-[250px] transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
      />
     
    </div>
  );
};

export default MovieCard;
