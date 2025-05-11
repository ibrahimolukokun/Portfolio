import Data from '@data/sections/partners';
import Link from "next/link";

const PartnersSection = () => {
  return (
    <>
      {/* partners */}
      <div>
          <div className="container">
              <div className="mil-out-section mil-accent-section mil-p-120-30 mil-up">
                  <div className="row mil-jcb mil-992-tac mil-992-jcc mil-aic">
                      <div className="col-lg-5 mil-relative mil-mb90">
                          <h2 className="mil-fs42 mil-light mil-mb30 mil-up">{Data.title}</h2>
                          <p className="mil-text mil-light mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                          <div className="mil-up">
                            <Link href={Data.button.link} className="mil-btn mil-btn-soft mil-c-gone">{Data.button.label}</Link>
                          </div>
                      </div>
                      <div className="col-12 col-md-8 col-lg-6 mil-mb60">
                          <div className="row">
                              {Data.items.map((item, key) => (
                              <div className="col-6 mil-mb30 mil-up" key={`partners-item-${key}`}>
                                  <img src={item.image} alt={item.alt} className="mil-brand" />
                              </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* partners end */}
    </>
  );
};
export default PartnersSection;