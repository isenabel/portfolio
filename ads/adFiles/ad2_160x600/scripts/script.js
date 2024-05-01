var container = document.getElementById('container');

function init() {

  container.style.visibility = "visible";

  var tl = gsap.timeline();

  tl.from('#img1', { duration: 0.8, x: '-100%' }, '+=0.5');
  tl.to('#copy1', { duration: 0.3, rotateX: 0, rotateY: 0, ease: Power4.easeIn });

  tl.from('#img2', { duration: 0.8, x: '-100%' }, '+=0.5');
  tl.to('#copy2', { duration: 0.3, rotateX: 0, rotateY: 0, ease: Power4.easeIn });

  tl.from('#img3', { duration: 0.8, x: '-100%' }, '+=0.5');
  tl.to('#copy3', { duration: 0.3, rotateX: 0, rotateY: 0, ease: Power4.easeIn });
  
  tl.from('#copy4', { duration: 0.8, x: '-100%' });

  tl.to('#logo', { duration: 0.3, yoyo: true, repeat: 1, scale: 1.1 }, '+=2');
  tl.to('#logo', { duration: 0.3, yoyo: true, repeat: 1, scale: 1.1 }, '+=3');

  console.log(tl.duration());

}

window.addEventListener('load', function () {
  init();
});

