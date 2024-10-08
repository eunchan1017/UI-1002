$(function () {
    // 대상을 변수에 저장
    const $dim = $(".dim");
    const $videoWrap = $(".video-wrap");
    const $video = $(".video iframe");
    const $caption = $(".caption ");
    const $btnClose = $(".btn-close ");

    const $videoItem = $(".video-list li");

    // 비디오 리스트를 선택했을 때
    $videoItem.on("click", function () {
        // console.log($videoItem, $(this));

        // 선택한 li의 data-link 값을 받아서 videoLink 변수에 담기
        const videoLink = $(this).attr("data-link");
        // const videoLink = $(this).data("link");

        // iframe의 src 값으로 videoLink를 전달
        $video.attr("src", videoLink);
        console.log(videoLink);
        // 팝업창 띄우기
        $dim.fadeIn();
        $videoWrap.addClass("active");
    });
    $btnClose.on("click", () => {
        // 팝업창 닫기
        $dim.fadeOut();
        $videoWrap.removeClass("active");
    });

    // setTimeout(동작, 시간);
    // setTimeout(function () {
    //     $dim.fadeIn();
    //     $videoWrap.addClass("active");
    // }, 3000);
});
