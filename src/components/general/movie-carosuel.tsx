import React from "react";
import MovieCard from "../special/movie-card";

const MovieCarosouel = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Trending Now</h1>
      <div className="flex justify-between">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieCarosouel;
