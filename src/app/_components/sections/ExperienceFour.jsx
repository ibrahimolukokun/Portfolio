import Data from "@data/sections/experience-4.json";

const ExperienceFourSection = () => {
  return (
    <>
        {/* experience */}
        <div>
            <div className="container">
                <div className="row mil-jcb">
                    <div className="col-lg-5 mil-p-120-0">
                        <p className="mil-text mil-fs30 mil-light mil-mb90 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                    <div className="col-lg-4 mil-mb90">
                        <div className="mil-exp-box-2 mil-up">
                            <div className="mil-exp-content mil-up">
                                <div className="mil-exp-number">{Data.number}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceFourSection;