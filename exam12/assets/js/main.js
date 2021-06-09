
let map;

function printMap() {
    map = L.map('map').setView([40.716912222196974, -74.00593036049936], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
}


map_link.addEventListener('click', function(){
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "plagins/lafleat/leaflet.css");
    document.head.append(link);
    let script = document.createElement("script");
    script.setAttribute("src", 'plagins/lafleat/leaflet.js');
    document.body.append(script);
    script.onload = printMap;
    map_link.remove();
    map_img.remove();
});


$(document).ready(function() {
    $('#slider_big').lightSlider({
        item:1,
        vertical:true,
        controls:false,
        slideMargin:0,
        speed:400,
        auto:true,
        pause:5000,
        enableTouch:false,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  })

  $(document).ready(function() {
    $('#slider_letest_news').lightSlider({
        item:3,
        loop:true,
        slideMargin:20,
        speed:400,
        auto:true,
        pause:5000,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint:650,
                settings: {
                    controls:false,  
                }
            },
            {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1,
                    controls:false,  
                  }
            },
        ],
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  })






   
$(function() {
    $(window) .on('scroll' , function(){

        if($(window).scrollTop()>1){
            $("header") .addClass("fixed");
        }else {
            $("header") .removeClass("fixed");
        }
    });
});   

$(".soc_list_compresed").click(function() {
    $(".soc_list_compresed_in").toggleClass("uncompresed");


});
$(".soc_list_compresed").click(function() {
    $(".soc_list_compresed").toggleClass("uncompresed_active");

});

$(function() {
    $('#humburger_header').click(function(){
        $(".mobile_menu").addClass("mobile_menu_active");
        $("#menu_shadow").addClass("menu_shadow_active")
    });
    $("#menu_shadow").click(function(){
        $(".mobile_menu").removeClass("mobile_menu_active");
        $("#menu_shadow").removeClass("menu_shadow_active");
    });
    $("#hamburger_mb").click(function(){
        $(".mobile_menu").removeClass("mobile_menu_active");
        $("#menu_shadow").removeClass("menu_shadow_active");
    });

    $("#scroll").click(function() { 
        $('html, body').animate({
            scrollTop: $(".what_we_do_section").offset().top  
        }, 1000); 
    });
    $("#submite").click(function(){


    })

})


lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});




$(function(){


    $(function(){
        let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        let mail = $('#mail');
        
        mail.blur(function(){
        if(mail.val() != ''){
        if(mail.val().search(pattern) == 0){
        $('#valid').text('valid');
        $("#valid").addClass("green");
        mail.removeClass('error').addClass('ok');
        }else{
        $('#valid').text('not valid');
        mail.addClass('error');
        }
        }else{
        $('#valid').text('email area is empty!');
        mail.addClass('error');
        }
        });
       });
    
    $(function(){
        let pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        let name = $("#name");
    
        name.blur(function(){
            if(name.val() != ''){
                if(name.val().search(pattern) == 0) {
                    $('#valid_name').text('valid'); 
                    name.removeClass('error').addClass('ok');
                    $("#valid_name").addClass("green");

                }else{
                    $('#valid_name').text('not valid');
                    name.addClass('error');
                    }
                    }else{
                    $('#valid_name').text('email area is empty!');
                    name.addClass('error');
                    }
        });
    });
})



