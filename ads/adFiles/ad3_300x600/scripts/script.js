var container = document.getElementById('container');
var tl = gsap.timeline();

new SimpleBar(document.getElementById('scrollText'), {
  autoHide: false,
  scrollbarMinSize: 20,
});

document.getElementById('line').style.display = 'block';
container.style.visibility = "visible";

function trianglesRun1() {
  gsap.to('#topleft', { duration: 0.5, top: '-20%', left: '-103%', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.5, bottom: '-20%', left: '-80%', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.5, bottom: '5%', right: '-112%', ease: 'none' });
  
  gsap.to('#topleft', { duration: 3, top: '-20%', left: '-103%', rotate: '-70deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-20%', left: '-80%', rotate: '21deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomright', { duration: 3, bottom: '5%', right: '-112%', rotate: '-68deg', delay: 0.5, ease: 'none' });
}

function trianglesRun2() {
  gsap.to('#topleft', { duration: 0.5, top: '-10%', left: '-103%', rotate: '-60deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-21%', right: '-50%', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.5,  bottom: '-20%', left: '-160%', rotate: '21deg', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.5, bottom: '-15%', right: '-22%', rotate: '7deg', ease: 'none' });
  
  gsap.to('#topleft', { duration: 3, top: '-10%', left: '-103%', rotate: '-50deg', delay: 0.5, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-21%', right: '-50%', rotate: '7deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-20%', left: '-160%', rotate: '21deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomright', { duration: 3, bottom: '-15%', right: '-22%', rotate: '-5deg', delay: 0.5, ease: 'none' });
}

function trianglesRun3() {
  gsap.to('#topleft', { duration: 0.5, top: '-10%', left: '-103%', rotate: '-70deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-26%', right: '-50%', rotate: '25deg', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.5, bottom: '-19%', right: '-22%', rotate: '15deg', ease: 'none' });
  
  gsap.to('#topleft', { duration: 3, top: '-10%', left: '-103%', rotate: '-60deg', delay: 0.5, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-26%', right: '-50%', rotate: '15deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomright', { duration: 3, bottom: '-19%', right: '-22%', rotate: '7deg', delay: 0.5, ease: 'none' });
}


tl.to('#background', { duration: 0.4, scale: 1, ease: 'back.in(2)' }, '+=1');
tl.set(container, { opacity: 1, onComplete: trianglesRun1 }, '-=0.2');
tl.from('#copy1', { duration: 0.5, autoAlpha: 0, x: -20 });

tl.to('#copy1', { duration: 0.2, autoAlpha: 0, x: 20 }, '+=1');
tl.set(container, { opacity: 1, onComplete: trianglesRun2 }, '<');
tl.from('#copy2', { duration: 0.5, autoAlpha: 0, x: -20 }, '<0.1');

tl.to('#logo', { duration: 0.2, autoAlpha: 0 }, '+=1');
tl.set(container, { opacity: 1, onComplete: trianglesRun3 }, '<');
tl.to('#copy2', { duration: 0.2, autoAlpha: 0, x: 20 }, '<');
tl.from('#bg_white', { duration: 0.4, autoAlpha: 0 }, '<');
tl.from('#logofinal', { duration: 0.5, autoAlpha: 0, x: -20 });
tl.from('#copy3', { duration: 0.5, autoAlpha: 0, x: -20 }, '<0.1');
tl.from('#cta', { duration: 0.5, scale: 0, ease: 'back.out(2)' }, '<0.1');

tl.duration(10);

// ********* Events ************* //
