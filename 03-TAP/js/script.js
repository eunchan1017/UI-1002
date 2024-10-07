$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu li");
    const $tabCon = $(".tab-con-item");

    // 처음 세팅
    $tabMenu.removeClass("on");
    $tabMenu.eq(0).addClass("on");
    $tabCon.hide();
    $tabCon.eq(0).show();

    // 탭메뉴를 클리했을 때
    $tabMenu.on("click", function (e) {
        e.preventDefault();
        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);
        // 선택한 메뉴만 on클래스 부여
        $tabMenu.removeClass("on");
        $tabMenu.eq(tabIdx).addClass("on");
        // 선택한 메뉴만 설명글 보이기
        $tabCon.hide();
        $tabCon.eq(tabIdx).show();
    });
});
