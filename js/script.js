'user strict';
const bugerMenu = document.querySelector('.humbergur-menu');
const mainMenu = document.querySelector('.main-menu-list');
const links = document.querySelectorAll('.mian-menu-link');

bugerMenu.addEventListener('click', function () {
  mainMenu.classList.toggle('open');
});

links.forEach(link =>
  link.addEventListener('click', function (e) {
    mainMenu.classList.remove('open');
  })
);
