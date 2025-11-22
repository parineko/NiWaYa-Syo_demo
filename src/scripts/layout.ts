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

        // メニューリンクをクリックしたらメニューを閉じる
        const menuLinks = menuList.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // オーバーレイをクリックしたらメニューを閉じる
        if (menuOverlay) {
            menuOverlay.addEventListener('click', function() {
                closeMenu();
            });
        }

        // ウィンドウリサイズ時にメニューを閉じる
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
        });

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
            if (href !== '#' && href.length > 1) {
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
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // アニメーション対象要素を監視
    const animateElements = document.querySelectorAll('.fade-up');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// 初期化関数をエクスポート
export default function initLayout() {
    if (typeof window === 'undefined') {
        return;
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initMobileMenu();
            initScrollTop();
            initSmoothScroll();
            initScrollAnimation();
        });
    } else {
        // DOMContentLoadedが既に発火している場合
        initMobileMenu();
        initScrollTop();
        initSmoothScroll();
        initScrollAnimation();
    }
}


