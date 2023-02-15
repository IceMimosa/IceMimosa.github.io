/**
 * 干一些杂七杂八的活
 */
(function($){

  var random = Math.floor(Math.random() * 1000);
  // head 图片渲染
  if (random % 2 == 0) {
    $('#banner #erer').append('<img id="i22" src="http://ice-img.dreamylost.cn/patamon-22.png" width=200 height=230></img>');
    $('#banner #sansan').append('<img src="http://ice-img.dreamylost.cn/patamon-33.png" width=200 height=230></img>');
  } else {
    $('body>header').css('background-color', '#F43F3B');
    $('#textlogo .blog-motto').text('MAGA');
    $('#banner #erer').append('<img id="i22" src="http://ice-img.dreamylost.cn/2021-12-02-143554.jpg" width=180 height=270></img>');
    $('#sansan').css('width', '510');
  }
})(jQuery)