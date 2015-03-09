$(document).ready(function() {

    $(".portfolio_grid").mixItUp();

    $(".section_portfolio li").click(function() {
        $(".section_portfolio li").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".top_tittle").animated("fadeInDown","fadeOutUp");
    $(".animation_photo").animated("flipInY", "flipOutY");
    $(".animation_left").animated("bounceInLeft", "fadeOut");
    $(".animation_right").animated("bounceInRight","fadeOut");
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

    $('.popup').magnificPopup({type:'image'});

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

    $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});