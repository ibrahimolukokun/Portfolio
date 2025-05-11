import Link from "next/link";
import Image from 'next/image';

const HeroThree = ( { image, title, subtitle = false, button, button2, imgLayout = false } ) => {
    return (
        <>
            {/* banner */}
            <div className="mil-banner">
                <div className="container">
                    <div className="row mil-aic">
                        <div className="col-12 col-lg-6">
                            <div className="mil-banner-text">
                                {subtitle != 0 &&
                                <div className="mil-fs20 mil-accent mil-mb60" dangerouslySetInnerHTML={{__html : subtitle}} />
                                }
                                <h1 className="mil-fs68 mil-mb60" dangerouslySetInnerHTML={{__html : title}} />
                                <div className="mil-buttons-frame">
                                    <Link href={button.link} className="mil-btn mil-c-gone">{button.label}</Link>
                                    <Link href={button2.link} className="mil-btn mil-btn-link mil-c-gone">{button2.label}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mil-banner-image-frame">
                            <div className={imgLayout ? `mil-banner-img mil-${imgLayout}` : `mil-banner-img`}>
                                <Image src={image.url} fill sizes="(max-width: 768px) 100vw, 50vw" priority alt={image.alt} className="mil-scale-img" data-value-1=".75" data-value-2="1.11" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}
        </>
    );
}
export default HeroThree;