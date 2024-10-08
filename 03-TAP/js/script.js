$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu li");
    const $tabCon = $(".tab-con-item");
    const bgColor = ["red", "green", "blue"];

    // 처음 세팅
    tabAction(0);

    // 탭메뉴를 클리했을 때
    $tabMenu.on("click", function (e) {
        e.preventDefault();
        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tabAction(tabIdx);
    });

    // 공통의 동작을 함수로 정의
    function tabAction(index) {
        // 선택한 메뉴만 on클래스 부여
        $tabMenu.removeClass("on");
        $tabMenu.eq(index).addClass("on");
        // 선택한 메뉴만 설명글 보이기
        $tabCon.hide();
        $tabCon.eq(index).show();
        // index에 의해 body의 배경색 변경
        $("body").css({
            backgroundColor: bgColor[index],
        });
    }
});
