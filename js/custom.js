$(function () {
    $('.section').addClass('on');
    if ($(window).width() > 768) {



        $('.Main__content').fullpage({
            anchors: ['main', 'complex', 'club_xian', 'sysclein', 'system'],
            navigation: false,
            css3: false,
            // 반응형에서 fullpage 안하기
            // scrollBar: true,
            //responsiveHeight: 1200,
            // easing: 'easeInOutCubic',
            // easingcss3: 'ease',

            // 초기 셋팅
            afterRender: function () {
                $('.section').eq(0).addClass('on')
            },
            // 전환되고 나서
            afterLoad: function (lnk, idx) {
                console.log(lnk, idx)

                if (idx == 6) {
                    $('.section').eq(idx - 1).addClass('on');
                } else {
                    $('.section').eq(idx - 1).addClass('on').siblings().removeClass('on');
                }
            },
            // 전환되기 직전에
            beforeLeave: function (idx, nidx, dir, origin) {


            },
            // 전환되는 중에
            onLeave: function (idx, nidx, dir) {
                $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');


                console.log(idx, nidx, dir)


                if (nidx == 2) {
                    $('.gnb').addClass('on');
                    $('.header').addClass('on');
                    $('.header h1').addClass('on');

                } else if (nidx == 3 || nidx == 4) {
                    $('.gnb').addClass('on');
                    $('.header').addClass('on');
                    $('.header h1').removeClass('on');
                }
                else {
                    $('.gnb').removeClass('on');
                    $('.header').removeClass('on');
                    $('.header h1').removeClass('on');

                }

            }


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
    };

    //탭 
    $('.sub02 .tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        $('.sub02 .tab_content .con').eq(idx).addClass('on').siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());

    });


})