// モバイルメニューの開閉
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;

    if (menuToggle && menuList) {
        const closeMenu = function() {
            menuList.classList.remove('active');
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
            }
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        };

        const openMenu = function() {
            menuList.classList.add('active');
            if (menuOverlay) {
                menuOverlay.classList.add('active');
            }
            menuToggle.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden';
        };

        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // メニューリンククリック時にメニューを閉じる
        const menuLinks = menuList.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // オーバーレイクリックまたはタッチ時にメニューを閉じる
        if (menuOverlay) {
            menuOverlay.addEventListener('click', function() {
                closeMenu();
            });
            menuOverlay.addEventListener('touchstart', function() {
                closeMenu();
            }, { passive: true });
        }

        // メニューリストの外側タップ・クリック検知（メニュー外ならどこを触っても確実に閉じる）
        const handleOutsideInteraction = function(e: MouseEvent | TouchEvent) {
            if (menuList.classList.contains('active')) {
                const target = e.target as HTMLElement | null;
                if (target && !menuList.contains(target) && !menuToggle.contains(target)) {
                    closeMenu();
                }
            }
        };

        document.addEventListener('click', handleOutsideInteraction);
        document.addEventListener('touchstart', handleOutsideInteraction, { passive: true });

        // ウィンドウサイズ変更時にメニューを閉じる
        window.addEventListener('resize', function() {
            if (window.innerWidth > 921) {
                closeMenu();
            }
        });
    }
}

// スクロールトップボタン
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        // スクロール位置に応じてボタンを表示/非表示
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        }, { passive: true });

        // クリックでトップにスクロール
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// スムーススクロール（アンカーリンク用）
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// スクロールアニメーション（Intersection Observer）
function initScrollAnimation() {
    const animateElements = document.querySelectorAll('.fade-up, .fade-in-left, .fade-in-right');
    if (!animateElements.length) return;

    if (!('IntersectionObserver' in window)) {
        // IntersectionObserver非対応ブラウザは即座に表示
        animateElements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observerOptions: IntersectionObserverInit = {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        // 初期ビューポート内にある場合は即座に表示してチラつきを防止
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-visible');
        } else {
            observer.observe(el);
        }
    });
}

// 初期化関数をエクスポート
export default function initLayout() {
    if (typeof window === 'undefined') {
        return;
    }
    
    const run = () => {
        initMobileMenu();
        initScrollTop();
        initSmoothScroll();
        initScrollAnimation();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
}
