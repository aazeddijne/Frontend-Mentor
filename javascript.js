const open = document.querySelector('.open');
const menu = document.querySelector('.menuPanel');
const section = document.querySelector('section');

open.addEventListener('click', () => {
    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        open.src = './assets/images/icon-close.svg';
        section.style.background = "hsla(220, 100%, 64%, 0.66)";
    } else {
        open.src = './assets/images/icon-menu.svg';
        section.style.background = "hsl(228, 99%, 58%)"
    };
});