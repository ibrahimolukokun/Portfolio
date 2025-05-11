import Data from "@data/sections/experience-3.json";

const ExperienceThreeSection = () => {
  return (
    <>
        {/* experience */}
        <div className="mil-p-120-30">
            <div className="container">
                <div className="row mil-jcb mil-aic">
                    <div className="col-md-5 mil-mb90">
                        <div className="mil-exp-box-3 mil-up">
                            <div className="mil-exp-content mil-up">
                                <div className="mil-exp-number mil-bg-text" style={{"backgroundImage": `url(${Data.image})`}}>{Data.number}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mil-mb90">
                        <p className="mil-text mil-fs30 mil-light mil-768-tac mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceThreeSection;