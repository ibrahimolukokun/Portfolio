"use client";

import { Masonry } from 'react-masonry'
import { useEffect, useState, useCallback } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';

import Link from "next/link";
import Image from 'next/image';

const ProjectsMasonry = ({ projects, categories, layout = 'grid', limit = 6, filter = 1, columns = 2, container = 'boxed' }) => {
    // Filters & Infinite Loading

    const initialData = projects.slice(0, limit);

    const [data, setData] = useState(initialData);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('Load more');
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
    }, [filterKey]);

    const handleFilterKeyChange = (targetFilter, e) => {
        e.preventDefault();
        setFilterKey(targetFilter);
        let tempData;
        if (targetFilter === '*') {
            tempData = projects.slice(0, page*limit);
        } else {
            let filteredData = projects.filter((item) => {
                return (
                    item.category_slug.includes(targetFilter)
                );
            });
            tempData = filteredData.slice(0, page*limit);
        }
        setData(tempData);
        
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == targetFilter) {
                filter.classList.add("mil-active");
            } else {
                filter.classList.remove("mil-active");
            }
        });
    };

    const loadMoreData = async () => {
        setIsLoading(true);
        let newProjectsData;
        if ( filterKey === "*"  ) {
            newProjectsData = projects.slice(page*limit, (page+1)*limit);
        } else {
            let filteredData = projects.filter((item) => {
                return (
                    item.category_slug.includes(filterKey)
                );
            });
            newProjectsData = filteredData.slice(page*limit, (page+1)*limit);
        }
        if ( newProjectsData.length > 0 ) {
            setLoadingText('Load more');
            setData(currentData => [...currentData, ...newProjectsData]);
            setPage(currentPage => currentPage + 1);
        
            setTimeout(() => {
                ScrollTrigger.refresh();
                setIsLoading(false);
            }, 500);
        } else {
            setLoadingText('No more');
        }
    };

    const onScroll = useCallback(async () => { 
        if (window.innerHeight + window.scrollY >= document.querySelector('.mil-portfolio').offsetTop + document.querySelector('.mil-portfolio').offsetHeight + 50 && !isLoading) {
            await loadMoreData();
        }
    }, [isLoading, page, filterKey]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    let columnClass = 'col-md-6';
    if ( columns == 3 ) {
        columnClass = 'col-md-4';
    }

    return (
      <>
        {/* portfolio */}
        <div className="mil-portfolio mil-p-120-120">
            <div className={container == 'fullwidth' ? "container-fluid" : "container"}>
                {filter == 1 &&
                <div className="row">
                    <div className="col-12 mil-mb60 mil-768-mb90">
                        <div className="mil-filter">
                            <div className="row mil-tac mil-jcc">
                                <div className="col-lg-4 mil-tac mil-mb60 mil-768-mb30 mil-up">
                                    <a href="#." data-filter={`*`} className="mil-active" onClick={ (e) => handleFilterKeyChange("*", e)}>
                                        <h4 className="mil-fs42">All</h4>
                                    </a>
                                </div>
                                {categories.map((item, key) => (
                                <div className="col-lg-4 mil-tac mil-mb60 mil-768-mb30 mil-up" key={`projects-filter-item-${key}`}>
                                    <a href="#." data-filter={`${item.slug}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>
                                        <h4 className="mil-fs42">{item.name}</h4>
                                    </a>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                }
                <Masonry className="row mil-grid">
                    {data.map((item, key) => (
                    <div className={`mil-grid-item ${columnClass} ${item.category_slug}`} data-id={item.id} data-index={key+1} key={`projects-item-${key}`}>
                        <Link href={`/projects/${item.id}`} className="mil-project-card mil-mb30 mil-up mil-c-view">
                            <div className={layout == 'masonry' ? `mil-cover-frame mil-${item.masonrySize == 'horizontal' ? "h" : `${item.masonrySize == 'vertical' ? "v" : "s"}` }` : "mil-cover-frame mil-s"}>
                                <div className="mil-hover-frame">
                                    <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                </div>
                                <div className="mil-hover-overlay"></div>
                            </div>
                        </Link>
                    </div>
                    ))}
                </Masonry>
                <div className="mil-grid-hidden hidden d-none"></div>
                {isLoading &&
                <div className="mil-more-loader mil-up">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="mil-loader">
                        <path d="M20.7812 3.28125C20.7812 5.12695 19.2773 6.5625 17.5 6.5625C15.6543 6.5625 14.2188 5.12695 14.2188 3.28125C14.2188 1.50391 15.6543 0 17.5 0C19.2773 0 20.7812 1.50391 20.7812 3.28125ZM17.5 28.4375C19.2773 28.4375 20.7812 29.9414 20.7812 31.7188C20.7812 33.5645 19.2773 35 17.5 35C15.6543 35 14.2188 33.5645 14.2188 31.7188C14.2188 29.9414 15.6543 28.4375 17.5 28.4375ZM31.7188 14.2188C33.4961 14.2188 35 15.7227 35 17.5C35 19.3457 33.4961 20.7812 31.7188 20.7812C29.873 20.7812 28.4375 19.3457 28.4375 17.5C28.4375 15.7227 29.873 14.2188 31.7188 14.2188ZM6.5625 17.5C6.5625 19.3457 5.05859 20.7812 3.28125 20.7812C1.43555 20.7812 0 19.3457 0 17.5C0 15.7227 1.43555 14.2188 3.28125 14.2188C5.05859 14.2188 6.5625 15.7227 6.5625 17.5ZM7.38281 24.3359C9.22852 24.3359 10.6641 25.7715 10.6641 27.6172C10.6641 29.3945 9.22852 30.8984 7.38281 30.8984C5.60547 30.8984 4.10156 29.3945 4.10156 27.6172C4.10156 25.7715 5.60547 24.3359 7.38281 24.3359ZM27.5488 24.3359C29.3262 24.3359 30.8301 25.7715 30.8301 27.6172C30.8301 29.3945 29.3262 30.8984 27.5488 30.8984C25.7031 30.8984 24.2676 29.3945 24.2676 27.6172C24.2676 25.7715 25.7031 24.3359 27.5488 24.3359ZM7.38281 4.16992C9.22852 4.16992 10.6641 5.67383 10.6641 7.45117C10.6641 9.29688 9.22852 10.7324 7.38281 10.7324C5.60547 10.7324 4.10156 9.29688 4.10156 7.45117C4.10156 5.67383 5.60547 4.16992 7.38281 4.16992Z"/>
                    </svg>
                    <p className="mil-text-16 mil-suptitle mil-light">{loadingText}</p>
                </div>
                }
            </div>
        </div>
        {/* portfolio end */}
      </>
    );
};
export default ProjectsMasonry;
  