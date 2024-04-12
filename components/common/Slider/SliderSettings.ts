import { Sections } from './types';

const screenSizes = {
  sm: 480,
  md: 768,
  xl: 1280,
};

export const getSliderSettings = (section: Sections) => {
  switch (section) {
    case 'mainRequests': {
      return {
        [screenSizes.sm]: {
          slidesPerView: 1,
          spaceBetween: 32,
          watchSlidesProgress: false,
          loop: false,
        },
      };
    }
    case 'feedback': {
      return {
        [screenSizes.sm]: {
          slidesPerView: 1,
          loop: false,
        },
        [screenSizes.md]: {
          slidesPerView: 2,
          spaceBetween: 32,
          loop: false,
        },
        [screenSizes.xl]: {
          slidesPerView: 3,
          spaceBetween: 32,
          loop: false,
        },
      };
    }
    case 'communities': {
      return {
        [screenSizes.sm]: {
          slidesPerView: 1,
          spaceBetween: 32,
          watchSlidesProgress: false,
          loop: false,
        },
      };
    }
    case 'consultRequests': {
      return {
        [screenSizes.md]: {
          slidesPerView: 3,
          spaceBetween: 32,
          loop: false,
        },
        [screenSizes.xl]: {
          slidesPerView: 3,
          spaceBetween: 32,
          loop: false,
        },
      };
    }
  }
};
