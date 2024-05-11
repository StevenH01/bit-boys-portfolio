import React from "react";
import il from "../../images/internshiplogo.png";

const ExperienceSteven = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Image Container */}
      <div className="mr-4 relative">
        <a href="https://www.ouredge.com/" target="_blank" rel="noreferrer">
          <img
            src={il}
            alt="Our Edge"
            className="rounded-2xl"
            style={{ filter: "brightness(100%)" }}
          />
          {/* Overlay for dimming on hover */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-2xl"></div>
        </a>
      </div>
      {/* Text Container */}
      <div className="flex flex-col">
        {/* Header */}
        {/* Date positioned at top right */}
        <div className="flex justify-between mb-2">
          <a
            href="https://www.linkedin.com/company/ouredgeapp/mycompany/"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className=" relative hover:text-blue-500 cursor-pointer
               transition-all ease-in-out before:transition-[width] 
               before:ease-in-out before:duration-700 before:absolute 
               before:bg-blue-500 before:origin-center before:h-[1px] 
               before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] 
               after:transition-[width] after:ease-in-out after:duration-700 
               after:absolute after:bg-blue-500 after:origin-center after:h-[1px] 
               after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Edge
            </p>
          </a>
          <p>July 2023 - May 2024</p>
        </div>
        {/* Description */}
        <p>
          With my time at the company, I have rebuilt legacy features, created
          backend routes, and developed new features that allowed our internal
          users to search through our database with ease.
        </p>
      </div>
    </div>
  );
};

export default ExperienceSteven;
