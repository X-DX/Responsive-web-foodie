/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const menuBar = document.querySelector('.ri-menu-2-line');
const closeBar = document.querySelector('.ri-close-circle-line');
const navBar = document.querySelector('.responsive-nav');
menuBar.addEventListener('click', () => {
  navBar.style.left = '0%';
});
closeBar.addEventListener('click', () => {
  navBar.style.left = '100%';
});
