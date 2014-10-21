(function(){

  var trans_size = $("#box1").width();

  trans_size = trans_size - 25;

  $(document).ready(function(){
		$('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0, 25px)");
	});

  $( window ).resize(function() {
    var trans_size = $("#box1").width();

    trans_size = trans_size - 25;

    $(document).ready(function(){
      $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
      $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0, 25px)");
    });
  });

  $('#box2').on( "mouseenter", function(){
    $('#box3').css("z-index","3")
    $('#box2').css("z-index","4");
  } );

  $('#box3').on( "mouseenter", function(){
    $('#box3').css("z-index","4")
  } );

})();
