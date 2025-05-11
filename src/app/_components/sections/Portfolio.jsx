//"use client";

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

import Data from "@data/sections/portfolio.json";
import Link from "next/link";
import Image from 'next/image';

const PortfolioSection = ( { heading = {"subitle": "", "title": "", "description": ""}, paddingTop = 120, paddingBottom = 90, projects, order, btnBorder = true } ) => {

    let projectsKeys = {};

    projects.forEach((item) => {
        projectsKeys[item.id] = item;
    });

    //useEffect(() => {
        //ScrollAnimation();
    //}, []);

    return (
        <>
            {/* portfolio */}
            <div className={`mil-portfolio mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mil-mb60">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle ? heading.subtitle : Data.subtitle}} />
                            <h2 className="mil-fs42 mil-up" dangerouslySetInnerHTML={{__html : heading.title ? heading.title : Data.title}} />
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-9">
                                    <p className="mil-text mil-fs16 mil-mb90 mil-up" dangerouslySetInnerHTML={{__html : heading.description ? heading.description : Data.description}} />
                                </div>
                            </div>
                            {projectsKeys[order[0]] !== undefined &&
                            <Link href={`/projects/${projectsKeys[order[0]].id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                                <div className="mil-cover-frame mil-v">
                                    <div className="mil-hover-frame">
                                        <Image src={projectsKeys[order[0]].image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={projectsKeys[order[0]].title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                            </Link>
                            }
                            {projectsKeys[order[1]] !== undefined &&
                            <Link href={`/projects/${projectsKeys[order[1]].id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                                <div className="mil-cover-frame mil-s">
                                    <div className="mil-hover-frame">
                                        <Image src={projectsKeys[order[1]].image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={projectsKeys[order[1]].title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                            </Link>
                            }
                        </div>
                        <div className="col-md-6">
                            {projectsKeys[order[2]] !== undefined &&
                            <Link href={`/projects/${projectsKeys[order[2]].id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                                <div className="mil-cover-frame mil-h">
                                    <div className="mil-hover-frame">
                                        <Image src={projectsKeys[order[2]].image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={projectsKeys[order[2]].title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                            </Link>
                            }
                            {projectsKeys[order[3]] !== undefined &&
                            <Link href={`/projects/${projectsKeys[order[3]].id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                                <div className="mil-cover-frame mil-v">
                                    <div className="mil-hover-frame">
                                        <Image src={projectsKeys[order[3]].image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={projectsKeys[order[3]].title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                    </div>
                                    <div className="mil-hover-overlay"></div>
                                </div>
                            </Link>
                            }
                            <div className="mil-project-btn-frame mil-up">
                                <Link href={Data.button.link} className={btnBorder ? "mil-btn mil-btn-border mil-c-gone" : "mil-btn mil-c-gone"}>{Data.button.label}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default PortfolioSection;
