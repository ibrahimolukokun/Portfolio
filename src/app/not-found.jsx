import Header from "@layouts/headers/Index";
import Cursor from "@layouts/cursor/Index";
import ScrollProgress from "@layouts/scroll-progress/Index";

import Link from "next/link";
import Image from 'next/image';

const NotFound = () => {
  const NotFoundData = {
    "title": "Oops!",
    "description": "A connection cable has just been disconnected or is broken,<br/> please try again later or you can also go to the home page!",
    "button": {
      "link": "/",
      "label": "Go back to home"
    },
    "image": {
      "url": "/img/banners/19.jpg",
      "alt": "banner"
    }
  }

  return (
    <>
      <Cursor />
      
      <ScrollProgress />

      <Header />

      {/* content */}
      <div id="smooth-content" className="mil-content">
        {/* banner */}
        <div className="mil-banner">
            <div className="container">
                <div className="row mil-aic">
                    <div className="col-12 col-lg-6">
                        <div className="mil-banner-text">
                            <h1 className="mil-fs68 mil-mb30" dangerouslySetInnerHTML={{__html : NotFoundData.title}} />
                            <p className="mil-text mil-mb60" dangerouslySetInnerHTML={{__html : NotFoundData.description}} />
                            <Link href={NotFoundData.button.link} className="mil-btn mil-c-gone">{NotFoundData.button.label}</Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mil-banner-image-frame">
                        <div className="mil-banner-img mil-out-right">
                            <Image src={NotFoundData.image.url} fill sizes="(max-width: 768px) 100vw, 50vw" priority alt={NotFoundData.image.alt} className="mil-scale-img" data-value-1=".75" data-value-2="1.11" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* banner end */}
      </div>
      {/* content end */}
    </>
  );
};
export default NotFound;
