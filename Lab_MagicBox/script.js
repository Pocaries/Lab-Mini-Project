document.addEventListener('DOMContentLoaded', () => {
  const boxesEl = document.getElementById('boxes');
  const btn = document.getElementById('btn');

  const COLS = 4;
  const ROWS = 4;

  boxesEl.style.setProperty('--cols', COLS);
  boxesEl.style.setProperty('--rows', ROWS);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const box = document.createElement('div');
      box.className = 'box';

      box.style.setProperty('--row', row);
      box.style.setProperty('--col', col);

      box.style.transitionDelay = `${(row + col) * 40}ms`;

      boxesEl.appendChild(box);
    }
  }

  btn.addEventListener('click', () => {
    boxesEl.classList.toggle('exploded');
  });
});
