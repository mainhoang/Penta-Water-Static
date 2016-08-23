
(function(){
  'use strict';
  // best place to keep finished script (closure)
})();

console.log('js works')

$('.carousel').slick({
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: false
});

var burger = document.querySelector('.hamburger-menu')
var bar = document.querySelector('.bar')
var dropin = document.querySelector('.dropin')

burger.addEventListener('click', function () {
  console.log('click')
  bar.classList.toggle('animate')
  dropin.classList.toggle('animate-menu')

})
