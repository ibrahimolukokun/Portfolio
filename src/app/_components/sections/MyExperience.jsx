import { MdArrowOutward } from "react-icons/md";
import Data from "@data/sections/my-experience.json";

const MyExperience = () => {
  return (
    <section className="ib-section">
      <div className="ib-container">
        <span className="ib-section__label">Experience</span>
        <h2 className="ib-section__title">{Data.title}</h2>

        <ul className="ib-exp__list">
          {Data.experiences.map((exp, index) => (
            <li key={index}>
              <a
                href={exp.website !== '#' ? `https://${exp.website}` : '#'}
                target={exp.website !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="ib-exp__item"
              >
                <div className="ib-exp__left">
                  <span className="ib-exp__role">{exp.role}</span>
                  <span className="ib-exp__company">@ {exp.company}</span>
                </div>
                <div className="ib-exp__right">
                  <span className="ib-exp__period">{exp.period}</span>
                  <MdArrowOutward className="ib-exp__arrow" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyExperience;
