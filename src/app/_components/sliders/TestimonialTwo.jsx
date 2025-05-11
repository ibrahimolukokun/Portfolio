"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

import Data from '@data/sliders/testimonial-2';

const TestimonialTwoSlider = () => {
  return (
    <>
      {/* reviews  */}
      <div className="mil-768-p-0-120">
          <div className="container">
              <div className="row mil-aic mil-jcb mil-768-jcc">
                  <div className="col-0 col-md-4">
                      <img src={Data.photo.url} alt={Data.photo.alt} style={{"width":"100%"}} className="mil-reviews-image mil-up" />
                  </div>
                  <div className="col-11 col-md-7">
                      <Swiper
                        {...SliderProps.milReviewsSlider}
                        className="swiper-container mil-reviews-slider mil-c-swipe"
                      >
                              {Data.items.map((item, key) => (
                                <SwiperSlide className="swiper-slide" key={`testimonial2-slider-item-${key}`}>
                                  <div className="mil-review mil-left" data-swiper-parallax="20%" data-swiper-parallax-scale="0.5" data-swiper-parallax-opacity="0">
                                      <p className="mil-text mil-fs30 mil-light mil-mb60  mil-up">{item.text}</p>
                                      <h6 className="mil-fs18 mil-mb15  mil-up">{item.name}</h6>
                                      <div className="mil-up">{item.role}</div>
                                  </div>
                                </SwiperSlide>
                              ))}
                      </Swiper>
                  </div>
              </div>
          </div>
      </div>
      {/* reviews end  */}
    </>
  );
};
export default TestimonialTwoSlider;
