$(function () {
    // 대상을 변수에 저장
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
});
