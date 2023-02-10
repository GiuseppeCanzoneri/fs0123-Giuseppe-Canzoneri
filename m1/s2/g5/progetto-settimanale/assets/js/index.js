function aggiungiSimbolo(elemento) {
    let simbolo = elemento.getAttribute ('data-simbolo');

    let display = document.querySelector ('#display');
    display.value += simbolo;
}

function totale() {
let display = document.querySelector ('#display');
display.value = eval(display.value);
}


function cancella() {
    let display = document.querySelector ('#display');
    display.value = value = '';
    }


// function cancella() {
//     let allclear = document.querySelector ('#clear').value = '';
// }







