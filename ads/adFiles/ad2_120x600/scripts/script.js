var container = document.getElementById('container');
var tl = gsap.timeline();

new SimpleBar(document.getElementById('scrollText'), {
  autoHide: false,
  scrollbarMinSize: 20,
});

document.getElementById('line').style.display = 'block';
container.style.visibility = "visible";

function trianglesRun1() {
  gsap.to('#topright', { duration: 0.5, top: '-38.5%', right: '-190%', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.5, bottom: '-8%', right: '-180%', ease: 'none' });

  gsap.to('#topright', { duration: 3, top: '-38.5%', right: '-190%', rotate: '20deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomright', { duration: 3, bottom: '-8%', right: '-180%', rotate: '-31deg', delay: 0.5, ease: 'none' });
}

function trianglesRun2() {
  gsap.to('#topright', { duration: 3, top: '-38.5%', right: '-190%', rotate: '12deg', ease: 'none' });
  gsap.to('#bottomright', { duration: 3, bottom: '-8%', right: '-180%', rotate: '-25deg', ease: 'none' });
}

function trianglesRun3() {
  gsap.to('#topleft', { duration: 0.5, top: '-20%', left: '-300%', rotate: '-48deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-38.5%', right: '-190%', rotate: '3deg', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.5, bottom: '-35%', right: '-180%', rotate: '-25deg', ease: 'none' });
  
  gsap.to('#topleft', { duration: 2, top: '-20%', left: '-300%', rotate: '-58deg', delay: 0.5, ease: 'none' });
  gsap.to('#topright', { duration: 2, top: '-38.5%', right: '-190%', rotate: '12deg', delay: 0.5, ease: 'none' });
  gsap.set('#bottomright', { bottom: '-35%', right: '-180%', rotate: '-25deg', delay: 0.5, ease: 'none' });
}


tl.to('#background', { duration: 0.4, scale: 1, y: '-17%', ease: 'back.in(1.4)' }, '+=1');
tl.from('#bg_white', { duration: 0.4, y: '100%', ease: 'none' }, '<');
tl.set(container, { opacity: 1, onComplete: trianglesRun1 }, '-=0.2');
tl.from('#copy1', { duration: 0.3, autoAlpha: 0, x: -20 });

tl.to('#copy1', { duration: 0.2, autoAlpha: 0, x: 20 }, '+=1');
tl.from('#copy2', { duration: 0.3, autoAlpha: 0, x: -20 }, '<0.1');
tl.set(container, { opacity: 1, onComplete: trianglesRun2 }, '<');

tl.to('#logo', { duration: 0.2, autoAlpha: 0 }, '+=1');
tl.set(container, { opacity: 1, onComplete: trianglesRun3 }, '<');
tl.to('#copy2', { duration: 0.2, autoAlpha: 0, x: 20 }, '<');
tl.from('#logofinal', { duration: 0.2, autoAlpha: 0, x: -20 }, '<0.1');
tl.from('#copy3', { duration: 0.3, autoAlpha: 0, x: -20 }, '<0.1');
tl.from('#cta', { duration: 0.3, scale: 0, ease: 'back.out(2)' }, '<0.2');

tl.duration(10);

// ********* Events ************* //
