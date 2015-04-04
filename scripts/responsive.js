(function(){
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

    // adjusting slider dimensions

    var spectProjectHeigth = $('.main-port-box').height()/2;

    $('.main-box-top').css("transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");

    $('.main-box-top').css("-webkit-transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("-webkit-transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-top').css("-moz-transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("-moz-transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-top').css("-ms-transform","rotate3d( 1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");
    $('.main-box-bottom').css("-ms-transform","rotate3d( -1, 0, 0, 90deg) translate3d(0,0,"+spectProjectHeigth+"px)");


    // cambiando a javascript nativo, gracias chrome d shit!

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

    // adjusting project detail
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

    // ajust side decoration panle size
    $('#side-decoration').css("height", $('#content').css("height"));
  });

})();