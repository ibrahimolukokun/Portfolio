import Data from "@data/sections/about-us.json";
import Link from "next/link";
import Image from 'next/image';

const AboutUsSection = ( { subtitle = false, title = false, description = false, button = false, image = false, paddingTop = 0, paddingBottom = 120, lightText = false } ) => {
  return (
    <>
        {/* about */}
        <div className={`mil-about mil-p-${paddingTop}-${paddingBottom}`}>
            <div className="container">
                <div className="row flex-sm-row-reverse mil-jcb mil-aic">
                    <div className="col-lg-5 mil-relative">
                        <div className="mil-about-text">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : subtitle ? subtitle : Data.subtitle}} />
                            <h2 className="mil-fs42 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : title ? title : Data.title}} />
                            <p className={lightText ? "mil-text mil-light mil-fs16 mil-mb30 mil-up" : "mil-text mil-fs16 mil-mb30 mil-up"} dangerouslySetInnerHTML={{__html : description ? description : Data.description}} />
                            <div className="mil-up">
                                <Link href={button.link ? button.link : Data.button.link} className="mil-btn mil-btn-border mil-c-gone">{button.label ? button.label : Data.button.label}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 mil-about-image-frame">
                        <div className="mil-about-img mil-out-right mil-up">
                            <Image src={image ? image : Data.image.url} fill sizes="(max-width: 768px) 100vw, 75vw" alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* about end */}
    </>
  );
};

export default AboutUsSection;