import Data from "@data/sections/experience-5.json";

const ExperienceFiveSection = () => {
  return (
    <>
        {/* experience */}
        <div>
            <div className="container">
                <div className="row mil-jcb">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4">
                        <div className="mil-exp-box-2 mil-type-2 mil-mb30 mil-up">
                            <div className="mil-exp-content mil-up">
                                <div className="mil-exp-number">{Data.number}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mil-p-120-0 mil-992-p-0-0">
                        <h4 className="mil-text mil-fs42 mil-light mil-mb90 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceFiveSection;