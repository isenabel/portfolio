function init() {
  document.getElementById('btn120x600_1').addEventListener('click', () => {
    document.getElementById('ad1_120x600').setAttribute('src', './ads/cat-action_120x600/index.html');
  });
}


window.addEventListener('load', init);