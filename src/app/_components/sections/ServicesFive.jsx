import Data from "@data/sections/services-5.json";

const ServicesFiveSection = () => {
    return (
        <>
            {/* iconboxes */}
            <div className="mil-p-120-60">
                <div className="container">
                    <div className="row">
                        {Data.items.map((item, key) => (
                        <div className="col-md-6" key={`services5-item-${key}`}>
                            <div className="mil-iconbox mil-type-2 mil-mb60">
                                <img src={item.icon} alt="icon" className="mil-mb30 mil-up" />
                                <div className="mil-ib-text">
                                    <h4 className="mil-fs20 mil-mb30 mil-up">{item.title}</h4>
                                    <p className="mil-text mil-fs16 mil-up">{item.text}</p>
                                    <div className="mil-up"><a href={item.link} className="mil-btn mil-btn-link mil-accent mil-c-gone">See details</a></div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* iconboxes end */}
        </>
    );
};
export default ServicesFiveSection;