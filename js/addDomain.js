var domain = 'https://kemono-matsuri.japarilibrary.com/';

$(function () {
  var imgSrc = $('img').attr('src')
  var imgSrc4 = imgSrc.slice(0, 4)
  if (imgSrc4 === 'img/') {
    $('img').attr('src', function () {
      $(this).attr('src', domain + $(this).attr('src'))
    })
  }
})