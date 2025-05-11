import Data from "@data/sections/about-us-3.json";
import Link from "next/link";
import Image from 'next/image';

const AboutUsThreeSection = () => {
  return (
    <>
        {/* about */}
        <div className="mil-about-bg mil-p-120-120">
            <Image src={Data.image.url} fill sizes="100vw" alt={Data.image.alt} className="mil-up" style={{"zIndex": "-1"}} />

            <div className="container">
                <div className="row mil-jce mil-992-jcs">
                    <div className="col-12 col-sm-8 col-lg-5">
                        <div className="mil-about-text">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-fs42 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-text mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                            <div className="mil-up">
                                <Link href={Data.button.link} className="mil-btn mil-btn-border mil-c-gone">{Data.button.label}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* about end */}
    </>
  );
};

export default AboutUsThreeSection;