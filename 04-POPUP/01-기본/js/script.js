$(function () {
    // 대상을 변수에 저장
    const $dim = $(".dim");
    const $popup = $(".popup");
    const $btnClose = $(".btn-close");
    $(".wrap a").on("click", (e) => {
        e.preventDefault(); /* a태그의 기본 동작 취소 */
        $dim.fadeIn();
        $popup.addClass("active");
    });
    $btnClose.on("click", () => {
        $dim.fadeOut();
        $popup.removeClass("active");
    });
});
