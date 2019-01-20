var opener = document.querySelector('.main-nav__mobile-opener .fa-bars');
var main_nav = document.querySelector('.main-nav');

console.log(main_nav);

opener.onclick = function () {
    if (main_nav.classList.contains('is-active')) {
        main_nav.classList.remove('is-active');
    }else{
        main_nav.classList.add('is-active');
    }
}
