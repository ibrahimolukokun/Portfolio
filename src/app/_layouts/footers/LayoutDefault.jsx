"use client";

import AppData from "@data/app.json";
import Link from "next/link";

import { BackToTop } from "@common/utilits";

import { useEffect } from "react";

const DefaultFooter = () => {
  useEffect(() => {
    BackToTop();
  }, []);

  return (
    <>
        {/* footer */}
        <footer>
            <div className="container mil-p-120-0">
                <div className="row mil-jcb ">
                    <div className="col-8 col-lg-4 mil-mb90">
                        <Link href="/" className="mil-logo mil-mb60 mil-up mil-c-gone">{AppData.footer.logoText}</Link>
                        <p className="mil-text mil-fs16 mil-mb60 mil-up mil-footer-mobile-text" dangerouslySetInnerHTML={{__html : AppData.footer.description}} />
                        <ul className="mil-social mil-up">
                            {AppData.social.map((item, key) => (
                            <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" title={item.title} className="mil-c-gone"><i className={item.icon}></i></a></li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 mil-mb90">
                        <h5 className="mil-fs16 mil-mb60 mil-up">{AppData.footer.contactTitle}</h5>
                        <ul className="mil-footer-list">
                            {AppData.footer.contact.map((item, key) => (
                            <li key={`footer-contact-item-${key}`} className="mil-text mil-up">
                              {item.label}
                              {": "}
                              <span dangerouslySetInnerHTML={{__html : item.value}} />
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mil-footer-bottom mil-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mil-mb30">
                            <p className="mil-fs14 mil-soft" dangerouslySetInnerHTML={{__html : AppData.footer.copy}} />
                        </div>
                        <div className="col-lg-6 mil-jce mil-992-jcs mil-mb30">
                            <a href="#." className="mil-group-text mil-accent mil-c-gone" id="mil-btt"><i className="fas fa-chevron-up"></i> <span>{AppData.footer.backLabel}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* footer end */}
    </>
  );
};
export default DefaultFooter;
