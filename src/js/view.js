var View = (function(){
  var View = function(){
  }

  View.prototype = {
    animateLanding: function(title, subtitle) {
      // On crée notre timeline. for = on défini l'état de départ de l'objet à animer. L'état final est défini en CSS
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
      // On crée notre timeline. for = on défini l'état de départ de l'objet à animer. L'état final est défini en CSS
      var tl = new TimelineMax()
      tl.from(title, 0.5, {opacity: 0, y: 30, ease: Power4.easeOut}, '+=0.5')
        .from(subtitle, 0.5, {opacity: 0, y: 30, ease: Power4.easeOut})

      // On crée un controller pour contenir notre scene
      var controller = new ScrollMagic.Controller()
      // On crée notre scene.
      // triggerElement = l'element qui doit arriver au milieu de l'écran pour lancer le reste
      // setTween sert à lier notre animation TweenMax au scroll
      // reverse false = ne joue pas mon animation à l'envers quand je remonte
      var scene = new ScrollMagic.Scene({triggerElement: '.Continue'})
                                        .setTween(tl)
                                        .reverse(false)
                                        .addTo(controller)
    },

    parallaxAboutMe: function(leftImage, rightImage, duration) {
      var tl = new TimelineMax()
      tl.fromTo(leftImage, 0.5, {y: -70}, {y: 0})
        .fromTo(rightImage, 0.5, {y: -70}, {y: 0}, '-=0.5')

      // Duration  = nombre de pixel sur lequel le scroll lancera l'animation
      var controller = new ScrollMagic.Controller()
      var scene = new ScrollMagic.Scene({triggerElement: '.AboutMe'})
                                        .setTween(tl)
                                        .duration(duration)
                                        .addTo(controller)
    },

    staggerProjects: function(elements) {
      // Stagger = animation sur une liste d'élément
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
        // On défini que la bordure est en tiret et on dit que l'espace entre les tirets = la longueur complète de la bordure. Ca permet de tout cacher.
        tl.fromTo(element, 0.5, {strokeDashoffset: length, strokeDasharray: length}, {strokeDashoffset: 0}, '-=0.2')
          .fromTo(element, 0.1, {fill: 'transparent'}, {fill: '#FFFFFF'})
      }

      return tl
    }

  }
  return View
})()
