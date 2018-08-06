var domain = 'https://kemono-matsuri.japarilibrary.com/'

$('img:not([rel=external])').each(function () {
  if ($(this).attr('src').slice(0, 4) === 'img/' && $(this).attr('src').slice(0, 4)) {
    $(this).attr('src', function () {
      $(this).attr('src', domain + $(this).attr('src'))
    })

  }
})