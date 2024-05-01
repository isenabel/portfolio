var container = document.getElementById('container');
var tl = gsap.timeline();

new SimpleBar(document.getElementById('scrollText'), {
  autoHide: false,
  scrollbarMinSize: 20,
});

document.getElementById('line').style.display = 'block';
container.style.visibility = "visible";

function trianglesRun1() {
  gsap.to('#topleft', { duration: 0.3, top: '-20%', left: '-219%', ease: 'none' });
  gsap.to('#topright', { duration: 0.3, top: '-35%', right: '-180%', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.3, bottom: '-15%', left: '-140%', ease: 'none' });
  
  gsap.to('#topleft', { duration: 3, top: '-20%', left: '-219%', rotate: '-48deg', delay: 0.3, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-35%', right: '-180%', rotate: '20deg', delay: 0.3, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-15%', left: '-140%', rotate: '-30deg', delay: 0.3, ease: 'none' });
}

function trianglesRun2() {
  gsap.to('#topleft', { duration: 0.3, top: '-20%', left: '-219%', rotate: '-60deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.3, top: '-35%', right: '-180%', rotate: '12deg', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.3, bottom: '-15%', left: '-140%', rotate: '-20deg', ease: 'none' });

  gsap.to('#topleft', { duration: 3, top: '-20%', left: '-219%', rotate: '-70deg', delay: 0.3, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-32%', right: '-180%', rotate: '7deg', delay: 0.3, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-15%', left: '-140%', rotate: '-10deg', delay: 0.3, ease: 'none' });
}

function trianglesRun3() {
  gsap.to('#topleft', { duration: 0.3, top: '-20%', left: '-219%', rotate: '-60deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.3, top: '-35%', right: '-180%', rotate: '12deg', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.3, bottom: '-8%', left: '-140%', rotate: '17deg', ease: 'none' });
  
  gsap.to('#topleft', { duration: 3, top: '-20%', left: '-219%', rotate: '-50deg', delay: 0.3, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-35%', right: '-180%', rotate: '22deg', delay: 0.3, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-8%', left: '-140%', rotate: '27deg', delay: 0.3, ease: 'none' });
}

function trianglesRun4() {
  gsap.to('#topleft', { duration: 0.3, top: '-28%', left: '-180%', rotate: '-53deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.3, top: '-34%', right: '-380%', rotate: '12deg', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.3, bottom: '-14%', left: '-140%', rotate: '7deg', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.3, bottom: '0%', right: '-215%', rotate: '-55deg', ease: 'none' });
  
  gsap.to('#topleft', { duration: 2, top: '-28%', left: '-180%', rotate: '-63deg', delay: 0.3, ease: 'none' });
  gsap.to('#topright', { duration: 2, top: '-34%', right: '-380%', rotate: '22deg', delay: 0.3, ease: 'none' });
  gsap.to('#bottomleft', { duration: 2, bottom: '-14%', left: '-140%', rotate: '17deg', delay: 0.3, ease: 'none' });
  gsap.to('#bottomright', { duration: 2, bottom: '0%', right: '-215%', rotate: '-65deg', delay: 0.3, ease: 'none' });
}


tl.from('#bg2', { duration: 0.2, autoAlpha: 0 }, '+=1');
tl.set(container, { opacity: 1, onComplete: trianglesRun1 }, '<');
tl.from('#icons', { duration: 0.4, autoAlpha: 0, x: -10 });
tl.from('#copy1', { duration: 0.4, autoAlpha: 0, x: -10 });

tl.to('#copy1, #icons', { duration: 0.2, autoAlpha: 0 }, '+=2');
tl.set(container, { opacity: 1, onComplete: trianglesRun2 }, '<');
tl.from('#bg3', { duration: 0.2, autoAlpha: 0 }, '<');
tl.from('#package', { duration: 0.4, scale: 0, ease: 'back.out(1.4)' });
tl.from('#copy2', { duration: 0.4, autoAlpha: 0, x: -10 });

tl.to('#package', { duration: 0.4, scale: 0, ease: 'back.in(1.4)' }, '+=2');
tl.to('#copy2', { duration: 0.4, autoAlpha: 0 }, '<0.1');
tl.set(container, { opacity: 1, onComplete: trianglesRun3 }, '<');
tl.from('#bg4', { duration: 0.2, autoAlpha: 0 }, '<');
tl.from('#copy3', { duration: 0.4, autoAlpha: 0, x: -10 });

tl.from('#bg_white', { duration: 0.2, autoAlpha: 0 }, '+=2');
tl.set(container, { opacity: 1, onComplete: trianglesRun4 }, '<');
tl.to('#copy3, #logo', { duration: 0.2, autoAlpha: 0 }, '<');
tl.from('#logofinal', { duration: 0.2, autoAlpha: 0, x: -20 });
tl.from('#copy4', { duration: 0.3, autoAlpha: 0, x: -20 }, '<0.1');
tl.from('#cta', { duration: 0.3, scale: 0, ease: 'back.out(2)' }, '<0.2');



tl.duration(11);

// ********* Events ************* //
