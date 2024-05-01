var container = document.getElementById('container');

function init() {

  container.style.visibility = "visible";

  var tl = gsap.timeline({ defaults: { duration: 0.7 } });
  tl.from("#headline", { autoAlpha: 0, delay: 0.2 });
  tl.from("#color", { autoAlpha: 0 }, '<');
  tl.from("#note1", { autoAlpha: 0, duration: 1 }, 'firstnote');
  tl.from("#note2", { autoAlpha: 0, duration: 1 }, 'firstnote+=1');
  tl.from("#note3", { autoAlpha: 0, duration: 1 }, 'firstnote+=2');
  tl.to("#notesFrame1", { autoAlpha: 0 }, 'firstnote+=3');
  tl.to("#headline", { autoAlpha: 0 }, '<-0.5');
  tl.from("#headline2", { autoAlpha: 0 }, '<');
  tl.to("#color", { autoAlpha: 0 }, '<-0.2');
  tl.from("#b_w", { autoAlpha: 0 }, '<-0.2');
  
  tl.from("#note4", { autoAlpha: 0, duration: 1 }, '<');
  tl.from("#note5", { autoAlpha: 0, duration: 1 });
  tl.from("#note6", { autoAlpha: 0, duration: 1 });
  tl.to("#notesFrame2", { autoAlpha: 0 }, 'finalnote');
  tl.to("#b_w", { left: '50%', duration: 1 }, '<0.5');
  
  tl.to(["#headline2", '#logo', '#b_w'], { autoAlpha: 0 }, '<');
  tl.from("#note7", { autoAlpha: 0, duration: 1 }, 'finalnote+=0.7');
  tl.from("#logo_big", { autoAlpha: 0 });
  tl.from("#note8", { autoAlpha: 0, duration: 1 }, 'finalnote+=1.7');
  tl.from("#note9", { autoAlpha: 0, duration: 1 }, 'finalnote+=2.7');


  console.log('Animation duration: ' +  tl.duration());

}

window.addEventListener('load', function () {
  init();
});

