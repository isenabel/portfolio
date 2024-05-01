var container = document.getElementById('container');

function init(){
	
	container.style.visibility= "visible";

  var tl = gsap.timeline();

  gsap.to('#background', { duration: 7.5, width: '100%', top: '0%', left: '0%', delay: 1, ease: Power0.easeNone });
  tl.to('#logo', { duration: 0.5, x: '-42%',y: '0%', scale: 0.6 }, '+=1');
  tl.from('#copy1', { duration: 0.7, autoAlpha: 0, x: '5%' });
  tl.from('#copy2', { duration: 0.7, autoAlpha: 0, x: '5%' });
  tl.from('#copy3', { duration: 0.7, autoAlpha: 0, x: '5%' });
  tl.from('#cta', { duration: 0.3, scale: 0 });

  tl.duration(8);
}

window.addEventListener('load', function() {
  init();
});

