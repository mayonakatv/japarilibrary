var domain = 'https://kemono-matsuri.japarilibrary.com/';

$(function () {
  if ($('img').attr('src').str.slice(0, 4) === 'img') {
    $('img').attr('src', function () {
      $(this).attr('src', domain + $(this).attr('src'))
    })
  }
})