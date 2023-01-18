$(document).ready(function(){
  $('.popup-image').click(function() {
    var image = $(this);
    var src = image.attr('src');

    $('body').append(
      '<div class="popup-overlay">' +
      '<img src="' + src + '" class="popup-image">' +
      '</div>'
    );

    $('.popup-image').animate({'height': '100%'}, 200);

    $('.popup-overlay').click(function() {
      $(this).remove();
    });
  });
});

