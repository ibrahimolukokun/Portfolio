//"use client";

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

import Link from "next/link";
import Image from 'next/image';

const PortfolioGridTwoSection = ( { heading, projects, order, button = false } ) => {

    let projectsKeys = [];

    projects.forEach((item) => {
        order.forEach((order_key) => {
            if ( item.id == order_key ) {
                projectsKeys.push(item);
            }
        });
    });

    let projectRows = [];

    for (var i = 0; i < projectsKeys.length; i += 2 ) {
        projectRows.push(projectsKeys.slice(i, 2 + i));
    }

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

                        {projectRows.slice(0, 3).map((row, row_key) => (
                        <div className="col-md-4" key={`portfolio-grid2-row-${row_key}`}>
                            {row.map((item, key) => (
                            <Link href={`/projects/${item.id}`} className="mil-project-card mil-mb30 mil-up mil-c-view" key={`portfolio-grid2-row-${row_key}-item-${key}`}>
                                <div className={row_key%2==0 ? key%2 == 0 ? "mil-cover-frame mil-v mil-longer" : "mil-cover-frame mil-s" : key%2 == 0 ? "mil-cover-frame mil-s" : "mil-cover-frame mil-v mil-longer"}>
                                    <div className="mil-hover-frame">
                                        <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                            </Link>
                            ))}
                        </div>
                        ))}
                    </div>
                    {button &&
                    <div className="mil-up mil-tac">
                        <Link href={button.link} className="mil-btn mil-btn-border mil-c-gone">{button.label}</Link>
                    </div>
                    }
                </div>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default PortfolioGridTwoSection;
