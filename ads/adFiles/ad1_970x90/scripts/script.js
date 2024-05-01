var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#copy1', { duration: 0.7, opacity: 0 }, '+=0.5');

  tl.from('#copy2', { duration: 0.7, scale: 0 }, '+=0.5');
  
  tl.from('#copy3', { duration: 0.7, scale: 0 }, '+=0.5');

  tl.to('.headline1', { duration: 0.2, opacity: 0 }, '+=1');
  tl.from('#copy4', { duration: 0.7, x: '-100%' }, '<');

  tl.to('#rectangle', { duration: 0.5, x: -63 }, '+=1');
  tl.to('#logo', { duration: 0.5, right: '76px', top: '8px' }, '<');
  tl.from('#cta', { duration: 0.7, scale: 0 });


  // tl.duration(14);
}

window.addEventListener('load', function() {
  init();
});

