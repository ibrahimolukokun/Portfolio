//"use client";

import Link from "next/link";
import Image from 'next/image';

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

const PortfolioGridThreeSection = ( { heading, projects, order } ) => {

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
            <div className="mil-portfolio mil-p-0-90">
                <div className="container">
                    <div className="row mil-mb30">
                        <div className="col-12 mil-mb90">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle}} />
                            <h2 className="mil-fs42 mil-up" dangerouslySetInnerHTML={{__html : heading.title}} />
                        </div>
                        {projectsKeys.map((item, key) => (
                        <div className="col-md-6" key={`projects-grid3-item-${key}`}>
                            <Link href={`/projects/${item.id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                                <div className="mil-cover-frame mil-s mil-shortened">
                                    <div className="mil-hover-frame">
                                        <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default PortfolioGridThreeSection;
