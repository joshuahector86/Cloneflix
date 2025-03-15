import AdvertisementBar from "@/components/general/advertisement-bar";
import Header from "@/components/general/header";
import MovieCarosouel from "@/components/general/movie-carosuel";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="px-20 py-10 flex flex-col gap-10">
        <AdvertisementBar />
        <MovieCarosouel />
      </div>
    </div>
  );
}
