"use strict";

var map;

function printMap() {
  map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

map_link.addEventListener('click', function () {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "plagins/lafleat/leaflet.css");
  document.head.append(link);
  var script = document.createElement("script");
  script.setAttribute("src", 'plagins/lafleat/leaflet.js');
  document.body.append(script);
  script.onload = printMap;
  map_link.remove();
  map_img.remove();
});
$(function () {
  $(".slider_big").slick({
    autoplay: true,
    autoplaySpeed: 200000,
    slidesToScroll: 1,
    verticalSwiping: true,
    vertical: true,
    arrows: false,
    dots: true
  });
});
$(function () {
  $(".slider_letest_news").slick({
    autoplay: true,
    autoplaySpeed: 200000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});
$(function () {
  $(window).on('scroll', function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $(".hamburger, #menu_shadow").on('click', function () {
    $("body").toggleClass("open");
  });
  $("#menu_shadow").on('click', function () {
    $(".hamburger_header button").removeClass("is-active");
  });
});
$(".soc_list_compresed").click(function () {
  $(".soc_list_compresed_in").toggleClass("uncompresed");
});
$(".soc_list_compresed").click(function () {
  $(".soc_list_compresed").toggleClass("uncompresed_active");
});