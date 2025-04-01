"use client";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Email = () => {
  const [isInputString, setIsInputString] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(isInputString);

  return (
    <div className="flex gap-2 justify-center">
      <input
        type="text"
        value={isInputString}
        onChange={(e) => {
          setIsInputString(e.target.value);
        }}
        placeholder="Email address"
        className="bg-[#767676] rounded-lg p-2  border text-white"
        onKeyDown={(e) => {
          if (e.key === "Enter" && isValidEmail) {
            alert(
              "You have sent the imaginary email! Congrats! The enail is " +
                isInputString
            );
            setIsInputString("");
          } else {
            alert("Please enter a valid email address.");
            setIsInputString("");
          }
        }}
      />
      <button
        onClick={() => {
          if (!isValidEmail) {
            alert("Please enter a valid email address.");
            setIsInputString("");
            return;
          }
          alert("You have sent the imaginary email! Congrats!");
          setIsInputString("");
        }}
        aria-label="Get Started"
        className="
    bg-red-600 p-2 px-4 rounded-lg flex gap-2"
      >
        Get Started
        <ChevronRight />
      </button>
    </div>
  );
};

export default Email;
