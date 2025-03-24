import AdvertisementBar from "@/components/general/advertisement-bar";
import Header from "@/components/general/header";
import MovieCarosouel from "@/components/general/movie-carosuel";
import InfoCards from "@/components/general/info-card";
import QuestionsAccordian from "@/components/general/questions-accordian";
import Email from "@/components/general/email";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="px-20 py-10 flex flex-col gap-10">
        <AdvertisementBar />
        <MovieCarosouel />
        <InfoCards/>
        <QuestionsAccordian/>

        <Email />
        <Footer />
      </div>
    </div>
  );
}
