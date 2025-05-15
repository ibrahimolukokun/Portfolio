import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Data from "@data/sections/my-experience.json";

const MyExperience = () => {
  return (
    <section className="mil-experience-section container">
      <div className="mil-container mil-cta mil-up">
        <h2 className="mil-section-title">{Data.title}</h2>
        <div className="mil-experience-list">
          {Data.experiences.map((exp, index) => (
            <a
              href={`https://${exp.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mil-experience-item"
              key={index}
            >
              <span className="mil-arrow-icon">
              <MdArrowOutward />
              </span>
              <span className="mil-experience-id">{exp.id}.</span>
              
                 <div className="mil-role-year-wrapper">
                    <span className="mil-experience-role">{exp.role}</span>
                    <span className="mil-experience-year">{exp.year}</span>
                </div>
                <div className="mil-company-website-wrapper">
                    <span className="mil-experience-company">{exp.company}</span>
                    <span className="mil-experience-website">{exp.website}</span>
                </div>
              
            

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
