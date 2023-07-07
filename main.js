const inputData = document.querySelector('.container__form__input--text');
const inputButton = document.querySelector('.container__form__input--button');
const root = document.querySelector('.root');

function esUnPalindromo() {
    const word = inputData.value;
    const more = word.split(' ').join('').toLowerCase();
    const word2 = word.split('').reverse().join('');
    const word3 = word2.split(' ').join('').toLowerCase();
    if(word == '') {
        alert('Por favor introduce una palabra o frase');
    }else if(more == word3) {
        root.classList.remove('false');
        root.classList.add('green');
        root.innerHTML = `${word} es un palindromo`;
    }else {
        root.classList.remove('green');
        root.classList.add('false');
        root.innerHTML = `${word} NO es un palindromo`;
    }
}
inputButton.addEventListener('click', esUnPalindromo);
