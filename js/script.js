window.onload = function () {
    /* fullpage */
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['Main', 'Intro', 'NEWS', 'Hire', 'Footer'],
        navigation: true,
        navigationTooltips: ['한국전력KPS', '기업소개', '', '채용공고', '기타소개'],
        showActiveTooltip: true,
        navigationPosition: 'right',
        menu: '#menu',
        responsiveWidth: 767,
        afterResponsive: function (isResponsive) {
        }
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3.2,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 0,
            },
        },
    });
    
    //모바일메뉴
    let openBtn = document.querySelector('.open');
    let mobileOpenBtn = document.querySelector('.m_open');
    let closeBtn = document.querySelector('.close');
    let mobileNav = document.querySelector('.m_nav');
    let tabNav = document.querySelector('.t_nav');
    tabNav.style.display = 'none';
    mobileNav.style.display = 'none';

    openBtn.onclick = function () {
        if (tabNav.style.display == 'none') {
            tabNav.style.display = 'block'
        } else { tabNav.style.display = 'none' }
    }

    mobileOpenBtn.onclick = function () {
        if (mobileNav.style.display == 'none') {
            mobileNav.style.display = 'block'
        } else { mobileNav.style.display = 'none' }
    }

    closeBtn.onclick = function () {
        if (mobileNav.style.display == 'block') {
            mobileNav.style.display = 'none'
        }
    }

    //nav 2차메뉴
    let depth01 = mobileNav.querySelectorAll('.depth01');
    let depth02 = mobileNav.querySelectorAll('.depth02');

    for (let i = 0; i < depth02.length; i++) {
        depth02[i].style.display = 'none';
    }

    for (let i = 0; i < depth02.length; i++) {
        let depth01Children0 = depth01[i].children[0];
        let depth01Children = depth01[i].children[1];

        depth01[i].onclick = function () {
            if (depth01Children.style.display == 'none') {
                depth01Children.style.display = 'block';
                depth01Children0.style.color = '#279BF3';
            } else {
                depth01Children.style.display = 'none';
                depth01Children0.style.color = '#fff';
            }
        }
    }
}