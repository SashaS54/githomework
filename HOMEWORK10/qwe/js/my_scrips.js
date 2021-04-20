$(function() {
    $(window) .scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>100){
            $("header") .addClass("fixed");
        }else {
            $("header") .removeClass("fixed");
        }
    });

    $(".hamburger, #menu_shadow").click(function(){
        $(this).toggleClass("is-active");
        $("body").toggleClass("open");
    });
    $("#menu_shadow").click(function(){
        $(".hamburger_header button").removeClass("is-active");
    });
    $("#hamburger_opened").click(function(){
        $(".hamburger_header button").removeClass("is-active");
    });
    $(".mb_link").click(function(){
        $("body").toggleClass("open");
        $(".hamburger_header button").removeClass("is-active");
    });
    $("#message_button").click(function(){
        $("#message").toggleClass("closed");
    });
    $(".button_for_mobile_menu").click(function(){
        $("body .shadow").toggleClass("open");
        $(modal_menu).toggleClass("open");
    });
    $(".prives_policy_button").click(function(){
        $("body .shadow").removeClass("open");
        $(modal_menu).removeClass("open");
    });
});    