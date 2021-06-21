$(function(){
    $(window) .on('scroll' , function(){

        //header===================
        

        if($(window).scrollTop()>1){
            $("header") .addClass("fixed");
        }else {
            $("header") .removeClass("fixed");
        }
        //header===================





    });
    
        //tabs======================

        $(".tab_btn").click(function(e){
            e.preventDefault();

            $('.tab_btn').removeClass('tab_active');
            $('.tab_el').removeClass('tab_active');

            $(this).addClass('tab_active'); 
            $($(this).attr('href')).addClass('tab_active')
        }); 

        $(".tab_btn:first").click()




        //tabs======================


    //slider==========================
    $('#prdocuts_slider').lightSlider({
        item:3,
        slideMargin:40,
        loop:true,
    });

    $('#coments_slider').lightSlider({
        item:1,
        loop:true,
    });













    //slider================

    //ppus=======

        //ppus=======
      //text s viezdom===============
    $(".circle-plus").click(function(e){
        e.preventDefault();
    });


    $('.circle-plus').on('click', function(){
        $(this).toggleClass('opened');
        
        $($(this).attr('href')).toggleClass('open');
      })
      
      $('.circle-plus-two').on('click', function(){
        $(this).toggleClass('opened');
        $($(this).attr('href')).removeClass('open')
      })




      //text s viezdom===============

})

