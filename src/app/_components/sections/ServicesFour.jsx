"use client";

import Data from "@data/sections/services-4.json";

import { useEffect } from "react";
import { Accordion } from "@common/utilits";
import Image from 'next/image';

const ServicesFourSection = ( { paddingTop = 0, paddingBottom = 30, image = false, reverse = false, heading = true } ) => {
    useEffect(() => {
        Accordion();
    }, []);

    return (
        <>
            {/* services */}
            <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    <div className={reverse ? "row flex-sm-row-reverse mil-aic mil-jcb" : "row mil-aic mil-jcb"}>
                        <div className="col-lg-5">
                            {heading == 1 &&
                            <h2 className="mil-fs42 mil-mb90 mil-up">{Data.title}</h2>
                            }
                            <div className="mil-accordion mil-mb90">
                                {Data.items.map((item, key) => (
                                <div className="mil-accordion-group mil-up" key={`services4-item-${key}`}>
                                    <div className="mil-accordion-menu mil-closed mil-c-gone mil-fs20"><span>{item.title}</span><span className="mil-accordion-icon"></span></div>
                                    <div className="mil-accordion-content">
                                        <p className="mil-text">{item.text}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-just-image mil-s mil-mb90 mil-up">
                                <Image src={image ? image : Data.image.url} fill sizes="(max-width: 768px) 100vw, 50vw" alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services end */}
        </>
    );
};
export default ServicesFourSection;