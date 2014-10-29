(function(){

  $(document).ready(function(){

    //ajusting size of section dynamically
    var screenHeight = 600;
    if(window.innerHeight && window.innerHeight >= 600){
      screenHeight = window.innerHeight;
    };
    $(".section-container").css("height",String(screenHeight));

    // responsive box on the map menu

    var blueBoxSize = $('#box1').height();
    $('.box .left-face').css('width',String(blueBoxSize));
    $('.box .right-face').css('width',String(blueBoxSize));

    var trans_size = blueBoxSize / 2;

    $('.box').css('transform','translate3d(0, 0, -'+trans_size+'px)');
    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.link_map').css("transform","translate3d(0, 0,"+trans_size+"px)");
    $('.bottom-face').css("transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+trans_size+"px)");
    $('.top-face').css("transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+trans_size+"px,0)");
    var box_long = $("#box1").width() - (blueBoxSize/2);
    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");


    // hover for map boxes

    $('.box').mouseenter(function(e){
      var proObj = {
        "-webkit-animation": "dribling .3s linear",
        "-moz-animation":    "dribling .3s linear",
        "-o-animation":      "dribling .3s linear",
        "animation":         "dribling .3s linear",
        "transform": "rotate3d( 1, 0, 0, 15deg)"
      }
      $(this).css(proObj);
    })
    .mouseleave(function(e){
      var blueBoxSize = $('#box1').height();
      var trans_size = blueBoxSize / 2;

        var proObj = {
        "-webkit-animation": "none",
        "-moz-animation":    "none",
        "-o-animation":      "none",
        "animation":         "none",
        "transform": 'translate3d(0, 0, -'+trans_size+'px)'
      }

      $(this).css(proObj);
    });


    $('#box2').on( "mouseenter", function(){
      $('#box3').css("z-index","3")
      $('#box2').css("z-index","4");
    } );

    $('#box3').on( "mouseenter", function(){
      $('#box3').css("z-index","4")
    } );

    // initializing slider dimensions

    var spectProjectHeigth = $('.main-port-box').height()/2;

    $('.main-box-top').css("transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");


    $('.main-port-box').css("transform","translate3d(0,0,-"+spectProjectHeigth+"px)" );
    $('.main-box-back').css("transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    // project detail styling
    var spectProjectLength = $('.project-detail').width()/2;

    $('.detail-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.project-detail').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");
    $('.detail-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");


    $('.spects-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.project-spects').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");
    $('.spects-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    // initializing slider controller

    // var switchBox = $('#box-sc1').height();
    // $('.box-sc .left-face-sc').css('width',String(switchBox));
    // $('.box-sc .right-face-sc').css('width',String(switchBox));

    // var switchBoxHalf = switchBox / 2;

    // $('.box-sc').css('transform','translate3d(0, 0, -'+switchBoxHalf+'px)');
    // $('.right-face-sc').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+switchBoxHalf+"px)");
    // $('.left-face-sc').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+switchBoxHalf+"px)");
    // $('.front-face-sc').css("transform","translate3d(0, 0,"+switchBoxHalf+"px)");
    // $('.bottom-face-sc').css("transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+switchBoxHalf+"px)");
    // $('.top-face-sc').css("transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+switchBoxHalf+"px,0)");
    // var box_long = $("#box-sc1").width() - (switchBox/2);
    // $('.right-face-sc').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");

    //*************************************************************
    // preparing the stick scroll stop for each section of the page
    //*************************************************************

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

    var stopIt = function(flag,prev,last,stopPoints){
      if(flag){
        for(var i in stopPoints){

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

    //
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

    //
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

    //*************************************************************
    // function to rotate the slider
    //*************************************************************

    // function to rotate the main box

    // Notes
    // 3d matrix with 0 rotation:
    // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -245, 1)
    // 3d matrix with 90 rotation:
    // matrix3d(1, 0, 0, 0, 0, 6.12323399573677e-17, -1, 0, 0, 1, 6.12323399573677e-17, 0, 0, 0, -245, 1)
    // 3d matrix with 180 rotation:
    // matrix3d(1, 0, 0, 0, 0, -1, -1.22464679914735e-16, 0, 0, 1.22464679914735e-16, -1, 0, 0, 0, -245, 1)
    // 3d matrix with 270 rotation:
    // matrix3d(1, 0, 0, 0, 0, -1.83697019872103e-16, 1, 0, 0, -1, -1.83697019872103e-16, 0, 0, 0, -245, 1)

	});

  $( window ).resize(function() {

    //ajusting size of section dynamically
     var screenHeight = 600;
    if(window.innerHeight && window.innerHeight >= 600){
      screenHeight = window.innerHeight;
    };
    $(".section-container").css("height",String(screenHeight));

    // map or inex resizing

    var blueBoxSize = $('#box1').height();
    $('.box .left-face').css('width',String(blueBoxSize));
    $('.box .right-face').css('width',String(blueBoxSize));

    var trans_size = blueBoxSize / 2;

    $('.box').css('transform','translate3d(0, 0, -'+trans_size+'px)');
    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.link_map').css("transform","translate3d(0, 0,"+trans_size+"px)");
    $('.bottom-face').css("transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+trans_size+"px)");
    $('.top-face').css("transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+trans_size+"px,0)");
    var box_long = $("#box1").width() - (blueBoxSize/2);
    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");

    // adjusting slider dimensions

    var spectProjectHeigth = $('.main-port-box').height()/2;

    $('.main-box-top').css("transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");


    $('.main-port-box').css("transform","translate3d(0,0,-"+spectProjectHeigth+"px)" );
    $('.main-box-back').css("transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    // adjusting project detail
    var spectProjectLength = $('.project-detail').width()/2;

    $('.detail-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.project-detail').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");
    $('.detail-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");


    $('.spects-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.project-spects').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");
    $('.spects-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");



  });

})();
