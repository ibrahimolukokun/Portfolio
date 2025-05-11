import Data from "@data/sections/experience-2.json";

const ExperienceTwoSection = () => {
  return (
    <>
        {/* experience */}
        <div className="mil-p-120-30">
            <div className="container">
                <div className="row mil-jcb">
                    <div className="col-lg-5 mil-mb90">
                        <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                        <h2 className="mil-fs42 mil-up mil-mb30" dangerouslySetInnerHTML={{__html : Data.title}} />
                        <p className="mil-text mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                    <div className="col-lg-6 mil-mb90">
                        {Data.items.map((item, key) => (
                        <div className={key+1 !== Data.items.length ? "mil-counter-item mil-mb90" : "mil-counter-item"} key={`experience2-item-${key}`}>
                            <h5 className="mil-fs20 mil-mb30 mil-up">{item.label}</h5>
                            <div className="mil-prog-track mil-mb30 mil-add-class mil-up">
                                <div className="mil-prog" data-number={item.num}></div>
                            </div>
                            <div className="mil-counter-text mil-up">
                                <div className="mil-counter-number"><span className="mil-counter" data-number={item.num}>00</span><span className="mil-percent">{item.numAfter}</span></div>
                                <div className="mil-text mil-fs16" dangerouslySetInnerHTML={{__html : item.text}} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceTwoSection;