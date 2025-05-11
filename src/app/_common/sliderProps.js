import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Parallax,
  FreeMode,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
  Parallax,
  FreeMode,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderProps = {
  milPortfolioSlider: {
    parallax: true,
    autoHeight: true,
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    scrollbar: {
        el: ".mil-pagination",
    },
    on: {
        slideChangeTransitionEnd: function () {
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        }
    }
  },
  milReviewsSlider: {
    parallax: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
        prevEl: '.mil-reviews-nav .mil-prev',
        nextEl: '.mil-reviews-nav .mil-next',
    },
    on: {
        slideChangeTransitionEnd: function () {
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        }
    }
  },
  milStoreSlider: {
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    breakpoints: {
        992: {

        },
    },
  },
  milPortfolioFsSlider: {
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    breakpoints: {
        992: {

        },
    },
    mousewheel: {
        sensitivity: 1,
    },
  },
  milPortfolioFsSlider2: {
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
        prevEl: '.mil-port-nav .mil-prev',
        nextEl: '.mil-port-nav .mil-next',
    },
    breakpoints: {
        992: {

        },
    },
    mousewheel: {
        sensitivity: 1,
    },
  }
};
