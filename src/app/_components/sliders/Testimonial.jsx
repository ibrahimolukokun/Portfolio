"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = ( { items, paddingTop = 120, paddingBottom = 120 } ) => {
  return (
    <>
      {/* reviews */}
      <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
          <div className="container">
              <div className="row mil-jcc">
                  <div className="col-lg-8">
                      <Swiper
                        {...SliderProps.milReviewsSlider}
                        className="swiper-container mil-reviews-slider mil-c-swipe"
                      >
                        {items.map((item, key) => (
                          <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>
                            <div className="mil-review" data-swiper-parallax="20%" data-swiper-parallax-scale="0.5" data-swiper-parallax-opacity="0">
                                <div className="mil-user mil-mb60 mil-up">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <p className="mil-text mil-fs30 mil-light mil-tac mil-mb60  mil-up">{item.text}</p>
                                <h6 className="mil-fs18 mil-mb15  mil-up">{item.name}</h6>
                                <div className="mil-up">{item.role}</div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>    
                  </div>
                  <div className="col-10 col-md-5 mil-relative">
                      <div className="mil-reviews-nav mil-up">
                          <div className="mil-slider-btn mil-prev mil-c-gone">
                              <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.25 8.74984H23.2325L19.1162 12.8661C18.6281 13.3542 18.6281 14.1455 19.1162 14.6336C19.3606 14.878 19.68 14.9998 20 14.9998C20.32 14.9998 20.6394 14.878 20.8838 14.6336L27.1338 8.38359C27.3681 8.14984 27.5 7.83172 27.5 7.49984C27.5 7.16797 27.3681 6.85047 27.1338 6.61609L20.8838 0.366094C20.3956 -0.122031 19.6044 -0.122031 19.1162 0.366094C18.6281 0.854219 18.6281 1.64547 19.1162 2.13359L23.2325 6.24984H1.25C0.56 6.24984 0 6.80984 0 7.49984C0 8.18984 0.56 8.74984 1.25 8.74984Z" fill="black" />
                              </svg>

                          </div>
                          <div className="mil-slider-btn mil-next mil-c-gone">
                              <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.25 8.74984H23.2325L19.1162 12.8661C18.6281 13.3542 18.6281 14.1455 19.1162 14.6336C19.3606 14.878 19.68 14.9998 20 14.9998C20.32 14.9998 20.6394 14.878 20.8838 14.6336L27.1338 8.38359C27.3681 8.14984 27.5 7.83172 27.5 7.49984C27.5 7.16797 27.3681 6.85047 27.1338 6.61609L20.8838 0.366094C20.3956 -0.122031 19.6044 -0.122031 19.1162 0.366094C18.6281 0.854219 18.6281 1.64547 19.1162 2.13359L23.2325 6.24984H1.25C0.56 6.24984 0 6.80984 0 7.49984C0 8.18984 0.56 8.74984 1.25 8.74984Z" fill="black" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* reviews end */}
    </>
  );
};
export default TestimonialSlider;
