"use client";

import Link from "next/link";
import Image from 'next/image';

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const ShowcasePortfolioSlider = ( { projects, order, slidesTitles, showContactInLatestSlide = 0, contactLineOne, contactLineTwo } ) => {

    let projectsKeys = {};
    let sliderItems = [];

    projects.forEach((item) => {
        projectsKeys[item.id] = item;
    });

    order.forEach((order_key) => {
        sliderItems.push(projectsKeys[order_key]);
    });

    return (
        <>
            {/* portfolio */}
            <div className="container">
                <Swiper
                    {...SliderProps.milPortfolioFsSlider}
                    className="swiper-container mil-portfolio-fs-slider"
                    style={{"overflow": "visible"}}
                >
                        {sliderItems.map((item, key) => (
                        <SwiperSlide className="swiper-slide" key={`portfolio-fs-slider-item-${key}`}>
                            <div className="mil-portfolio-slide">
                                <div className="mil-cover" data-swiper-parallax="50%" data-swiper-parallax-scale="1.7" data-swiper-parallax-opacity="0">
                                    <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 75vw" alt={item.title} />
                                </div>
                                <div className="mil-work-descr" data-swiper-parallax-opacity="0" data-swiper-parallax-scale=".7">
                                    {showContactInLatestSlide == 1 && sliderItems.length == key+1 ? (
                                    <>
                                        <h1 className="mil-fs68 mil-mb30">{contactLineOne.textBefore} <Link href={contactLineOne.textLinkUrl} className="mil-text-link mil-accent mil-c-gone">{contactLineOne.textLinkLabel}</Link>{contactLineOne.textAfter}</h1>
                                        <p className="mil-text mil-fs26 mil-light">{contactLineTwo.textBefore} <Link href={contactLineTwo.textLinkUrl} className="mil-text-link mil-light mil-c-gone">{contactLineTwo.textLinkLabel}</Link>{contactLineTwo.textAfter}</p>
                                    </>
                                    ) : (
                                    <>
                                        <h1 className="mil-fs68 mil-mb30" dangerouslySetInnerHTML={{__html : slidesTitles[key]}} />
                                        <Link href={`/projects/${item.id}`} className="mil-btn mil-btn-link mil-c-gone">See work<i className="fas fa-arrow-right"></i></Link>
                                    </>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default ShowcasePortfolioSlider;
