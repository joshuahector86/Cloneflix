"use client";
import { ChevronDown, LanguagesIcon } from "lucide-react";

const Topbar = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div className="flex justify-between items-center  px-20 py-5">
      <h1 className="text-5xl text-red-600 font-bold">CLONEFLIX</h1>

      <div className="flex items-center space-x-5">
        <button
          onClick={handleClick}
          className="border border-white flex items-center p-2 rounded-lg gap-4"
        >
          <LanguagesIcon />
          <p>English</p>
          <ChevronDown />
        </button>
        <button
          onClick={handleClick}
          className="bg-red-600 p-2 px-4 rounded-lg"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Topbar;
