(function () {

  //*************************************************************
    // preparing the stick scroll stop for each section of the page
    //*************************************************************

    // var portfolioLocation = 1040;
    // var skillsLocation = 2180;
    // var experienceLocation = 3150;
    // var contactLocation = 4070;
    // var stops = [];
    // stops.push(portfolioLocation);
    // stops.push(skillsLocation);
    // stops.push(experienceLocation);
    // stops.push(contactLocation);

    // var scrollingStopFlag = true;
    // var previousScroll = window.scrollY;

    // var stopIt = function(flag,prev,last,stopPoints){
    //   if(flag){
    //     for(var i in stopPoints){

    //       if(stopPoints[i] === last ||
    //         (last > stopPoints[i] && (last - stopPoints[i]) < 20) ||
    //         (last < stopPoints[i] && (stopPoints[i]- last) < 20)){
    //         return stopPoints[i];
    //       }
    //     }
    //     return false;
    //   }else{
    //     return false;
    //   }
    // };

    // //support for webkit

    // document.addEventListener('mousewheel', function(e){


    //     previousScroll = window.scrollY;
    //     var currentStop = stopIt(scrollingStopFlag,previousScroll,window.scrollY,stops);
    //     if (currentStop) {
    //       window.scrollTo(0,currentStop);
    //       e.preventDefault();
    //       setTimeout(function(){scrollingStopFlag = false;},500);
    //       // scrollingStopFlag = false;
    //     } else {
    //       scrollingStopFlag = true;
    //     }
    // }, false);

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

})();