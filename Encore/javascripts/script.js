jQuery(function ($) {
  'use strict';

  //Initiat WOW JS
  new WOW().init();

  (function(){
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');
  }());

  $(window).scroll(function(){
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("sticky-nav");
    } else {
      $(".navbar-fixed-top").removeClass("sticky-nav");
    }
  });

  (function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() != 0) {
        $('.backtotop').fadeIn();
      } else {
        $('.backtotop').fadeOut();
      }
    });

    $('.backtotop').on('click',function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  }());

  (function(){
    if (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(".nav .dropdown").on('focusin', function(){
        $(this).find(".dropdown-menu").each(function(){
          $(this).css({"display":'block','opacity':'1','top':'60px'});
        });
      }).on('focusout', function(){
        $(this).find(".dropdown-menu").each(function(){
          $(this).css({"display":'block','opacity':'0','top':'0px'});
        });
      });
    }
  }());

  (function (){
    $('.team-block .card-front').hover(
      function(){
        $(this).find('img').attr('src', function(i, attr){
          return attr.replace('_bw.jpg', '.jpg');
        });
      },
      function(){
        $(this).find('img').attr('src', function(i, attr){
          return attr.replace('.jpg', '_bw.jpg');
        });
      }
    );
  }());
});