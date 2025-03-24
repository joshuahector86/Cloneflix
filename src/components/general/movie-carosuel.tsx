import React from "react";
import MovieCard from "../special/movie-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const MovieCarosouel = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Trending Now</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent >
          <CarouselItem className=" md:basis-1/2 lg:basis-1/6">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/6">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/6">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/6">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/6">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/6">
            <MovieCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieCarosouel;
