//Menu aberto

function menuShow() {
    let menuLista = document.querySelector('.menu__lista');

    if(menuLista.classList.contains('open')) {
        menuLista.classList.remove('open');
        // document.querySelector('.btn__menu').innerHTML = 'menu';
    } else {
        menuLista.classList.add('open');
        // document.querySelector('.btn__menu').innerHTML = 'close';
    }
};

let link = document.querySelector('.menu__item--link');

link.addEventListener('click', sectionShow);


function sectionShow() {
    let menuLista = document.querySelector('.menu__lista');
    
    menuLista.classList.remove('open');
}