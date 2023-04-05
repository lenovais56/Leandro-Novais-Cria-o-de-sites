function clickAccordion(i) {
    let item = document.getElementsByClassName('duvidas__item')[i];

    let icone = document.getElementsByClassName('duvidas__icon')[i];

    let resposta = item.lastElementChild.classList.contains('duvidas__resposta');

    if(resposta == true) {
        item.lastElementChild.classList = 'resposta__ativa texto';
        icone.style.transform = "rotate(" + 180 + "deg)";
    } else {
        item.lastElementChild.classList = 'duvidas__resposta';
        icone.style.transform = "rotate(" + 0 + "deg)";
    }
}