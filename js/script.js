// index.js
console.log('JavaScript is loaded!');

const workGrid = document.querySelector('.workGrid');
const buttons = workGrid.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const button = event.target;
    const content = button.parentElement;

    console.log(`The "${content.querySelector('h4').textContent}" project was viewed.`);
  });
});
