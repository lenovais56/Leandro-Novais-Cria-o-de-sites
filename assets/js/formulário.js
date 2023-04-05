// Validação do formulário

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span__required');
const label = document.querySelectorAll('.label__input');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w)*$/;
const numberRegex = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     nameValidate();
//     emailValidate();
// });

function setError(index) {
    campos[index].style.borderBottom = '1px solid var(--vermelho)';
    span[index].style.display = 'block';
    label[index].style.color = 'var(--vermelho)'
}

function removeError(index) {
    campos[index].style.border = '';
    span[index].style.display = 'none';
    label[index].style.color = '';

}


function nameValidate() {
    if(campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

function empresaValidate() {
    if(campos[1].value.length < 3) {
        setError(1);
    } else {
        removeError(1);
    }
}

function numberValidate() {
    if(!numberRegex.test(campos[2].value) == true) {
        setError(2);
    } else {
        removeError(2);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[3].value)) {
        setError(3);
    } else {
        removeError(3);
    }
}
