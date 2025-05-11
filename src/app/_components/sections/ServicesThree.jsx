import Data from "@data/sections/services-3.json";
import Link from "next/link";

const ServicesThreeSection = ( { paddingTop = 120, paddingBottom = 120 } ) => {
    return (
        <>
            {/* services */}
            <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    {Data.items.map((item, key) => (
                    <Link href={item.link} className="mil-service-item" key={`services3-item-${key}`}>
                        <div className="row mil-aic mil-jcb">
                            <div className="col-md-5 col-xl-4">
                                <div className="mil-service-text">
                                    <h3 className="mil-fs42 mil-mb30 mil-c-gone">
                                        <span className="mil-fs18">{item.num}</span>
                                        {item.title}
                                    </h3>
                                    <p className="mil-text mil-fs16">{item.text}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mil-service-right">
                                    <img src={item.image} alt={item.title} className="mil-service-cover" />
                                    <div className="mil-service-btn mil-c-gone">Continue</div>
                                    <img src={item.icon} alt="icon" className="mil-service-icon" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            {/* services end */}
        </>
    );
};
export default ServicesThreeSection;