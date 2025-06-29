//"use client";

//import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

import Data from "@data/sections/portfolio.json";
import Link from "next/link";
import Image from 'next/image';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaBehance, FaGithub } from 'react-icons/fa';


const PortfolioSection = ( { heading = {"subitle": "", "title": "", "description": ""}, paddingTop = 120, paddingBottom = 60, projects, order={[
    "Project-1", "Project-2", "Project-4", "Project-3", "Project-6", "Project-5" ]}, btnBorder = true } ) => {

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
                                {[0, 1, 2, 3, 4, 5].map((index) => {
                                    const project = projectsKeys[order[index]];
                                    if (!project || !project.image) return null; // Safeguard

                                    return (
                                        <div className="col" key={index}>
                                        <a
                                            href={project.link}
                                            className="view-project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div
                                            className="card h-100 shadow border-0"
                                            style={{ backgroundColor: '#14151A' }}
                                            >
                                            {/* Image */}
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="card-img-top img-fluid rounded-top mil-scale-img "
                                                data-value-1="0.8"
                                                data-value-2="1"
                                                style={{
                                                objectFit: 'cover',
                                                height: '250px',
                                                display: 'block',
                                                width: '100%',
                                                }}
                                            />

                                            {/* Content */}
                                            <div className="card-body d-flex flex-column justify-content-between p-4">
                                                <div className="gap-3 mb-3">
                                                <p
                                                    className="mil-tag-text mb-2 text-muted"
                                                    style={{ fontSize: '0.7rem' }}
                                                >
                                                    {project.category}
                                                </p>
                                                <h4 className="mil-title-text fw-bold mb-3 text-white">
                                                    {project.title}
                                                </h4>
                                                <p
                                                    className="text-secondary mb-3"
                                                    style={{
                                                    fontSize: '0.75rem',
                                                    color: '#B3B3B3',
                                                    }}
                                                >
                                                    {project.content}
                                                </p>
                                                </div>

                                                <div>
                                                {/* Skills */}
                                                <div className="d-flex flex-wrap gap-2 mb-3">
                                                    {project.skills?.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="skill-badge mil-fs8 badge text-muted fw-normal me-2 mb-2"
                                                        style={{
                                                        backgroundColor: 'rgba(255, 87, 34, 0.05)',
                                                        color: '#B3B3B3',
                                                        padding: '0.2rem 0.5rem',
                                                        borderRadius: '50px',
                                                        fontSize: '0.7rem',
                                                        border: '1px solidrgba(255, 86, 34, 0.87)',
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                    ))}
                                                </div>

                                                {/* View Project */}
                                                <div
                                                    className="d-inline-flex align-items-center gap-1 text-primary small fw-medium text-decoration-none view-link"
                                                    style={{
                                                    color: '#ff5722',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    transition: 'color 0.3s ease',
                                                    cursor: 'pointer',
                                                    }}
                                                >
                                                    <FaExternalLinkSquareAlt className="me-1 view-icon" size={16} />
                                                    View Project
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    );
                                    })}

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
