var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#copy1', { duration: 0.7, x: '-100%' }, '+=0.5');
  
  tl.to('#img1', { duration: 0.7, opacity: 0 }, '+=1');
  tl.from('#copy2', { duration: 0.7, opacity: 0 }, '<');
  
  tl.to('#img2', { duration: 0.7, opacity: 0 }, '+=1');
  tl.from('#copy3', { duration: 0.7, opacity: 0 }, '<');
  
  tl.to('.headline1', { duration: 0.2, opacity: 0 }, '+=1');
  tl.from('#headline2', { duration: 0.7, x: '-100%' });

  tl.from('#cta', { duration: 0.7, x: '100%' }, '+=1');
  tl.to('#logo', { duration: 0.7, x: -7, y: -7 }, '<');

  tl.duration(10);
}

window.addEventListener('load', function() {
  init();
});

