import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

function animateTitle(element: HTMLElement) {
  if (!element) return;
  
  // data-title属性からテキストを取得
  const text = element.getAttribute('data-title') || '';
  if (!text) return;
  
  // アニメーションクラスを削除してリセット
  element.classList.remove('animate');
  
  // 既存の内容をクリア
  element.innerHTML = '';
  
  // 各文字をspanで囲む
  const chars = text.split('');
  chars.forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${index * 0.1}s`;
    element.appendChild(span);
  });
  
  // 強制的に再フローを発生させてからアニメーションクラスを追加
  void element.offsetWidth;
  
  // 2フレーム待ってからアニメーションを開始（確実に適用されるように）
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.add('animate');
    });
  });
}

function animateSubtitle(element: HTMLElement) {
  if (!element) return;
  
  // リセット
  element.style.opacity = '0';
  element.style.transform = 'translateY(10px)';
  element.classList.remove('fade-in');
  
  // タイトルの文字数に応じて遅延を調整
  const titleElement = element.previousElementSibling as HTMLElement;
  const titleText = titleElement?.getAttribute('data-title') || '';
  const delay = Math.min(titleText.length * 0.1 + 0.5, 1.2) * 1000;
  
  setTimeout(() => {
    element.classList.add('fade-in');
  }, delay);
}

export default function initHeroSlider() {
  const swiperEl = document.querySelector('.hero-swiper');
  if (!swiperEl) return;
  
  const heroSwiper = new Swiper('.hero-swiper', {
    modules: [Autoplay, Pagination, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    speed: 1500,
    on: {
      slideChangeTransitionStart: function() {
        // スライド切り替え開始時に非表示にする
        const slides = this.slides;
        for (let i = 0; i < slides.length; i++) {
          if (slides[i].classList.contains('swiper-slide-active')) {
            const title = slides[i].querySelector('.hero-title') as HTMLElement;
            const subtitle = slides[i].querySelector('.hero-subtitle') as HTMLElement;
            if (title) {
              title.classList.remove('animate');
              title.innerHTML = title.getAttribute('data-title') || '';
            }
            if (subtitle) {
              subtitle.classList.remove('fade-in');
              subtitle.style.opacity = '0';
              subtitle.style.transform = 'translateY(10px)';
            }
          }
        }
      },
      slideChangeTransitionEnd: function() {
        // スライド切り替え完了後にアニメーションを開始
        const slides = this.slides;
        
        // 現在表示されているスライドを探す
        let activeSlide: Element | null = null;
        for (let i = 0; i < slides.length; i++) {
          if (slides[i].classList.contains('swiper-slide-active')) {
            activeSlide = slides[i];
            break;
          }
        }
        
        if (!activeSlide) return;
        
        const title = activeSlide.querySelector('.hero-title') as HTMLElement;
        const subtitle = activeSlide.querySelector('.hero-subtitle') as HTMLElement;
        
        if (title) {
          // テキストを確実に取得
          const titleText = title.getAttribute('data-title') || '';
          if (titleText) {
            title.setAttribute('data-title', titleText);
            setTimeout(() => {
              animateTitle(title);
            }, 100);
          }
        }
        if (subtitle) {
          setTimeout(() => {
            animateSubtitle(subtitle);
          }, 100);
        }
      },
      init: function() {
        // 初期表示時のアニメーション
        setTimeout(() => {
          const slides = this.slides;
          
          let activeSlide: Element | null = null;
          for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('swiper-slide-active')) {
              activeSlide = slides[i];
              break;
            }
          }
          
          if (!activeSlide) return;
          
          const title = activeSlide.querySelector('.hero-title') as HTMLElement;
          const subtitle = activeSlide.querySelector('.hero-subtitle') as HTMLElement;
          
          if (title) {
            const titleText = title.getAttribute('data-title') || '';
            if (titleText) {
              title.setAttribute('data-title', titleText);
              animateTitle(title);
            }
          }
          if (subtitle) {
            animateSubtitle(subtitle);
          }
        }, 500);
      }
    }
  });
}

