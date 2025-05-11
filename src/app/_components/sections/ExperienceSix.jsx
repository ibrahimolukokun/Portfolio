import Data from "@data/sections/experience-6.json";

const ExperienceSixSection = () => {
  return (
    <>
        {/* experience */}
        <div>
            <div className="container">
                <div className="row mil-jcb">
                    <div className="col-lg-4 mil-mb90">
                        <div className="mil-exp-box-2 mil-type-3 mil-up">
                            <div className="mil-exp-content mil-up">
                                <div className="mil-exp-number">{Data.number}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mil-p-120-0 mil-992-p-0-0">
                        <p className="mil-text mil-fs42 mil-light mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceSixSection;