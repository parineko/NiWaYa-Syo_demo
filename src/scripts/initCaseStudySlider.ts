import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

export default function initCaseStudySlider() {
  const caseStudySwiper = new Swiper('.case-study-swiper', {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    loop: true,
    speed: 600,
  });
}

