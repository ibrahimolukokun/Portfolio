import Data from "@data/sections/contact.json";
import ContactForm from "@components/ContactForm";

const ContactSection = ( { subtitle = '', title = '' } ) => {
  return (
    <>
      {/* contact */}
      <div className="mil-p-120-120 mil-soft-section">
          <div className="container">
              <div className="row mil-jcc">
                  <div className="col-md-8 mil-tac">
                      <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : subtitle ? title : Data.subtitle}}  />
                      <h2 className="mil-fs42 mil-up mil-mb90" dangerouslySetInnerHTML={{__html : title ? title : Data.title}} />

                      <ContactForm />
                  </div>
              </div>
          </div>
      </div>
      {/* contact end */}
    </>
  );
};
export default ContactSection;