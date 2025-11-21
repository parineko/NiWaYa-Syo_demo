import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

export default function initHeroSlider() {
  const heroSwiper = new Swiper('.hero-swiper', {
    modules: [Autoplay, Pagination, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    speed: 1000,
  });
}

