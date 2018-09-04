//addDomain.js
var domain = 'https://kemono-matsuri.japarilibrary.com/';

$('img:not([rel=external])').each(function () {
  if ($(this).attr('src').slice(0, 4) === 'img/' && $(this).attr('src').slice(0, 4)) {
    $(this).attr('src', function () {
      $(this).attr('src', domain + $(this).attr('src'))
    })
  }
})

$(function () {
  //遅延読み込み:addLazyloadCss.js
  //https://qiita.com/terrierscript/items/3ad3c0eded587e432aa5
  //req, https://oxynotes.com/?p=10810
  //req, https://wemo.tech/207
  $('div.addLazyloadCss').find('img').addClass('lazyload');
})

$(function () {
  //externalLinks.js
  //rel externalを新しいタブで開く
  $('a[rel="external"]').click(function () {
    window.open($(this).attr("href"));
    return false;
  });

  //title source を追加
  //https://www.sejuku.net/blog/37402
  //https://www.sejuku.net/blog/33609
  $('a[rel="external"]').each(function () {
    $(this).prop('title')
      ? $(this).attr('title', $(this).attr('title') + ' source')
      : $(this).prop('title', 'source')
  })

  //external 用のiconを追加
  $('a[rel="external"]').html(function () {
    $(this).html($(this).html() + ' <i class="fas fa-external-link-alt"></i>');
  })
})

//http://exrecord.net/how-to-create-overlay-and-modal-window-in-jquery
//deleted

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

$(document).ready(function () {
  $('.cycle').cyclotron({ dampingFactor: 1, autorotation: 2 });
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

$(function () {
  $("#menu li").hover(function () {
    $(this).children('ul').slideDown('fast');
  }, function () {
    $(this).children('ul').slideUp('fast');
  })
})


$(document).ready(function () {
  //kome-red.js
  //figcaption内に米印の注意書きがあれば文字を赤くする
  $("figcaption:contains('※')").addClass("red-text");
})