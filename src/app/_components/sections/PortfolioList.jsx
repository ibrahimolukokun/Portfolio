//"use client";

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

import Link from "next/link";
import Image from 'next/image';

const PortfolioListSection = ( { projects, order } ) => {

    let projectsKeys = [];

    projects.forEach((item) => {
        order.forEach((order_key) => {
            if ( item.id == order_key ) {
                projectsKeys.push(item);
            }
        });
    });

    //useEffect(() => {
        //ScrollAnimation();
    //}, []);

    return (
        <>
            {/* portfolio */}
            <div className="mil-portfolio">
                <div className="container">
                    {projectsKeys.map((item, key) => (
                    <div className={(key+1)%2 ? "row mil-jcb mil-aic mil-mb120" : "flex-sm-row-reverse row mil-jcb mil-aic mil-mb120"} key={`portfolio-list-item-${key}`}>
                        <div className="col-lg-7 mil-project-cover-frame">
                            <div className="mil-cover-img mil-up">
                                <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 75vw" alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                            </div>
                        </div>
                        <div className="col-lg-5 mil-relative">
                            <div className="mil-project-text">
                                <span className="mil-suptitle mil-accent mil-mb30 mil-up">{item.category}</span>
                                <h2 className="mil-fs42 mil-mb30 mil-up">{item.title}</h2>
                                <p className="mil-text mil-fs16 mil-light mil-mb30 mil-up">{item.short}</p>
                                <div className="mil-up"><Link href={`/projects/${item.id}`} className="mil-btn mil-btn-border mil-c-gone">View project</Link></div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default PortfolioListSection;
