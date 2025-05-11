import Link from "next/link";
import Image from 'next/image';

const HeroTwo = ( { image, title, button } ) => {

    return (
        <>
            {/* banner */}
            <div className="mil-banner mil-image-banner">
                <Image src={image.url} fill sizes="100vw" priority alt={image.alt} className="mil-banner-bg mil-scale-img" data-value-1=".68" data-value-2="1.1" />

                <div className="container">
                    <div className="row mil-aic">
                        <div className="col-12">
                            <div className="mil-banner-text">
                                <h1 className="mil-fs68 mil-mb60" dangerouslySetInnerHTML={{__html : title}} />
                                <Link href={button.link} className="mil-btn mil-c-gone">{button.label}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}
        </>
    );
}
export default HeroTwo;