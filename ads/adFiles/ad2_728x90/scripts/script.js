var container = document.getElementById('container');

var tl = gsap.timeline();

function init(){
	
	container.style.visibility= "visible";

  tl.from('#headline, #copy1', { duration: 0.7, x: '-282px' }, '+=0.5');

  tl.to('#copy1', { duration: 0.3, rotateX: '-90deg' }, '+=2');
  tl.to('#copy2', { duration: 0.3, rotateX: '0deg' });
  tl.to('#copy2', { duration: 0.3, rotateX: '-90deg' }, '+=2');
  tl.to('#copy3', { duration: 0.3, rotateX: '0deg' });
  tl.to('#copy3', { duration: 0.3, rotateX: '-90deg' }, '+=2');
  tl.to('#copy4', { duration: 0.3, rotateX: '0deg' });
  tl.to('#copy4', { duration: 0.3, rotateX: '-90deg' }, '+=2');
  tl.to('#copy5', { duration: 0.3, rotateX: '0deg' });

  tl.to('#cta', { duration: 0.4, scale: 1.1, yoyo: true, repeat: 1 }, '+=1');

  tl.duration(12);
}

window.addEventListener('load', function() {
  init();
});

