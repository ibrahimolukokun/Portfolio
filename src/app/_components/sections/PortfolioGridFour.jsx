//"use client";

import Link from "next/link";
import { Fragment } from "react";
import Image from 'next/image';

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

const PortfolioGridFourSection = ( { heading, projects, order } ) => {

    let projectsKeys = [];

    projects.forEach((item) => {
        order.forEach((order_key) => {
            if ( item.id == order_key ) {
                projectsKeys.push(item);
            }
        });
    });

    let projectRows = [];

    for (var i = 0; i < projectsKeys.length; i += 3 ) {
        projectRows.push(projectsKeys.slice(i, 3 + i));
    }

    //useEffect(() => {
        //ScrollAnimation();
    //}, []);

    return (
        <>
            {/* portfolio */}
            <div className="mil-portfolio mil-p-0-120">
                <div className="container">
                    <div className="row mil-mb30">
                        <div className="col-12 mil-mb90">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle}} />
                            <h2 className="mil-fs42 mil-up" dangerouslySetInnerHTML={{__html : heading.title}} />
                        </div>
                        {projectRows.slice(0, 3).map((row, row_key) => (
                        <Fragment key={`projects-grid4-item-${row_key}`}>
                            {row.map((item, key) => (
                            <div className={key == 0 ? "col-md-12" : "col-md-6"} key={`projects-grid4-item-${row_key}-${key}`}>
                                <Link href={`/projects/${item.id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                                    <div className={key == 0 ? "mil-cover-frame mil-h mil-shortened" : "mil-cover-frame mil-s"}>
                                        <div className="mil-hover-frame">
                                            <Image src={item.image} fill sizes={key == 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                        </div>
                                        <div className="mil-hover-overlay"></div>
                                    </div>
                                </Link>
                            </div>
                            ))}
                        </Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default PortfolioGridFourSection;
