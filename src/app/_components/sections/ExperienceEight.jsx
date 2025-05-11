import Data from "@data/sections/experience-8.json";

const ExperienceEightSection = () => {
  return (
    <>
        {/* experience */}
        <div className="">
            <div className="container">
                <div className="row mil-jcb">
                    <div className="col-lg-6">
                        <div className="mil-exp-box mil-type-2 mil-up">
                            <div className="mil-exp-content mil-up">
                                <div className="mil-exp-number">{Data.num}<span>{Data.numAfter}</span></div>
                                <h2 className="mil-exp-text mil-fs42" dangerouslySetInnerHTML={{__html : Data.title}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">

                    </div>
                </div>
            </div>
            <div className="container mil-p-120-120">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <p className="mil-text mil-fs30 mil-light mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceEightSection;