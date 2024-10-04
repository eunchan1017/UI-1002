$(function () {
    // 대상을 변수에 저장
    const $window = $(window);
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300; // 0.3초
    // 메뉴에 마우스가 들어왔을 때
    $menu.on("mouseenter", function () {
        // .stop() : 현재 진행 중인 애니메이션 즉시 중지
        $submenu.stop().slideDown(duration);
        // 활성화 메뉴 Class 넣기
        $(this).addClass("on");
        // 서브 슬라이드 배경색 추가
        $header.addClass("active");
    });
    // 메뉴에 마우스가 나갔을 때
    $menu.on("mouseleave", function () {
        $submenu.stop().slideUp(duration);
        $(this).removeClass("on");
        $header.removeClass("active");
    });
    // 마우스 휠을 조작했을 때
    $window.on("wheel", function (e) {
        // console.log(e);
        if (e.originalEvent.wheelDelta > 0) {
            // 마우스 휠을 올렸을 때
            $header.removeClass("hide");
        } else {
            // 마우스 휠을 내렸을 때
            $header.addClass("hide");
        }
    });
});
