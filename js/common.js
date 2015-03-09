$(document).ready(function() {

    $(".top_tittle").animated("fadeInDown","fadeOutUp");
    $(".animation_photo").animated("bounceIn", "fadeOut");
    $(".animation_left").animated("bounceInLeft", "fadeOutLeft");
    $(".animation_right").animated("bounceInRight","fadeOutRight");
    $(".top_description, .section_header").animated("fadeInUp","fadeOutDown");
    $(".social_wrap a").hover(
        function(){
            $(".social_wrap a:hover i").addClass("zoomIn animated");
        },
        function() {
            $(".social_wrap a i").removeClass("zoomIn animated");
        }
    );
    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });

    $(".toggle_menu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top_menu ul a").click(function(){
        $(".top_menu").fadeOut(600);
        $(".sandwich").toggleClass("active");

    });

    $(".toggle_menu").click(function(){
        if ($(".top_menu").is(":visible")) {
            $(".top_menu").fadeOut(600);
            $(".top_menu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_menu").fadeIn(600);
            $(".top_menu li a").addClass("fadeInUp animated");
        }
    });

    $(".logo_container a").click(function(){
        if ($(".sandwich").hasClass("active")) {
            $(".top_menu").fadeOut(600);
            $(".sandwich").removeClass("active");
        }
    });

    $("a[href*='#']").mPageScroll2id();


});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});