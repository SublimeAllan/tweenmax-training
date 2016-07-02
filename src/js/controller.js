var Controller = (function(){
  var Controller = function(view){
    this.view = view
    this.animateLanding()
  }

  Controller.prototype = {
    animateLanding: function() {
      this.view.animateLanding(
        document.querySelector('.Landing_title'),
        document.querySelector('.Landing_subtitle')
      )
    }
  }
  return Controller
})()
