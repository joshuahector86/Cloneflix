import { Tv } from "lucide-react";
import React from "react";

const InfoCards = () => {
  const infoCardsData = [
    {
      id: 1,
      title: "Ejoy on your TV",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: <Tv />,
    },
    {
      id: 2,
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <Tv />,
    },

    {
      id: 3,
      title: "Create profiles for children",
      description:
        "Send children on adventures with their favorite characters in a space made just for them—free with your membership.",
      icon: <Tv />,
    },
    {
      id: 4,
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
      icon: <Tv />,
    },
  ];

  return (
    <div className="grid grid-flow-row md:grid-cols-2 gap-4">
      {infoCardsData.map((card) => (
        <div
          key={card.id}
          className="flex flex-row gap-4 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4"
        >
          <div>{card.icon}</div>
          <div>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-500">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
