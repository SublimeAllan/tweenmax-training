var View = (function(){
  var View = function(){
  }

  View.prototype = {
    colorNavbar: function(navbar) {
      var scrollMagicController = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.Continue'})
                                      .offset(window.innerHeight/2 - 60)
                                      .setClassToggle('.Nav', 'colored')
                                      .addTo(scrollMagicController)
    },

    animateLanding: function(title, subtitle) {

    },

    animateKeepScrolling: function(title, subtitle) {

    },

    parallaxAboutMe: function(leftImage, rightImage, duration) {

    },

    staggerProjects: function(elements) {

    },

    writeWord: function(elements, lengths, duration) {
      var tl = this.prepareTimeline(elements, lengths)

      var controller = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.Contact'})
                                        .setTween(tl)
                                        .reverse(false)
                                        .addTo(controller)
    },

    prepareTimeline: function(elements, lengths) {
      var tl = new TimelineMax()

      var lg = elements.length;

      for(var i = 0; i < lg; i++) {
        var element = elements[i]
        var length = lengths[i]
        tl.fromTo(element, 0.5, {strokeDashoffset: length, strokeDasharray: length}, {strokeDashoffset: 0}, '-=0.2')
          .fromTo(element, 0.1, {fill: 'transparent'}, {fill: '#FFFFFF'})
      }

      return tl
    }

  }
  return View
})()
