var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.to('#logo', { duration: 0.7, width: '129px', top: '0px', left: '88px' }, '+=1');
  tl.from('#copy1', { duration: 0.7, x: '-100%' });

  tl.to('#copy1', { duration: 0.5, top: '0px' }, '+=1');
  tl.from('#copy2', { duration: 0.7, x: '-100%' });
  tl.from('#cta', { duration: 0.5, scale: 0 });


  // tl.duration(14);
}

window.addEventListener('load', function() {
  init();
});

