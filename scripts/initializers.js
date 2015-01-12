(function(){

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

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
      $('.about a').css('color','white');
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
      $('.about a').css('color','black');
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


    // $('.main-port-box').css("transform","translate3d(0,0,-"+spectProjectHeigth+"px)" );
    var mainPortBox = document.getElementsByClassName('main-port-box')[0];
    mainPortBox.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectHeigth+", 1)";

    console.log('3d ajudstment',spectProjectHeigth);
    $('.main-box-back').css("transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    // project detail styling
    var spectProjectLength = $('.project-detail').width()/2;

    $('.detail-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.detail-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    var projectDetail = document.getElementsByClassName('project-detail')[0];
    projectDetail.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";

    // $('.project-detail').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");


    $('.spects-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.spects-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    var projectSpects = document.getElementsByClassName('project-spects')[0];
    projectSpects.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";

    // $('.project-spects').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          console.log('target',target.selector)
          switch(target.selector) {
            case "#portfolio":
              var delay = 1000;
              break;
            case "#knowledge":
              var delay = 1500;
              break;
            case "#experience":
              var delay = 2000;
              break;
            case "#contact":
              var delay = 2500;
              break;
          };
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length && delay) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, delay);
              return false;
          }
      }
    });

    // parallax
    $('#blob-container').css("width", $('body').css('width'));
    $('#blob-container').css("height",$('body').css('height'));
  });

})();
