var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#copy1', { duration: 0.7, opacity: 0 }, '+=0.5');
  tl.to('#copy1', { duration: 0.5, scale: 1 });
  
  tl.to('#copy1', { duration: 0.2, opacity: 0 }, '+=2');
  tl.to('#img', { duration: 0.7, scale: 1 }, '<');
  tl.to('#copy2', { duration: 0.7, scale: 1 });
  
  tl.to('#copy2', { duration: 0.2, opacity: 0 }, '+=2');
  tl.from('#copy3', { duration: 0.7, opacity: 0 });
  tl.to('#copy3', { duration: 0.5, scale: 1 });
  
  tl.to('#copy3', { duration: 0.2, opacity: 0 }, '+=2');
  tl.from('#copy4', { duration: 0.7, opacity: 0 });
  tl.to('#img', { duration: 0.7, x: '-16%' });
  tl.from('#cta', { duration: 0.7, x: '50%' }, '<');

  tl.duration(10);
}

window.addEventListener('load', function() {
  init();
});

