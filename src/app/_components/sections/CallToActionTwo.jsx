import Data from "@data/sections/call-to-action-2.json";
import Link from "next/link";

const CallToActionTwoSection = ( { darkUI = false } ) => {
  let uiClass = 'accent';
  
  if ( darkUI ) {
    uiClass = 'soft';
  }

  return (
    <>
        {/* call to action */}
        <div className={`mil-${uiClass}-section mil-up mil-p-180-180`}>
            <div className="container">
                <h2 className="mil-fs68 mil-light mil-mb30 mil-up">{Data.line1.text} <Link href={Data.line1.link} className={darkUI ? "mil-text-link mil-accent mil-c-gone" : "mil-text-link mil-accent-soft mil-c-gone"}>{Data.line1.label}</Link></h2>
                <p className="mil-text mil-fs26 mil-light mil-up">{Data.line2.text} <Link href={Data.line2.link} className="mil-text-link mil-light mil-c-gone">{Data.line2.label}</Link>!</p>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default CallToActionTwoSection;