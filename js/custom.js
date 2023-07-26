$(function () {


    $('.Main__content').fullpage({
        anchors: ['main', 'complex', 'club_xian'],
        navigation: false,
        css3: false,
        // 반응형에서 fullpage 안하기
        // scrollBar: true,
        //responsiveHeight: 1200,
        // easing: 'easeInOutCubic',
        // easingcss3: 'ease',
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);

            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            if (idx == 1) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
        },

        // css3: true,
        // scrollingSpeed: 700,
        // autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 600,
        // scrollBar: false,
        // easing: 'easeInOutCubic',
        // easingcss3: 'ease',
        // loopBottom: false,
        // loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: false,
        // continuousHorizontal: false,
        // scrollHorizontally: false,
        // interlockedSlides: false,
        // dragAndMove: false,
        // offsetSections: false,
        // resetSliders: false,
        // fadingEffect: false,
        // normalScrollElements: '#element1, .element2',
        // scrollOverflow: true,
        // scrollOverflowMacStyle: false,
        // scrollOverflowReset: false,
        // touchSensitivity: 15,
        // bigSectionsDestination: null,
    });


})