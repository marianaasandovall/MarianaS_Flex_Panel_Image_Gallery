const panels = document.querySelectorAll('.panel');
const clickSound = new Audio('onclick.mp3');
function toggleOpen() {
  clickSound.currentTime = 0;
  clickSound.play();
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


