$(function () {
    gsap.registerPlugin(ScrollTrigger);

    // visual 영역 애니메이션

    const video = $(".video-wrap video").get(0);
    const visualTL = gsap.timeline({ defaults: { duration: 1, ease: "power4.inOut" } });
    visualTL.from(video, { scale: 3, filter: "blur(30px)", duration: 3 });
    visualTL.from(".logo", { y: -100, autoAlpha: 0 }, "<");
    visualTL.from(".gnb li", { y: -100, autoAlpha: 0, stagger: 0.3 }, "-=0.4");
    visualTL.from(".util", { y: -100, autoAlpha: 0 });
    visualTL.from(".visual-title h2", { y: 100 });
    visualTL.from(".visual-title p", { y: 100, autoAlpha: 0 }, "-=0.4");
    visualTL.from(".visual-title .btn-cta", { y: 100, autoAlpha: 0 }, "-=0.4");
    // 1-1. 공통의 요소에 같은 애니메이션 정의
    const secTitle = $(".sec-title");
    console.log(secTitle);
    //forEach() --> jQeury : each();
    secTitle.each((index, item) => {
        gsap.from(item, {
            y: 50,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: item,
                markers: true,
                start: "top 60%",
            },
        });
    });

    // 2.about 영역 애니메이션
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            markers: true,
            id: "about",
            start: "top 50%", // trigger scroller(viewport)
            end: "bottom 30%",
            // play none pause resume reset restart reverse
            toggleActions: "play none reverse none", //onEnter, onLeave, onEnterBack, onLeaveBack
            onEnter: () => video.pause(),
        },
    });
    aboutTl.from(".about figure", { clipPath: "inset(0 100% 0 0)" });
    aboutTl.from(".about p", { y: 50, autoAlpha: 0 });
    // 3. team 애니메이션
    const teamTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".team",
            markers: true,
            start: "top 30%",
            end: "bottom 0%",
            pin: true,
            // scrub: true,
            scrub: 1, // 사용자의 스크롤바를 따라잡기까지의 시간 1초
        },
    });

    teamTL.from(".team-list li figure ", { y: -100, autoAlpha: 0, rotation: 30, stagger: 0.2 });
    teamTL.from(".team-list li dl", { autoAlpha: 0, y: -50, stagger: 0.2 }, "<");
    teamTL.to(".team", { backgroundColor: "#f59", duration: 3 });
    teamTL.from(".btn-with", { autoAlpha: 0, y: -50 }, "-=0.3");
    teamTL.to(".delay", { x: 1, duration: 10 });

    // 4. work 영역 애니메이션
    const workImg = gsap.utils.toArray(".work-con figure img");
    console.log(workImg);
    workImg.forEach((item, index) => {
        gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 50%", end: "bottom 0", markers: true },
        }).from(item, { x: -50, autoAlpha: 0, delay: index * 0.2 });
    });
    // 스코롤바가 상단으로 이동하면 동영상 다시 재생시키기
    $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();
        if (scrollTop === 0) video.play();
    });
});
