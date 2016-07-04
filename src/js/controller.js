var Controller = (function(){
  var Controller = function(view){
    this.view = view
    this.animateLanding()
    this.colorNavbar()
  }

  Controller.prototype = {
    animateLanding: function() {
      this.view.animateLanding(
        document.querySelector('.Landing_title'),
        document.querySelector('.Landing_subtitle')
      )
    },
    colorNavbar: function() {
      this.view.colorNavbar(
        document.querySelector('.Nav')
      )
    }
  }
  return Controller
})()
