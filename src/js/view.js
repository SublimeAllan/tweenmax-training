var View = (function(){
  var View = function(){
  }

  View.prototype = {
    animateLanding: function(title, subtitle) {
    },

    colorNavbar: function(navbar) {
      var scrollMagicController = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.Continue'})
                                      .offset(window.innerHeight/2 - 60)
                                      .setClassToggle('.Nav', 'colored')
                                      .addTo(scrollMagicController)
    },

    writeWord: function() {
    },

    preparePath: function($el) {
      var lineLength = $el.getTotalLength();
      $el.style.strokeDasharray = lineLength;
      return lineLength;
    }

  }
  return View
})()
