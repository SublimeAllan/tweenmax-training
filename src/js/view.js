var View = (function(){
  var View = function(){
  }

  View.prototype = {
    animateLanding: function(title, subtitle) {
      var tl = new TimelineMax()
      tl.from(title, 0.5, {opacity: 0, y: 30, ease: Power4.easeOut}, '+=0.5')
        .from(subtitle, 0.5, {opacity: 0, y: 30, ease: Power4.easeOut})
    },

    colorNavbar: function(navbar) {
      var scrollMagicController = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.Continue'})
                                      .offset(window.innerHeight/2 - 60)
                                      .setClassToggle('.Nav', 'colored')
                                      .addTo(scrollMagicController)
    },

    animateKeepScrolling: function(title, subtitle) {
      var tl = new TimelineMax()
      tl.from(title, 0.5, {opacity: 0, y: 30, ease: Power4.easeOut}, '+=0.5')
        .from(subtitle, 0.5, {opacity: 0, y: 30, ease: Power4.easeOut})

      var controller = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.Continue'})
                                        .setTween(tl)
                                        .reverse(false)
                                        .addTo(controller)
    },

    parallaxAboutMe: function(leftImage, rightImage, duration) {
      var tl = new TimelineMax()
      tl.fromTo(leftImage, 0.5, {y: -70}, {y: 0})
        .fromTo(rightImage, 0.5, {y: -70}, {y: 0}, '-=0.5')

      var controller = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.AboutMe'})
                                        .setTween(tl)
                                        .duration(duration)
                                        .addTo(controller)
    },

    staggerProjects: function(elements) {
      var tween = TweenMax.staggerFrom(elements, 0.5, {scale: 0, ease: Back.easeOut}, 0.5)

      var controller = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.Projects'})
                                        .setTween(tween)
                                        .reverse(false)
                                        .addTo(controller)
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
