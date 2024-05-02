import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto p-4">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-green-500 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-green-500 md:flex-row md:justify-between">
        <div>@ 2024 Steven Ho</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          {/* Can put any links in hear with icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
