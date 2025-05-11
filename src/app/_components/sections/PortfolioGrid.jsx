//"use client";

import Link from "next/link";
import Image from 'next/image';

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

const PortfolioGridSection = ( { heading, projects, button = false } ) => {

    const projectRows = [];

    for (var i = 0; i < projects.length; i += 2 ) {
        projectRows.push(projects.slice(i, 2 + i));
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

                        {projectRows.slice(0, 2).map((row, row_key) => (
                        <div className="col-md-6" key={`portfolio-grid-row-${row_key}`}>
                            {row.map((item, key) => (
                            <Link href={`/projects/${item.id}`} className="mil-project-card mil-mb30 mil-up mil-c-view" key={`portfolio-grid-row-${row_key}-item-${key}`}>
                                <div className={row_key%2==0 ? key%2 == 0 ? "mil-cover-frame mil-v" : "mil-cover-frame mil-h" : key%2 == 0 ? "mil-cover-frame mil-h" : "mil-cover-frame mil-v"}>
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

export default PortfolioGridSection;
