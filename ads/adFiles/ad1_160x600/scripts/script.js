var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#copy1', { duration: 0.7, opacity: 0 }, '+=1');
  tl.to('#copy1', { duration: 0.5, scale: 1 });
  
  tl.from('#cta', { duration: 0.7, scale: 0 });

  // tl.duration(14);
}

window.addEventListener('load', function() {
  init();
});

