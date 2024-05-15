import React from "react";
import resume from "../../resumes/steven-resume.pdf";

const ResumeSteven = () => {
  return (
    <div className="flex justify-center">
      <div className="p-6">
        <a
          href={resume}
          className="p-4 rounded-2xl mb-1 bg-gradient-to-br from-green-600 to-teal-400 text-white"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ResumeSteven;
