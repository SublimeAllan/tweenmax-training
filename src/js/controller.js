var Controller = (function(){
  var Controller = function(view){
    this.view = view
    this.colorNavbar()
    this.animateLanding()
    this.animateKeepScrolling()
    this.parallaxAboutMe()
    this.staggerProjects()
    this.writeWord()
  }

  Controller.prototype = {
    colorNavbar: function() {
      this.view.colorNavbar(
        document.querySelector('.Nav')
      )
    },
    animateLanding: function() {
      this.view.animateLanding(
        document.querySelector('.Landing_title'),
        document.querySelector('.Landing_subtitle')
      )
    },
    animateKeepScrolling: function() {
      this.view.animateKeepScrolling(
        document.querySelector('.Continue_title'),
        document.querySelector('.Continue_subtitle')
      )
    },
    parallaxAboutMe: function() {
      this.view.parallaxAboutMe(
        document.querySelector('.AboutMe_image--left'),
        document.querySelector('.AboutMe_image--right'),
        document.querySelector('.AboutMe').clientHeight
      )
    },
    staggerProjects: function() {
      this.view.staggerProjects(document.querySelectorAll('.Projects_card'))
    },
    writeWord: function() {
      this.view.writeWord(
        [
          document.querySelector('#s'),
          document.querySelector('#a'),
          document.querySelector('#y'),
          document.querySelector('#h'),
          document.querySelector('#e'),
          document.querySelector('#l'),
          document.querySelector('#l2'),
          document.querySelector('#o'),
          document.querySelector('#bang')
        ],
        [
          this.preparePath(document.querySelector('#s')),
          this.preparePath(document.querySelector('#a')),
          this.preparePath(document.querySelector('#y')),
          this.preparePath(document.querySelector('#h')),
          this.preparePath(document.querySelector('#e')),
          this.preparePath(document.querySelector('#l')),
          this.preparePath(document.querySelector('#l2')),
          this.preparePath(document.querySelector('#o')),
          this.preparePath(document.querySelector('#bang'))
        ],
        document.querySelector('.Contact_textarea').offsetTop - document.querySelector('.Contact').offsetTop
      )
    },
    preparePath: function($el) {
      return lineLength = $el.getTotalLength();
    }
  }
  return Controller
})()
