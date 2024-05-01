var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#copy1', { duration: 0.7, x: '-100%' }, '+=0.5');

  tl.to('#copy1', { duration: 0.2, opacity: 0 }, '+=2');
  tl.from('#copy2', { duration: 0.7, x: '-100%' }, '<');

  tl.to('#logo', { duration: 0.4, y: -15 });
  tl.from('#cta', { duration: 0.7, scale: 0 }, '<');


  // tl.duration(14);
}

window.addEventListener('load', function() {
  init();
});

