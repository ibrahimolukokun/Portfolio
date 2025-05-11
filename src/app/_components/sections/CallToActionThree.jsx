import Data from "@data/sections/call-to-action-3.json";
import Link from "next/link";

const CallToActionThreeSection = () => {
  return (
    <>
        {/* call to action */}
        <div className="mil-soft-section mil-up mil-p-180-120">
            <div className="container">
                <div className="row mil-jcb mil-aic">
                    <div className="col-lg-6 mil-mb60">
                        <h2 className="mil-fs68 mil-light mil-up">
                          <span dangerouslySetInnerHTML={{__html : Data.heading.text}} />{" "}
                          <Link href={Data.heading.link} className="mil-text-link mil-accent mil-c-gone">{Data.heading.button}</Link>
                        </h2>
                    </div>
                    <div className="col-lg-6 mil-jce mil-992-jcs mil-mb60">
                        <div className="mil-up">
                            <Link href={Data.button.link} className="mil-btn mil-btn-border mil-btn-lg mil-c-gone">{Data.button.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default CallToActionThreeSection;