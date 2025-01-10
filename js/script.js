let menuIcon = document.querySelector('.menu_icon')
let bar = document.querySelector('.bar')
let close = document.querySelector('.close')


menuIcon.addEventListener('click', function () {
    bar.classList.toggle('menu_active');
    close.classList.toggle('menu_active');
});
