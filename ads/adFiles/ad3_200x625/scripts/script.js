var container = document.getElementById('container');
var tl = gsap.timeline({ });

function init() {
  initPosition();

  container.style.visibility = "visible";

  $("#scrolText").niceScroll({
    cursorcolor: "#00833d",
    cursorwidth: "6px",
    autohidemode: false,
    cursorborder: "0px solid #7d7d7d",
    cursorminheight: 20,
    railpadding: { top: 5, right: 3, bottom: 3, left: 0 },
    scrollspeed: 400, // scrolling speed
    mousescrollstep: 7,
    horizrailenabled: false,
    cursorborderradius: '50px'
  });

  document.getElementById('line').style.display = 'block';


  animation();

  document.getElementById('link1').addEventListener('click', function() {
    window.open('https://www.elancolabels.com/us/credelio-cat', '_blank');
  });
}

function initPosition() {
  gsap.set('.mapCont', { scale: 0.36, x: 185, y: 29 });
}

function animation() {
  tl.from('#copy1_1', { duration: 0.7, scale: 0 }, '+=0.5');
  tl.from('#copy1_2', { duration: 0.7, scale: 0 }, '<0.2');
  tl.from('#copy1_3', { duration: 0.7, scale: 0 }, '<0.2');

  tl.to('#logo', { duration: 0.2, autoAlpha: 0 }, '+=0.5');
  tl.set('#logo', { scale: 0, autoAlpha: 1, rotate: -360 });
  tl.to('#copy1', { duration: 0.5, y: '-187px' });
  tl.from('.mapCont', { duration: 0.5, scale: 0, rotate: -360 });

  tl.to('.mapCont', { duration: 0.5, scale: 1, x: 0, y: 0 }, '+=0.5');
  tl.to('#map2', { duration: 2, width: '100%', ease: 'none' });
  tl.to('.mapCont', { duration: 1.5, x: 180, ease: 'none' }, '<0.1');
  tl.to('.mapCont', { duration: 0.5, scale: 0.36, x: 185, y: 21 }, '+=0.5');

  tl.to('#copy1_1, #copy1_2, #copy1_3', { duration: 0.2, autoAlpha: 0 }, '+=0.5');
  tl.to('.mapCont', { duration: 0.2, scale: 0, rotate: 360 }, '<');
  tl.to('#logo', { duration: 0.7, scale: 1, rotate: 0 });
  tl.from('#package', { duration: 0.7, x: '100%' }, '<');
  tl.from('#copy2_1', { duration: 0.7, scale: 0 });
  tl.from('#copy2_2', { duration: 0.7, scale: 0 }, '<0.2');
  tl.from('#cta', { duration: 0.7, x: '-100%' });

  tl.duration(12);
  //console.log("Timeline Duraction: " + tl.duration() + " seconds");
}

window.addEventListener('load', function () {
  init();
});

