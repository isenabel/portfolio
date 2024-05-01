var container = document.getElementById('container');

function init() {

  container.style.visibility = "visible";

  var tl = gsap.timeline({ defaults: { duration: 0.7 } });
  tl.from("#headline", { autoAlpha: 0, delay: 1 });
  tl.from("#color", { autoAlpha: 0 }, '<');
  tl.from("#note1", { autoAlpha: 0, duration: 1 });
  tl.from("#note2", { autoAlpha: 0, duration: 1 });
  tl.to("#notesFrame1", { autoAlpha: 0 }, '+=1');
  tl.to("#headline", { autoAlpha: 0 }, '<');
  tl.to("#color", { autoAlpha: 0, left: '25%' }, '<');
  tl.from("#b_w", { autoAlpha: 0 }, '<');
  tl.to("#b_w", { left: '25%' }, '<');
  
  tl.from("#headline2", { autoAlpha: 0, duration: 1 }, '<');
  tl.from("#note3", { autoAlpha: 0, duration: 1 }, '<0.5');
  tl.from("#note4", { autoAlpha: 0, duration: 1 }, '<1');
  tl.to("#notesFrame2", { autoAlpha: 0 }, '+=0.5');
  tl.to("#b_w", { left: '100%', duration: 1 }, '<');
  
  tl.to(["#headline2", '#logo', '#b_w'], { autoAlpha: 0 }, '<');
  tl.from("#note5", { autoAlpha: 0, duration: 1 }, 'finalnote-=0.9');
  tl.from("#logo_big", { autoAlpha: 0 });
  tl.from("#plus", { autoAlpha: 0 });
  tl.from("#arise", { autoAlpha: 0 });
  tl.from("#note6", { autoAlpha: 0, duration: 1 }, 'finalnote+=1');


  console.log('Animation duration: ' +  tl.duration());

}

window.addEventListener('load', function () {
  init();
});

