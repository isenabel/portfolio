var container = document.getElementById('container');

function init() {

  container.style.visibility = "visible";

  var tl = gsap.timeline({ defaults: { duration: 1.2 } });
  tl.to("#mgp", { autoAlpha: 0, delay: 2 });
  tl.from("#mgp_small", { autoAlpha: 0 }, '-=0.2');
  tl.from("#headline", { autoAlpha: 0 }, '<0.2');
  tl.from("#b_w", { right: '-130%' }, '<');
  tl.from("#headline2", { autoAlpha: 0 }, '+=3');
  tl.to("#b_w", { autoAlpha: 0 }, '<0.2');
  tl.from("#color", { autoAlpha: 0 }, '<');
  
  var tl2 = gsap.timeline({ defaults: { duration: 0.5 } });
  // tl2.from("#note1", { autoAlpha: 0 });
  tl2.from("#note2", { autoAlpha: 0 });
  tl2.from("#note3", { autoAlpha: 0 });
  tl2.from("#note4", { autoAlpha: 0 });
  tl2.to("#notesFrame1", { autoAlpha: 0 });
  
  tl2.from("#note5", { autoAlpha: 0 });
  tl2.from("#note6", { autoAlpha: 0 });
  tl2.from("#note7", { autoAlpha: 0 });
  tl2.to("#notesFrame2", { autoAlpha: 0 });
  
  tl2.from("#note8", { autoAlpha: 0 });
  tl2.from("#note9", { autoAlpha: 0 });
  tl2.from("#note10", { autoAlpha: 0 });
  tl2.to("#notesFrame3", { autoAlpha: 0 }, '+=0.5');
  
  tl2.from("#note11", { autoAlpha: 0 });
  tl2.from("#note12", { autoAlpha: 0 });
  tl2.from("#note13", { autoAlpha: 0 });


  console.log('Animation duration: ' + tl2.duration());

}

window.addEventListener('load', function () {
  init();
});

