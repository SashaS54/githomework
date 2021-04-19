   
$(function() {
    $(window) .on('scroll' , function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>740){
            $("header") .addClass("fixed");
        }else {
            $("header") .removeClass("fixed");
        }
    });
    $(".hamburger, #menu_shadow").on('click' , function(){
        $("body").toggleClass("open");
    });
    $("#menu_shadow").on('click' , function(){
        $(".hamburger_header button").removeClass("is-active");
    });
});    
