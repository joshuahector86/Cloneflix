import React from "react";
import "../../styes/header.css";
import Topbar from "../layout/topbar";
import { ChevronRight } from "lucide-react";
import Email from "./email";

const Header = () => {
  return (
    <div className="backgroundImage h-full pb-50">
      <Topbar />
      <div className="flex gap-6 justify-center items-center h-full flex-col text-white">
        <h1 className="text-6xl  text-center font-bold">
          Unlimited moves, TV <br />
          shows, and more
        </h1>
        <p>Starts at $7.99. Cancel anytime.</p>
        <div className="flex flex-col gap-2">
          <p className="text-center">
            Ready to watch? Enter your email to create or restart your <br />{" "}
            memberships
          </p>

        <Email />
        </div>
      </div>
    </div>
  );
};

export default Header;
