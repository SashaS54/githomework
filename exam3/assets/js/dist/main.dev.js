"use strict";

$(function () {
  $(window).on('scroll', function () {
    //header===================
    if ($(window).scrollTop() > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $("#tools_menu_button").click(function () {
    $("#tools_menu").toggleClass("opened");
  });
  $("main, footer").click(function () {
    $("#tools_menu").removeClass("opened");
  }); //header===================
  //mb=========================

  $("#mobile_menu_button").click(function () {
    $("#mobile_menu").addClass('mb_opened');
    $(".shadow").addClass("shadow_opened");
  });
  $(".shadow").click(function () {
    $("#mobile_menu").removeClass('mb_opened');
    $(".shadow ").removeClass('shadow_opened');
  });
  $("#mobile_menu_in_mb").click(function () {
    $("#mobile_menu").removeClass("mb_opened");
    $(".shadow").removeClass("shadow_opened");
  }); //mb=========================
  //tabs======================

  $(".tab_btn").click(function (e) {
    e.preventDefault();
    $('.tab_btn').removeClass('tab_active');
    $('.tab_el').removeClass('tab_active');
    $(this).addClass('tab_active');
    $($(this).attr('href')).addClass('tab_active');
  });
  $(".tab_btn:first").click(); //tabs======================
  //slider==========================

  $('#prdocuts_slider').lightSlider({
    item: 3,
    slideMargin: 20,
    loop: true,
    slideMove: 1,
    speed: 400,
    auto: true,
    pause: 5000,
    responsive: [{
      breakpoint: 850,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 500,
      settings: {
        item: 1
      }
    }]
  });
  $('#coments_slider').lightSlider({
    item: 1,
    loop: true,
    speed: 1400,
    auto: true,
    pause: 5000
  }); //slider================
  //search==============

  $("#search").click(function () {
    $(".search").addClass("opened");
    $(".shadow").addClass("shadow_opened");
    $("#search_input").focus();
  });
  $("#search_submite").click(function (e) {
    e.preventDefault();
    $(".search").removeClass("opened");
    $(".shadow").removeClass("shadow_opened");
  });
  $(".shadow").click(function () {
    $(".search").removeClass("opened");
  }); //search==============
  //ppus=======
  //ppus=======
  //text s viezdom===============

  $(".circle-plus").click(function (e) {
    e.preventDefault();
  });
  $('.circle-plus').on('click', function () {
    $(this).toggleClass('opened');
    $($(this).attr('href')).toggleClass('open');
  });
  $('.circle-plus-two').on('click', function () {
    $(this).toggleClass('opened');
    $($(this).attr('href')).removeClass('open');
  }); //text s viezdom===============
  //scroll======

  $(".scroll").click(function () {
    $('html, body').animate({
      scrollTop: $(".abbout_us_section").offset().top
    }, 1000);
  }); //scroll======
  //

  $(function (e) {
    $("#submite").preventDefault();
  });
  $();
  $("#email").keyup(function () {
    if (validateEmail()) {
      $("#email").removeClass("notvalid");
      $("#email").addClass("valid");
    } else {
      $("#email").addClass("notvalid");
      $("#submite").attr("disabled");
    }

    buttonState();
  });
}); //

function buttonState() {
  if (validateEmail()) {} else {}
} //


function validateEmail() {
  var email = $("#email").val();
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
}