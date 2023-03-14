const slider = document.querySelector('.slider');
let counter = 1;

setInterval(() => {
  if (counter >= 3) {
    counter = 0;
  }
  slider.classList.add('animate');
  setTimeout(() => {
    slider.classList.remove('animate');
    slider.classList.add('reverse');
    setTimeout(() => {
      slider.classList.remove('reverse');
    }, 500);
  }, 1000);
  counter++;
}, 5000);
