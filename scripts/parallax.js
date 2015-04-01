
(function( ) {

  $(document).ready(function(){

    var flyEle1 = $("#ele-1")
    var flyEle2 = $("#ele-2")
    var flyEle3 = $("#ele-3")
    var flyEle4 = $("#ele-4")
    var flyEle6 = $("#ele-6")
    var flyEle7 = $("#ele-7")
    var flyEle8 = $("#ele-8")
    var flyEle9 = $("#ele-9")
    var flyEle10 = $("#ele-10")
    var flyEle11 = $("#ele-11")

    var ticking = false;
    var lastScrollY = 0;

    function onScroll (evt) {

      if(!ticking) {
        ticking = true;
        requestAnimFrame(updateElements);
        lastScrollY = window.scrollY;
      }
    }

    function updateElements () {

      var docHeight = $('#side-decoration').css('height');
      var numdocHeight = parseInt(docHeight.substr(0,docHeight.length-1))
      var relativeY =  window.scrollY/numdocHeight;

      prefix(flyEle1, "transform", "translate3d(0%," +
        pos(5, 20, relativeY, 0, 7, 170) + '%, 0)');

      prefix(flyEle2, "transform", "translate3d(0%," +
        pos(2, 17, relativeY, 0, 5, 210) + '%, 0)');

      prefix(flyEle3, "transform", "translate3d(0%," +
        pos(4, 27, relativeY, 0, 3, 127) + '%, 0)');

      prefix(flyEle4, "transform", "translate3d(0%," +
        pos(5, 7, relativeY, 0, 4) + '%, 0)');

      prefix(flyEle6, "transform", "translate3d(0%," +
        pos(200, 20, relativeY, 0, 3) + '%, 0)');

      prefix(flyEle7, "transform", "translate3d(0%," +
        pos(-10, -20, relativeY, 0, 1) + '%, 0)');

      prefix(flyEle8, "transform", "translate3d(0%," +
        pos(4, 3, relativeY, 0, 1) + '%, 0)');

      prefix(flyEle9, "transform", "translate3d(0%," +
        pos(-3, -7, relativeY, 0, 3) + '%, 0)');

      prefix(flyEle10, "transform", "translate3d(0%," +
        pos(10, 12, relativeY, 0, 9) + '%, 0)');

      prefix(flyEle11, "transform", "translate3d(0%," +
        pos(2, 9, relativeY, 0, 13,600) + '%, 0)');

      ticking = false;
    }

    function pos(base, range, relY, offset, factor, limit) {
      if(relY < 10) {
        factor = factor * 10
      }
      var translation = base + relY * factor * (range - offset);
      if (limit < translation) {
        return limit
      }
      return translation
    }

    function prefix(obj, prop, value) {
      var prefs = ['-webkit-', '-Moz-', '-o-', '-ms-', ''];
      for (var i=0; i < prefs.length; i++) {
        obj.css(prefs[i] + prop, value);
      }
    }

    (function() {

      updateElements(window.scrollY);

    })();

    $(window).scroll(onScroll)

  });

})();
