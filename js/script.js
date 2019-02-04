var filterizd = $('.main').filterizr({
//options object
});

$( "button#jQueryColorChange" ).click(function() {
  $(this).toggleClass( "selected" );
});

$( "button#reset" ).click(function() {
  $("button#jQueryColorChange").removeClass( "selected" );
});

