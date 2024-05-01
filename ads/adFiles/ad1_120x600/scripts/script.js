var container = document.getElementById('container');
var tl = gsap.timeline();

new SimpleBar(document.getElementById('scrollText'), {
  autoHide: false,
  scrollbarMinSize: 20,
});

document.getElementById('line').style.display = 'block';
container.style.visibility = "visible";

function trianglesRun1() {
  gsap.to('#topleft', { duration: 0.5, top: '-10%', left: '-330%', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-30%', right: '-335%', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.5, bottom: '-18%', left: '-260%', ease: 'none' });

  gsap.to('#topleft', { duration: 3, top: '-10%', left: '-330%', rotate: '-70deg', delay: 0.5, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-30%', right: '-335%', rotate: '20deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-18%', left: '-260%', rotate: '-15deg', delay: 0.5, ease: 'none' });
}

function trianglesRun2() {
  gsap.to('#topleft', { duration: 0.5, top: '-4%', left: '-330%', rotate: '-61deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-30%', right: '-255%', rotate: '12deg', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.5, bottom: '-17%', left: '-260%', rotate: '-20deg', ease: 'none' });

  gsap.to('#topleft', { duration: 3, top: '-28%', left: '-270%', rotate: '-40deg', delay: 0.5, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-30%', right: '-255%', rotate: '20deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-14%', left: '-260%', rotate: '-10deg', delay: 0.5, ease: 'none' });
}

function trianglesRun3() {
  gsap.to('#topleft', { duration: 0.5, top: '-28%', left: '-260%', rotate: '-58deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-32%', right: '-255%', rotate: '13deg', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.5, bottom: '-1%', left: '-260%', rotate: '19deg', ease: 'none' });

  gsap.to('#topleft', { duration: 3, top: '-38%', left: '-260%', rotate: '-72deg', delay: 0.5, ease: 'none' });
  gsap.to('#topright', { duration: 3, top: '-32%', right: '-255%', rotate: '6deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomleft', { duration: 3, bottom: '-1%', left: '-260%', rotate: '24deg', delay: 0.5, ease: 'none' });
}

function trianglesRun4() {
  gsap.to('#topleft', { duration: 0.5, top: '-27%', left: '-260%', rotate: '-34deg', ease: 'none' });
  gsap.to('#topright', { duration: 0.5, top: '-42%', right: '-255%', rotate: '6deg', ease: 'none' });
  gsap.to('#bottomleft', { duration: 0.5, bottom: '-11%', left: '-260%', rotate: '24deg', ease: 'none' });
  gsap.to('#bottomright', { duration: 0.5, bottom: '0%', right: '-280%', rotate: '-50deg', ease: 'none' });

  gsap.to('#topleft', { duration: 2, top: '-27%', left: '-260%', rotate: '-22deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomleft', { duration: 2, bottom: '-11%', left: '-260%', rotate: '17deg', delay: 0.5, ease: 'none' });
  gsap.to('#bottomright', { duration: 2, bottom: '0%', right: '-280%', rotate: '-66deg', delay: 0.5, ease: 'none' });

}

tl.from('#copy1', { duration: 0.5, autoAlpha: 0, x: -20 }, '+=0.5');

tl.to('#copy1', { duration: 0.2, autoAlpha: 0 }, '+=1.5');
tl.to('#background', { duration: 0.7, scale: 1, ease: 'back.in(2)' }, '<');
tl.set(container, { opacity: 1, onComplete: trianglesRun1 }, '<');
tl.from('#copy2', { duration: 0.5, autoAlpha: 0, x: -20 }, '<0.3');

tl.to('#copy2', { duration: 0.2, autoAlpha: 0 }, '+=1.5');
tl.set(container, { opacity: 1, onComplete: trianglesRun2 }, '<');
tl.from('#background2', { duration: 0.2, autoAlpha: 0 }, '<');
tl.from('#package', { duration: 0.2, autoAlpha: 0 }, '<');
tl.from('#copy3', { duration: 0.5, autoAlpha: 0, x: -20 });

tl.to('#copy3, #package', { duration: 0.2, autoAlpha: 0 }, '+=2');
tl.set(container, { opacity: 1, onComplete: trianglesRun3 }, '<');
tl.from('#pill', { duration: 0.2, autoAlpha: 0 }, '<');
tl.from('#copy4', { duration: 0.5, autoAlpha: 0, x: -20 });

tl.to('#copy4, #pill, #logo', { duration: 0.2, autoAlpha: 0 }, '+=2');
tl.set(container, { opacity: 1, onComplete: trianglesRun4 }, '<');
tl.from('#logofinal', { duration: 0.5, autoAlpha: 0, x: -20 });
tl.from('#copy5', { duration: 0.5, autoAlpha: 0, x: -20 }, '>0.2');
tl.from('#cta', { duration: 1, scale: 0, ease: 'back.out(2)' });

tl.duration(14);

// ********* Events ************* //
