var container = document.getElementById('container');
var tl = gsap.timeline({ defaults: {} });

function init() {
  container.style.visibility = "visible";

  $("#scrollText").niceScroll({
    cursorcolor: "#000",
    cursorwidth: "11px",
    autohidemode: false,
    cursorminheight: 10,
    railpadding: { top: 5, right: 1, bottom: 3, left: 0 },
    scrollspeed: 400, // scrolling speed
    mousescrollstep: 7,
    cursorborderradius: '50%'
  });

  tl.from('#copy1, #copy1_1', { duration: 1, scale: 0 });
  tl.to('#copy1_1', { duration: 0.4, scale: 1.1, transformOrigin: '100px 505px', yoyo: true, repeat: 1 });
  
  tl.to('#copy1, #copy1_1', { duration: 0.2, opacity: 0 }, '+=2');
  tl.from('#copy2', { duration: 0.7, scale: 0 });

  tl.to('#copy2', { duration: 0.2, opacity: 0 }, '+=2');
  tl.to('#background', { duration: 0.5, top: '0px' }, '<');
  tl.to('#campaign', { duration: 0.4, y: -43 });
  tl.from('#package', { duration: 1, opacity: 0 });
  tl.from('#icon1', { duration: 0.5, opacity: 0 });
  tl.from('#icon2', { duration: 0.5, opacity: 0 }, '<');
  tl.from('#icon3', { duration: 0.5, opacity: 0 }, '<');
  tl.from('#icon4', { duration: 0.5, opacity: 0 }, '<');
  tl.from('#icon5', { duration: 0.5, opacity: 0 }, '<');
  
  tl.to('.icons1, #package', { duration: 0.2, opacity: 0 }, '+=3');
  tl.from('#package2', { duration: 0.7, opacity: 0 });
  tl.from('#icon6', { duration: 0.5, opacity: 0 });
  tl.from('#icon7', { duration: 0.5, opacity: 0 }, '<');
  
  tl.to('.icons2, #package2', { duration: 0.2, opacity: 0 }, '+=2');
  tl.from('#copy3', { duration: 0.7, y: '-50%' });
  tl.to('#campaign', { duration: 0.3, y: 34 }, '<0.4');
  tl.from('#package3', { duration: 1, opacity: 0 });
  tl.from('#cta', { duration: 0.7, scale: 0 });
  tl.to('#cta', { duration: 0.5, scale: 1 });

  tl.duration(15);
  

  document.getElementById('link1').addEventListener('click', () => {
    window.open('https://www.elancolabels.com/us/credelio');
  });

  document.getElementById('link2').addEventListener('click', () => {
    window.open('https://www.elancolabels.com/us/interceptor-plus');
  });
}

window.addEventListener('load', function () {
  init();
});

