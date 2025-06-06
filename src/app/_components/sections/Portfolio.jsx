//"use client";

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

import Data from "@data/sections/portfolio.json";
import Link from "next/link";
import Image from 'next/image';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaBehance, FaGithub } from 'react-icons/fa';


const PortfolioSection = ( { heading = {"subitle": "", "title": "", "description": ""}, paddingTop = 120, paddingBottom = 60, projects, order, btnBorder = true } ) => {

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
                        
                        <div className="col-12 mil-mb30">
                            <span className="mil-suptitle mil-accent mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle ? heading.subtitle : Data.subtitle}} />
                            <h2 className="mil-fs42 mil-up" dangerouslySetInnerHTML={{__html : heading.title ? heading.title : Data.title}} />
                        </div>

                        <div className="">
                            <div className="">
                                <div className="container-fluid">
                                    <p className="mil-text mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : heading.description ? heading.description : Data.description}} />
                                </div>
                            </div>

                            <div className="container-fluid py-4">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <div className="col" key={index}>
                                        <a href={projectsKeys[order[index]].link}
                                                className="view-project-link"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                        <div className="card h-100 shadow border-0"  
                                            style={{backgroundColor: '#14151A'}}>
                                        {/* Image Section */}
                                        <img
                                            src={projectsKeys[order[index]].image}
                                            alt={projectsKeys[order[index]].title}
                                            className="card-img-top img-fluid rounded-top mil-scale-img"
                                            data-value-1="0.8" data-value-2="1"
                                            style={{ objectFit: 'cover', height: '250px', display: 'block',
                                                width: '100%'}}
                                        />

                                        {/* Content Section */}
                                        <div className="card-body d-flex flex-column justify-content-between p-4"
                                        >
                                            <div className="gap-3 mb-3">
                                            <p className="mil-tag-text mb-2 text-muted"
                                                style={{ fontSize: '0.75rem'}}>
                                                {projectsKeys[order[index]].category}
                                            </p>
                                            <h4 className="mil-title-text fw-bold mb-3">
                                                {projectsKeys[order[index]].title}
                                            </h4>
                                            <p className="text-secondary small mb-3"
                                                style={{ fontSize: '0.75rem', color: '#B3B3B3',}}>
                                                {projectsKeys[order[index]].content}
                                            </p>
                                            </div>

                                            <div className="">
                                            {/* Skills */}
                                            <div className="d-flex flex-wrap gap-2 mb-3">
                                                {projectsKeys[order[index]].skills?.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className=" mil-fs8 badge bg-light text-muted fw-normal me-2 mb-2"
                                                    style={{
                                                        backgroundColor: 'rgba(115, 118, 123, 0.1)',
                                                        color: '#B3B3B3',
                                                        padding: '0.2rem 1rem',
                                                        borderRadius: '50px',
                                                        fontSize: '0.75rem',
                                                      }}
                                                >
                                                    {skill}
                                                </span>
                                                ))}
                                            </div>

                                            {/* View Project */}
                                            <div
                                                className="d-inline-flex align-items-center gap-1 text-primary small fw-medium text-decoration-none"
                                                style={{
                                                    color: '#fffff',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                  }}
                                            >
                                                <FaExternalLinkSquareAlt className="me-1" size={16} />
                                                View Project
                                            </div>

                                            </div>
                                        </div>

                                        </div>
                                        </a>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mil-project-btn-frame mil-up flex gap-4"
                            style={{paddingBottom: "120px"}}>
                            <Link href="https://behance.net/ibrahimolukokun" target="_blank" className="mil-btn mil-c-gone flex items-center gap-2" >
                            <FaBehance /> Behance
                            </Link>

                            <Link href="https://github.com/ibrahimolukokun" target="_blank" className="mil-btn mil-c-gone flex items-center gap-2" >
                            <FaGithub /> GitHub
                            </Link>
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
