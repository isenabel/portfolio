function init() {
  document.getElementById('main').style.opacity = 1;

  const playBtns = document.querySelectorAll('.playBtn');
  const sizeList = document.querySelectorAll('.adSizes li');

  sizeList.forEach(element => {
    element.addEventListener('click', (e) => {
      const currentSize = document.querySelector('.adSizes .active');
      const currentSizeData = currentSize.dataset.size;
      const newSizeDisplayData = e.target.dataset.size;

      document.getElementById(currentSizeData).classList.add('sectionHidden');
      document.getElementById(currentSizeData).classList.remove('sectionShow');
      document.getElementById(newSizeDisplayData).classList.remove('sectionHidden');
      document.getElementById(newSizeDisplayData).classList.add('sectionShow');

      currentSize.classList.remove('active');
      e.target.classList.add('active');
    });
  });

  playBtns.forEach(element => {
    element.addEventListener('click', () => {
      const parentData = element.parentNode.dataset.ad;
      const iframe = document.querySelector(`.ad[data-ad="${parentData}"] iframe`);
      const cover = document.querySelector(`.ad[data-ad="${parentData}"] img`);

      iframe.src = `./adFiles/${parentData}/index.html`;
      cover.style.display = 'none';
    });
  });


}


window.addEventListener('load', init);