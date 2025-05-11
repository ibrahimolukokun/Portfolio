import React from "react";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import Image from 'next/image';

export const metadata = {
    title: {
        default: "Coming Soon",
    },
    description: AppData.settings.siteDescription,
}

const ComingSoon = () => {
  const ComingSoonData = {
    "title": "We are under <br/>construction.",
    "subtitle": "Check back soon or sign up for a release update.",
    "image": {
        "url": "/img/banners/14.jpg",
        "alt": "banner"
    }
  }

  return (
    <OkaiLayout footer={"none"}>
        {/* banner */}
        <div className="mil-banner">
            <div className="container">
                <div className="row mil-aic">
                    <div className="col-12 col-lg-6">
                        <div className="mil-banner-text">
                            <h1 className="mil-fs68 mil-mb30" dangerouslySetInnerHTML={{__html : ComingSoonData.title}} />
                            <p className="mil-text mil-mb60 mil-light" dangerouslySetInnerHTML={{__html : ComingSoonData.subtitle}} />
                            <form action={AppData.settings.mailchimp.url} method="post" target="_blank" className="mil-form mil-subscribe mil-up">
                                <input placeholder="Enter your email" type="email" name="EMAIL" required />
                                <input type="hidden" name={AppData.settings.mailchimp.key} />
                                <button type="submit" className="mil-btn mil-c-gone">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mil-banner-image-frame">
                        <div className="mil-banner-img mil-out-right">
                            <Image src={ComingSoonData.image.url} fill sizes="(max-width: 768px) 100vw, 50vw" priority alt={ComingSoonData.image.alt} className="mil-scale-img" data-value-1=".75" data-value-2="1.11" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* banner end */}
    </OkaiLayout>
  );
};
export default ComingSoon;
