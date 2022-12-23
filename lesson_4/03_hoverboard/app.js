const board = document.querySelector('#board');
const colors = ['#007FFF', '#0000FF', '#318CE7', '#6CB4EE', '#89CFF0', '#007FFF'];
const SQUARES_NUMBER = 400;


for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square)
}

function setColor(e) {
  const square = e.target;
  const color = getRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(e) {
  const square = e.target;
  square.style.backgroundColor = '#1d1d1d';
  square.style.boxShadow = '0 0 2px #000';
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}