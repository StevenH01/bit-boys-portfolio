import React from "react";
import logo from "../images/flaming-s.png";

const NavBar = () => {
  return (
    <div className="bg-black flex justify-between items-center p-4">
      <div className="text-3xl hover:animate-pulse text-green-500">
        Bit Boys
      </div>
      <div>
        <a href="https://www.csus.edu/">
          <img src={logo} alt="" width={60} className="hover:animate-spin" />
        </a>
      </div>
      <div className="flex text-white gap-6 hover:">
        <div>Alex</div>
        <div>Angelo</div>
        <div>Danny</div>
        <div>Henry</div>
        <div>Jonathan</div>
        <div>Kevin</div>
        <div>Samuel</div>
        <div>Steven</div>
      </div>
    </div>
  );
};

export default NavBar;
