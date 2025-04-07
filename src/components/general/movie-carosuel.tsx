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
  const repeatCarouselItems = 10;
  const carouselItems = Array.from(
    { length: repeatCarouselItems },
    (_, index) => (
      <CarouselItem
        key={index}
        className="sm:basis-1/2 md:basis-1/3 lg:basis-1/6 flex justify-center items-center"
      >
        <MovieCard />
      </CarouselItem>
    )
  );
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Trending Now</h1>
      <Carousel
        opts={{
          loop: false,
        }}
      >
        <CarouselContent className="">{carouselItems}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieCarosouel;
