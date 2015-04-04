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

    var box_long = $("#box1").width() - (blueBoxSize/2);

    $('.box').css('transform','translate3d(0, 0, -'+trans_size+'px)');
    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.link_map').css("transform","translate3d(0, 0,"+trans_size+"px)");
    $('.bottom-face').css("transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+trans_size+"px)");
    $('.top-face').css("transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+trans_size+"px,0)");
    $('.right-face').css("transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");

    $('.box').css('-webkit-transform','translate3d(0, 0, -'+trans_size+'px)');
    $('.right-face').css("-webkit-transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("-webkit-transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.link_map').css("-webkit-transform","translate3d(0, 0,"+trans_size+"px)");
    $('.bottom-face').css("-webkit-transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+trans_size+"px)");
    $('.top-face').css("-webkit-transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+trans_size+"px,0)");
    $('.right-face').css("-webkit-transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");

    $('.box').css('-moz-transform','translate3d(0, 0, -'+trans_size+'px)');
    $('.right-face').css("-moz-transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("-moz-transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.link_map').css("-moz-transform","translate3d(0, 0,"+trans_size+"px)");
    $('.bottom-face').css("-moz-transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+trans_size+"px)");
    $('.top-face').css("-moz-transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+trans_size+"px,0)");
    $('.right-face').css("-moz-transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");

    $('.box').css('-ms-transform','translate3d(0, 0, -'+trans_size+'px)');
    $('.right-face').css("-ms-transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.left-face').css("-ms-transform","rotate3d( 0, -1, 0, 90deg ) translate3d(0, 0,"+trans_size+"px)");
    $('.link_map').css("-ms-transform","translate3d(0, 0,"+trans_size+"px)");
    $('.bottom-face').css("-ms-transform","rotate3d( -1, 0, 0, 90deg )   translate3d(0, 0, "+trans_size+"px)");
    $('.top-face').css("-ms-transform","rotate3d( 1, 0, 0, 90deg )   translate3d(0, -"+trans_size+"px,0)");
    $('.right-face').css("-ms-transform","rotate3d( 0, 1, 0, 90deg ) translate3d(0, 0,"+box_long+"px)");


    // hover for map boxes

    $('.box').mouseenter(function(e){
      var proObj = {
        "-webkit-animation": "dribling .3s linear",
        "-moz-animation":    "dribling .3s linear",
        "-o-animation":      "dribling .3s linear",
        "animation":         "dribling .3s linear",
        "transform": "rotate3d( 1, 0, 0, 15deg)",
        "-webkit-transform": "rotate3d( 1, 0, 0, 15deg)",
        "-moz-transform": "rotate3d( 1, 0, 0, 15deg)",
        "-ms-transform": "rotate3d( 1, 0, 0, 15deg)"

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
        "-webkit-transform": 'translate3d(0, 0, -'+trans_size+'px)',
        "-moz-transform": 'translate3d(0, 0, -'+trans_size+'px)',
        "-ms-transform": 'translate3d(0, 0, -'+trans_size+'px)',
        "transform": 'translate3d(0, 0, -'+trans_size+'px)',
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

    $('.main-box-top').css("-webkit-transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("-webkit-transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");

    $('.main-box-top').css("-moz-transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("-moz-transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");

    $('.main-box-top').css("-ms-transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("-ms-transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");


    // $('.main-port-box').css("transform","translate3d(0,0,-"+spectProjectHeigth+"px)" );
    var mainPortBox = document.getElementsByClassName('main-port-box')[0];
    mainPortBox.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectHeigth+", 1)";
    mainPortBox.style.webkitTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectHeigth+", 1)";
    mainPortBox.style.mozTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectHeigth+", 1)";
    mainPortBox.style.msTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectHeigth+", 1)";

    $('.main-box-back').css("transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    $('.main-box-back').css("-webkit-transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("-webkit-transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    $('.main-box-back').css("-moz-transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("-moz-transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    $('.main-box-back').css("-ms-transform","rotate3d( 0, 1, 0, 180deg) rotate3d(0, 0, 1, 180deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-front').css("-ms-transform","translate3d(0,0,"+spectProjectHeigth+"px)");

    // project detail styling
    var spectProjectLength = $('.project-detail').width()/2;

    $('.detail-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.detail-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    $('.detail-box-right').css("-webkit-transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("-webkit-transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("-webkit-transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.detail-box-back').css("-webkit-transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    $('.detail-box-right').css("-moz-transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("-moz-transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("-moz-transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.detail-box-back').css("-moz-transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    $('.detail-box-right').css("-ms-transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-left').css("-ms-transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.detail-box-front').css("-ms-transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.detail-box-back').css("-ms-transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    var projectDetail = document.getElementsByClassName('project-detail')[0];
    projectDetail.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";
    projectDetail.style.webkitTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";
    projectDetail.style.mozTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";
    projectDetail.style.msTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";

    // $('.project-detail').css("transform","translate3d(0, 0, -"+spectProjectLength+"px)");


    $('.spects-box-right').css("transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.spects-box-back').css("transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    $('.spects-box-right').css("-webkit-transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("-webkit-transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("-webkit-transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.spects-box-back').css("-webkit-transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    $('.spects-box-right').css("-moz-transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("-moz-transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("-moz-transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.spects-box-back').css("-moz-transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    $('.spects-box-right').css("-ms-transform","rotate3D(0,1,0,90deg) translate3d(" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-left').css("-ms-transform","rotate3d(0,-1,0,90deg) translate3d(-" + spectProjectLength + "px, 0, 0)" );
    $('.spects-box-front').css("-ms-transform","translate3d(0, 0, "+spectProjectLength+"px)");
    $('.spects-box-back').css("-ms-transform","translate3d(0, 0, -"+spectProjectLength+"px) rotate3d(0,1,0,180deg)");

    var projectSpects = document.getElementsByClassName('project-spects')[0];
    projectSpects.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";
    projectSpects.style.webkitTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";
    projectSpects.style.mozTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";
    projectSpects.style.msTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -"+spectProjectLength+", 1)";

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

    // inicialize side decoration dimentions
    $('#side-decoration').css("height", $('#content').css("height"));

  });

})();
