
let map;

function printMap() {
    map = L.map('map').setView([51.505, -0.09], 13);

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
        pause:10000,

        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  })

  $(document).ready(function() {
    $('#slider_letest_news').lightSlider({
        item:3,
        slideMargin:20,
        speed:400,
        auto:true,
        pause:10000,
        controls: false,
        enableTouch:false,
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
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1,
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
        console.log($(window).scrollTop());
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

})


lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});

