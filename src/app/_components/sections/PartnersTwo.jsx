import Data from '@data/sections/partners-2';

const PartnersTwoSection = ( { title = false, paddingTop = 0, paddingBottom = 90 } ) => {
  return (
    <>
      {/* partners */}
      <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
          <div className="container">
              <div className="row">
                  {title &&
                  <div className="col-12 mil-tac mil-mb90">
                      <p className="mil-text mil-fs30 mil-light mil-up" dangerouslySetInnerHTML={{__html : title}} />
                  </div>
                  }
                  {Data.items.map((item, key) => (
                  <div className="col-md-3 mil-mb30" key={`partners2-item-${key}`}>
                      <div className="mil-partner-card">
                          <img src={item.image} alt={item.alt} className="mil-brand" />
                      </div>
                  </div>
                  ))}
              </div>
          </div>
      </div>
      {/* partners end */}
    </>
  );
};
export default PartnersTwoSection;