$(document).ready(function () {
  //figcaption内に米印の注意書きがあれば文字を赤くする
  $("figcaption:contains('※')").addClass("red-text");
})