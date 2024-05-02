import React from "react";
import lbs from "../images/landing.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex items-center justify-center mt-8 text-3xl text-green-500 underline underline-offset-8">
        About Us
      </h1>
      <div className="flex items-center justify-center mt-4">
        <p>
          Hello everyone! We are the Bit Boys, we are a group created at
          California State University - Scaramento.
          <br />
          We are currently working on a e-commerce website for our client
          Natalie Lam called The Lamby Shop.
        </p>
      </div>
      <h1 className="flex items-center justify-center mt-8 text-3xl underline underline-offset-8 text-[#780000]">
        The Lamby Shop
      </h1>
      <a
        href="https://the-lamby-shop.vercel.app/"
        className="flex items-center justify-center mt-4 "
        target="_blank"
      >
        <img src={lbs} alt="thelambyshop" className="rounded-2xl" />
      </a>
    </div>
  );
};

export default HeroSection;
