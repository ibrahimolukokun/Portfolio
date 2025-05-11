import Data from "@data/sections/subscribe.json";
import Image from 'next/image';

const SubscribeSection = () => {
  return (
    <>
        {/* call to action */}
        <div className="">
            <div className="container">
                <div className="mil-content-box mil-out-section mil-soft-section mil-up">
                    <div className="row mil-aic mil-jcb">
                        <div className="col-md-12 col-lg-6 mil-relative">
                            <div className="mil-cb-text mil-p-120-120">
                                <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-fs42 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-text mil-mb60 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <form className="mil-form mil-subscribe mil-up">
                                    <input placeholder="Enter your email" />
                                    <button className="mil-btn mil-c-gone">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="mil-cb-image mil-up">
                                <Image src={Data.image.url} fill sizes="100vw" alt={Data.image.alt} className="mil-image-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default SubscribeSection;