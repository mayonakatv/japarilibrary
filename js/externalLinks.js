
$(function () {
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
  });
})