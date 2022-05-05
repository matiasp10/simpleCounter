let contador = document.querySelector('.contador');
let plus = document.querySelector('.plus');
let reset = document.querySelector('.reset');
let minus = document.querySelector('.minus');

let counter = 0;

plus.addEventListener('click', () => {
  counter++;
  contador.textContent = counter;
  cambiarColor();
});
reset.addEventListener('click', () => {
  counter = 0;
  contador.textContent = counter;
});
minus.addEventListener('click', () => {
  counter--;
  contador.textContent = counter;
  cambiarColor();
});

function cambiarColor() {
  if (counter >= 20) {
    contador.style.color = 'magenta';
  } else if (counter >= 10) {
    contador.style.color = 'green';
  } else {
    contador.style.color = '#fff';
  }
}
