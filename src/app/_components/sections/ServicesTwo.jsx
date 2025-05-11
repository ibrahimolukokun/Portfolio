import Data from "@data/sections/services-2.json";

const ServicesTwoSection = ( { paddingTop = 120, paddingBottom = 90 } ) => {
    return (
        <>
            {/* iconboxes */}
            <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    <div className="row">
                        {Data.items.map((item, key) => (
                        <div className="col-md-4" key={`services2-item-${key}`}>
                            <div className="mil-iconbox mil-mb30">
                                <img src={item.icon} alt="icon" className="mil-mb30 mil-up" />
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
export default ServicesTwoSection;