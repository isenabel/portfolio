var container = document.getElementById('container');

function init() {

  container.style.visibility = "visible";

  var tl = gsap.timeline();

  tl.to('#background', { duration: 2, top: "0%", left: '0%', width: '100%', ease: Power0.easeNone }, '+=0.5');
  tl.from('#copy1', { duration: 1, scale: 0, onComplete: function() {
    gsap.to('#copy1', { duration: 0.5, scale: 1 });
  } }, '<');
  tl.to('#background', { duration: 0.5, autoAlpha: 0, ease: Power1.easeIn }, '<1.5');

  tl.to('#copy2', { duration: 0.3, rotateX: 0, rotateY: 0, ease: Power4.easeIn });
  tl.to('#background2', { duration: 2, top: "0%", left: '0%', width: '100%', ease: Power0.easeNone }, '<');
  tl.to('#background2', { duration: 0.5, autoAlpha: 0, ease: Power1.easeIn }, '<1.5');

  tl.to('#background3', { duration: 2, top: "0%", left: '0%', width: '100%', ease: Power0.easeNone });
  tl.from('#copy3', { duration: 1, scale: 0 }, '<');
  tl.to('#copy3', { duration: 0.5, scale: 1 }, '>');
  tl.to('#cta', { duration: 0.3, rotateX: 0, rotateY: 0, ease: Power1.easeIn }, '>');

  console.log(tl.duration());

}

window.addEventListener('load', function () {
  init();
});

