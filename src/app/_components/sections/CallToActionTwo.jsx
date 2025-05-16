import Data from "@data/sections/call-to-action-2.json";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

const CallToActionTwoSection = ({ darkUI = false }) => {
  const uiClass = darkUI ? "soft" : "accent";

  return (
    <div className={`mil-${uiClass}-section mil-up mil-p-120-120`}>
      <div className="container mil-space mil-up">
        <div className="mil-text-center">
        <h5 className={`mil-suptitle mil-${uiClass} mil-mb30 mil-text-color`}>{Data.subheadline}</h5>
        <h2 className="mil-fs68 mil-light mil-mb10 mil-up">{Data.headline}</h2>
        </div>

        <div className="mil-button-wrapper text-center">
        <Link
        href={Data.email}
        className={`mil-button mil-button-${darkUI ? "light" : "dark"} mil-up mil-btn mil-c-gone inline-flex items-center justify-center gap-2`}>
        <FiMail className="mil-icon" size={20} />
        {Data.emailLabel}
        </Link>
    </div>

      </div>
    </div>
  );
};

export default CallToActionTwoSection;
