import Data from "@data/sections/experience.json";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row mil-jcb">

          {/* Left Column: About Me */}
          <div className="col-lg-6">
            <div className="mil-exp-box mil-up">
              <div className="mil-exp-content mil-up">
                <h5 className="mil-accent mil-mb-20">{Data.label.title}</h5>
                <h4 className="mil-exp-text mil-fs42">{Data.description}</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="col-lg-6 mil-p-120-0">

            <h5 className="mil-fs30 mil-light mil-mb30 mil-up">Key Skills</h5>

            {/* Sliders for major skills */}
            <div className="mil-counter-grid">
            {Data.majorSkills.map((item, key) => (
              <div className={key+1 !== Data.majorSkills.length ? "mil-counter-item mil-mb0" : "mil-counter-item"} key={`major-skill-${key}`}>

                <div className="mil-flex-between mil-align-center mil-mb20">
                <h5 className="mil-fs14 mil-up">
                    {item.label} <Link href={item.link} className="mil-text-link"></Link>
                </h5>
                <div className="mil-counter-number mil-fs18">
                    <span className="mil-counter" data-number={item.num}>00</span>
                    <span className="mil-percent">{item.numAfter}</span>
                </div>
                </div>
                
                <div className="mil-prog-track mil-mb20 mil-add-class mil-up">
                  <div className="mil-prog" data-number={item.num}></div>
                </div>

              </div>
            ))}
            </div>

            {/* List for other skills */}
            <div className="mil-up mil-mt60">
              <h5 className="mil-fs20 mil-mt60 mil-mb20">Other Tools & Skills</h5>
              <ul className="mil-skill-list">
                {Data.otherSkills.map((skill, index) => (
                  <li key={`other-skill-${index}`} 
                  className="mil-fs18 mil-mb15" 
                  style={{
                    backgroundColor: 'rgba(255, 87, 34, 0.05)',
                    color: '#B3B3B3',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '50px',
                    fontSize: '0.7rem',
                    border: '1px solid rgba(255, 86, 34, 0.87)',
                    }}>{skill}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
