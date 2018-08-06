$(function () {
  flag = 0;
  $('.openBtn').click(function () {
    $(this).next('.textArea').slideToggle('normal', toggleText);
  });
  function toggleText() {
    if (flag == 0) {
      $(this).prev('.openBtn').text("非表示");
      flag = 1;
    } else {
      $(this).prev('.openBtn').text("表示する");
      flag = 0;
    }
  }
});
$(function () {
  flag = 0;
  $('.openBtn2').click(function () {
    $(this).next('.textArea').slideToggle('normal', toggleText);
  });
  function toggleText() {
    if (flag == 0) {
      $(this).prev('.openBtn2').text("非表示");
      flag = "1";
    } else {
      $(this).prev('.openBtn2').text("過去の中止事例を表示する");
      flag = "0";
    }
  }
});

//https://qiita.com/Takuya_Kouyama/items/b815eb5e1f85d819b4d8
$(function () {
  // #にダブルクォーテーションが必要
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

$(document).ready(function () {
  var pagetop = $('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

//menu dropdown
$(document).ready(function () {
  $(".dropdown-trigger").dropdown({
    hover: false
  });
});

//Mateliarize Carousel
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var carouselInstances = M.Carousel.init(elems);
});
$(document).ready(function () {
  $('.carousel').carousel({
    duration: 200,
    indicators: true,
    numVisible: -1,
    padding: 200
  });
  //https://stackoverflow.com/questions/36581504/materialize-carousel-slider-autoplay
  setTimeout(autoplay, 5000);
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var mobileElems = document.querySelectorAll('.sidenav');
  var mobileInstances = M.Sidenav.init(mobileElems);
});
$(document).ready(function () {
  $('.sidenav').sidenav();
  /*$('.sidenav li a').on('click tap', function () {
    $('.sidenav').sidenav().slideToggle()
  })*/
});