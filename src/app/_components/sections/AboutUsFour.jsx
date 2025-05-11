import Data from "@data/sections/about-us-4.json";
import Link from "next/link";
import Image from 'next/image';

const AboutUsFourSection = () => {
  return (
    <>
        {/* about */}
        <div className="">
            <div className="container">
                <div className="mil-content-box mil-out-section mil-soft-section mil-up">
                    <div className="row mil-aic">
                        <div className="col-md-12 col-lg-7 mil-relative">
                            <div className="mil-cb-text mil-p-120-120">
                                <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-fs42 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-text mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <div className="mil-up">
                                    <Link href={Data.button.link} className="mil-btn mil-btn-border mil-c-gone">{Data.button.label}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="mil-cb-image mil-up">
                                <Image src={Data.image.url} fill sizes="(max-width: 768px) 100vw, 50vw" alt={Data.image.alt} className="mil-image-1" />
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

export default AboutUsFourSection;