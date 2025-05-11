import Data from "@data/sections/services.json";

const ServicesSection = () => {
    return (
        <>
            {/* iconboxes */}
            <div className="mil-p-120-90">
                <div className="container">
                    <div className="row">
                        {Data.items.map((item, key) => (
                        <div className="col-md-4" key={`services-item-${key}`}>
                            <div className="mil-iconbox mil-center mil-mb30">
                                <img src={item.icon} alt="icon" className="mil-type-2 mil-mb30 mil-up" />
                                <h4 className="mil-fs20 mil-mb30 mil-up">{item.title}</h4>
                                <p className="mil-text mil-fs16 mil-up" dangerouslySetInnerHTML={{__html : item.text}} />
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
export default ServicesSection;