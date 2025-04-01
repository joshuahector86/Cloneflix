import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerData = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Netflix Shop",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
    "Do Not Sell or Share My Personal Information",
    "Ad Choices",
  ];
  return (
    <div className="bg-black text-white flex flex-col gap-8">
      <p className="underline text-sm md:text-normal">
        Questions? Call 1-800-000-0000
      </p>

      <Link
        href="/"
        className="grid gridflow-row md:grid-cols-3 gap-4 underline"
      >
        {footerData.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </Link>
    </div>
  );
};

export default Footer;
