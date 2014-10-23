(function(){

  $(document).ready(function(){

  	var trans_size = $("#box1").width();
  	trans_size = trans_size - 25;

    $('#box2').on( "mouseenter", function(){
      $('#box3').css("z-index","3")
      $('#box2').css("z-index","4");
    } );

    $('#box3').on( "mouseenter", function(){
      $('#box3').css("z-index","4")
    } );

		$('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0, 25px)");

  	var detailProjectLength = $('.project-detail').width()/2;

    $('.detail-box-right').css("transform","rotate3D(0,1,0,-90deg) translate3d(" + detailProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("transform","rotate3d(0,1,0,90deg) translate3d(-" + detailProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("transform","translate3d(0, 0, "+detailProjectLength+"px)");
    $('.project-detail').css("transform","translate3d(0, 0, -"+detailProjectLength+"px)");
    $('.detail-box-back').css("transform","translate3d(0, 0, -"+detailProjectLength+"px)");

    var spectProjectLength = $('.project-detail').width()/2;

    $('.spects-box-right').css("transform","rotate3D(0,1,0,-90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("transform","rotate3d(0,1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.project-spects').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");
    $('.spects-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");

	});

  $( window ).resize(function() {


    var trans_size = $("#box1").width();

    trans_size = trans_size - 25;

    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0, 25px)");

    var detailProjectLength = $('.project-detail').width()/2;

    $('.detail-box-right').css("transform","rotate3D(0,1,0,-90deg) translate3d(" + detailProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("transform","rotate3d(0,1,0,90deg) translate3d(-" + detailProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("transform","translate3d(0, 0, "+detailProjectLength+"px)");
    $('.project-detail').css("transform","translate3d(0, 0, -"+detailProjectLength+"px)");
    $('.detail-box-back').css("transform","translate3d(0, 0, -"+detailProjectLength+"px)");

    var spectProjectLength = $('.project-detail').width()/2;

    $('.spects-box-right').css("transform","rotate3D(0,1,0,-90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("transform","rotate3d(0,1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.project-spects').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");
    $('.spects-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");

  });

})();
