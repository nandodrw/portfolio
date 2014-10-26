(function(){

  $(document).ready(function(){

    //ajusting size of section dynamically
    var screenHeight = 600;
    if(window.innerHeight){
      screenHeight = window.innerHeight;
    };
    $(".section-container").css("height",String(screenHeight));


    var portfolioLocation = 1440;
    var skillsLocation = 2180;
    var experienceLocation = 3150;
    var contactLocation = 4070;
    var stops = [];
    stops.push(portfolioLocation);
    stops.push(skillsLocation);
    stops.push(experienceLocation);
    stops.push(contactLocation);


    var scrollingStopFlag = true;
    var previousScroll = window.scrollY;

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

    //*************************************************************
    // preparing the stick scroll stop for each section of the page
    //*************************************************************

    var stopIt = function(flag,prev,last,stopPoints){
      if(flag){
        for(var i in stopPoints){
          console.log("other flag:",stopPoints[i] > last > stopPoints[i],"prev:",prev,"last:",last);
          if(stopPoints[i] === last ||
            (last > stopPoints[i] && (last - stopPoints[i]) < 20) ||
            (last < stopPoints[i] && (stopPoints[i]- last) < 20)){
            return stopPoints[i];
          }
        }
        return false;
      }else{
        return false;
      }
    };

    //support for webkit

    document.addEventListener('mousewheel', function(e){

        console.log("win position",window.scrollY);
        previousScroll = window.scrollY;
        var currentStop = stopIt(scrollingStopFlag,previousScroll,window.scrollY,stops);
        if (currentStop) {
          window.scrollTo(0,currentStop);
          e.preventDefault();
          setTimeout(function(){scrollingStopFlag = false;},500);
          // scrollingStopFlag = false;
        } else {
          scrollingStopFlag = true;
        }
    }, false);

    // support for IE

    // document.attachEvent('onmousewheel', function(e){

    //     console.log("win position",window.scrollY);
    //     previousScroll = window.scrollY;
    //     var currentStop = stopIt(scrollingStopFlag,previousScroll,window.scrollY,stops);
    //     if (currentStop) {
    //       window.scrollTo(0,currentStop);
    //       if (!e) var e = window.event;
    //       e.returnValue = false;
    //       e.cancelBubble = true;
    //       setTimeout(function(){scrollingStopFlag = false;},1000);
    //     } else {
    //       scrollingStopFlag = true;
    //     }
    //      return false;
    // }, false);

    // support for Opera

    // document.attachEvent('mousewheel', function(e){

    //   console.log("win position",window.scrollY);
    //   previousScroll = window.scrollY;
    //   var currentStop = stopIt(scrollingStopFlag,previousScroll,window.scrollY,stops);
    //   if (currentStop) {
    //     window.scrollTo(0,currentStop);
    //     if (!e) var e = window.event;
    //     e.returnValue = false;
    //     e.cancelBubble = true;
    //     return false;
    //     setTimeout(function(){scrollingStopFlag = false;},1000);
    //   } else {
    //     scrollingStopFlag = true;
    //   }
    // }, false);

    //support for Mozilla

    document.addEventListener('DOMMouseScroll', function(e){

      console.log("win position",window.scrollY);
        previousScroll = window.scrollY;
        var currentStop = stopIt(scrollingStopFlag,previousScroll,window.scrollY,stops);
        if (currentStop) {
          window.scrollTo(0,currentStop);
          // e.stopPropagation();
          e.preventDefault();
          // e.cancelBubble = false;
          return false;
          setTimeout(function(){scrollingStopFlag = false;},1000);
        } else {
          scrollingStopFlag = true;
        }
}, false);

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

    //ajusting size of section dynamically
    var screenHeight = 600;
    if(window.innerHeight){
      screenHeight = window.innerHeight;
    };
    $(".section-container").css("height",String(screenHeight));


  });

})();
