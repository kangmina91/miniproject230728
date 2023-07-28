$(function () {
  // 윈도우 크기가  768보다 작을 때 작동해라
  if ($(window).width() < 768) {
    $(".Main__content .section").addClass("on");
  }

  // 풀페이지
  $(".Main__content").fullpage({
    anchors: ["overview", "complex", "club_xian", "sysclein", "system"],
    navigation: false,
    css3: false,
    responsiveWidth: 768,

    // 초기 셋팅
    afterRender: function () {
      if ($(window).width() > 768)
        $(".Main__content .section").eq(0).addClass("on");
    },
    // 전환되고 나서
    afterLoad: function (lnk, idx) {
      // 윈도우 크기가  768보다 클 때 작동해라
      if ($(window).width() > 768)

        if (idx == 6) {
          // idx 가 6일 때 애니메이션 한번만 작동하고 멈추게 함.
          $(".Main__content .section")
            .eq(idx - 1)
            .addClass("on");
        } else {
          $(".Main__content .section")
            .eq(idx - 1)
            .addClass("on")
            .siblings()
            .removeClass("on");
        }
    },
    // 전환되기 직전에
    beforeLeave: function (idx, nidx, dir, origin) { },
    // 전환되는 중에
    onLeave: function (idx, nidx, dir) {
      // 풀페이지 메뉴 작동 시키기
      $(".gnb li")
        .eq(nidx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");


      // 페이지별로 헤더 색 맞춰주기
      if (nidx == 2) {
        if ($(window).width() > 768)
          $(".gnb").addClass("on");
        $(".header").addClass("on");
        $(".header h1").addClass("on");
      } else if (nidx == 3 || nidx == 4) {
        if ($(window).width() > 768)
          $(".gnb").addClass("on");
        $(".header").addClass("on");
        $(".header h1").removeClass("on");
      } else {
        if ($(window).width() > 768)
          $(".gnb").removeClass("on");
        $(".header").removeClass("on");
        $(".header h1").removeClass("on");
      }
    },
  });


  // 모바일 메뉴 작동
  $('.gnb>ul>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
      // 풀페이지에서는  e.preventDefault(); 를 지워야 메뉴 터치 시 이동이 가능
      //e.preventDefault();
      $(this).next().stop().slideToggle();
    }
  });

  // 모바일 버튼  작동
  $('.mobile_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  })


  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
  })


  //탭
  $(".sub02 .tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".sub02 .tab_content .con")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");

    console.log(
      event,
      event.target,
      event.currentTarget,
      $(this),
      $(this).index()
    );
  });
});
