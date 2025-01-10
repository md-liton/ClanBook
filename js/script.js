let menuIcon = document.querySelector('.menu_icon')
let bar = document.querySelector('.bar')
let close = document.querySelector('.close')
let menu = document.querySelector('.menu')
let login = document.querySelector('.login')



menuIcon.addEventListener('click', function () {
    bar.classList.toggle('menu_active');
    close.classList.toggle('menu_active');
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; 
        login.style.display = 'none'; 
    } else {
        menu.style.display = 'block'; 
        login.style.display = 'block'; 
    }
});
