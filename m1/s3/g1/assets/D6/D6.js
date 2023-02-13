/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;
}
console.log(area(2, 3));





/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
    if (a != b) {
     return a + b;
    }else {
        return (a+b)*3
    }
}

console.log(crazySum(2, 2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (num){
if (num>19) {
    console.log(Math.abs(num-19)*3);
    
} else {
    console.log(Math.abs(num-19));
}
}
 crazyDiff(20);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (n){
    if(Number.isInteger(n)){
        if(n>20 && n<= 100 || n == 400){
            return true
        }else{
            return 'non è compreso tra 20 e 100 e non è uguale a 400'
        }
    }else{
        return 'dai un numero intero'
    }
    }
    
    console.log(boundary(34))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (stringa){

    if ( stringa.startsWith("EPICODE")) {
        return stringa
    }else{
        return "EPICODE " + stringa
    }
}
console.log(epify("sto studiando per EPICODE"))
console.log(epify("sto studiando"))
console.log(epify("EPICODE sto studiando"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
    if (num % 3 === 0 ) {
        return ('è multiplo di 3 ');
        } else if (num % 7 === 0) {
        return ('è multiplo di 7 ');
    } else {
        return("non è un multiplo di 3 o di 7");

    }
}
    console.log(check3and7(9));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
return stringa.split("") .reverse().join("");
}
console.log(reverseString ("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa){
    let stringaSpezzata= stringa.split(" ")
    
     for (let i =0;i<stringaSpezzata.length;i++ ){
        stringaSpezzata[i]=stringaSpezzata[i][0].toUpperCase()+stringaSpezzata[i].substr(1);
     }

     return stringaSpezzata.join(" ")
     
} console.log(upperFirst("epicode school"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, -1);
}
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
function giveMeRandom(n) {
let array = [];
for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 10));
}
return array;

}

console.log (giveMeRandom (11));