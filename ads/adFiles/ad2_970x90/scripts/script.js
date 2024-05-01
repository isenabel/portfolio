var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#copy1', { duration: 0.7, opacity: 0 }, '+=1');
  tl.to('#copy1', { duration: 0.5, scale: 1 });

  tl.to('#logo', { duration: 0.7, right: '178px' });
  tl.to('#copy1', { duration: 0.7, x: -18 }, '<');
  tl.to('#background', { duration: 0.7, x: -38 }, '<');
  tl.from('#cta', { duration: 0.7, x: '30%' }, '<0.2');

  // tl.duration(14);
}

window.addEventListener('load', function() {
  init();
});

