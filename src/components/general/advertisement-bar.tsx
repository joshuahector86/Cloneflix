"use client";
import Image from "next/image";
import React from "react";
import popcornImg from "../../assets/popcorn.jpg";

const AdvertisementBar = () => {
  return (
    <div
      onClick={() => alert("clicked gurl")}
      className="flex flex-col md:flex-row justify-center items-center transition-transform duration-300 hover:scale-105 gap-5 w-full"
    >
      <Image
        src={popcornImg}
        alt="popcorn-img"
        className="max-h-70  md:max-h-25 md:max-w-25 rounded-md "
      />

      <div className="rounded-lg bg-[#333333] hover:bg-[#222222] w-full ">
        <div className="flex p-4 justify-between items-center">
          <div className="flex flex-col ">
            <h5>The Cloneflix you love for just $7.99</h5>
            <p>Get our most afforadble, ad supported plan.</p>
          </div>
          <button className="rounded-md bg-[#222222] px-4 p-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBar;
