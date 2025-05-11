import Data from "@data/sections/experience-7.json";

const ExperienceSevenSection = () => {
  return (
    <>
        {/* experience */}
        <div className="mil-p-120-90">
            <div className="container">
                <div className="row mil-aic mil-jcb">
                    <div className="col-lg-5">
                        <p className="mil-text mil-fs18 mil-tar mil-768-tal mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {Data.items.map((item, key) => (
                            <div className="col-lg-6 mil-mb30" key={`experience7-item-${key}`}>
                                <div className="mil-text mil-light mil-fs68 mil-up">{item.num}<span className="mil-accent">{item.numAfter}</span></div>
                                <h4 className="mil-fs22 mil-soft mil-up">{item.label}</h4>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceSevenSection;