"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

const ProductImages = ( { items } ) => {
  return (
    <>
        <Swiper
            {...SliderProps.milStoreSlider}
            className="swiper-container mil-store-slider mil-mb120 mil-c-swipe"
            style={{"overflow": "visible"}}
        >
            {items.map((item, key) => (
            <SwiperSlide className="swiper-slide" key={`product-images-slider-item-${key}`}>
                <div className="mil-store-item-preview" data-swiper-parallax="0" data-swiper-parallax-opacity=".5">
                    <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 75vw" priority alt={item.alt} data-swiper-parallax-scale=".7" />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
};
export default ProductImages;
