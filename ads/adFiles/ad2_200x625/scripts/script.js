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

  tl.from('#copy1', { duration: 0.7, opacity: 0, x: -7 });
  tl.from('#copy1_1', { duration: 0.7, opacity: 0, x: -7 });
  tl.from('#icon1', { duration: 0.5, scale: 0 });
  tl.from('#icon2', { duration: 0.5, scale: 0 }, '<0.2');

  tl.from('#copy2', { duration: 0.7, opacity: 0, x: -7 }, '+=2');
  tl.from('#logo1', { duration: 0.5, x: '-100%' }, '+=1');
  tl.from('#logo2', { duration: 0.5, x: '100%' }, '<');
  tl.from('#scrollHolder, #ascrail2000', { duration: 0.5, opacity: 0 }, '<');
  
  tl.to('#copy1, #copy1_1, #copy2, #icon1, #icon2', { duration: 0.2, opacity: 0 }, '+=3');
  tl.to('#logo1', { duration: 0.5, top: '0px' }, '<');
  tl.to('#logo2', { duration: 0.5, top: '0px' }, '<');
  tl.from('#campaign', { duration: 0.7, opacity: 0, x: -7 });
  tl.from('#copy3', { duration: 0.7, opacity: 0, x: -7 }, '<');
  tl.from('#copy3_1', { duration: 0.7, opacity: 0, x: -7 });
  tl.to('#image', { duration: 0.2, display: 'block', opacity: 1 });
  
  tl.to('#copy3, #copy3_1, #image, #logo1, #logo2', { duration: 0.2, opacity: 0 }, '+=3');
  tl.from('#copy4', { duration: 0.9, y: '-50%' }, '<');
  tl.to('#campaign', { duration: 0.4, y: 30 }, '<0.5');
  tl.from('#package', { duration: 0.7, opacity: 0 });
  tl.from('#cta', { duration: 0.7, scale: 0 });
  tl.to('#cta', { duration: 0.4, opacity: 0.7, yoyo: true, repeat: 5 });

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

