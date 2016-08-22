
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
var logo = document.querySelector('.master-lo')
var partner = document.querySelector('.partner-link')

burger.addEventListener('click', function () {
  console.log('click')
  bar.classList.toggle('animate')
  dropin.classList.toggle('animate-menu')
  logo.classList.toggle('hide-menu-item')
  partner.classList.toggle('hide-menu-item')
})
