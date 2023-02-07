/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let dataType = ["number","string","boolean","object"];
// console.log(dataType);


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let name = "Giuseppe";
// console.log(name);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number1 = 12;
// let number2 = 20;
// let addiction = number1 + number2;

// console.log(addiction);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let x = 12;
// console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const NAME= "Canzoneri";
// name = "Canzoneri";
// console.log(NAME);



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let subtraction = 4 - x;
// console.log(Math.abs((subtraction)));

// let subtraction2 = x - 4;
// console.log(subtraction2);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let name1 = "john";
// let name2 = "John";


// if(name1 != name2) {
//   console.log("Le due parole sono differenti!");
// } else {
//   console.log("Le due parole sono identiche");
// }

// let risultato = (name1 != name2) ? "Le due parole sono differenti!" : "Le due parole sono identiche";
// console.log(risultato);

// let risultato = (name1.toLowerCase != name2.toLowerCase) ? "Le due parole sono differenti!" : "Le due parole sono identiche";
// console.log(risultato);

// let risultato = (name1 != name2) ? "DIVERSE!" : "identiche!";

// document.getElementById("risposta").innerHTML = `Le due variabili sono ${risultato}`


// ISTRUZUIONI CONDIZIONALI

// IF, ELSE IF...
// if (eta < 18) {
//   console.log("sei minorenne");
// } else if (eta >= 18 && eta <= 70) {
//   console.log("sei grande");
// } else {
//   console.log("sei vecchio");
// } 

// SWITCH
// let color = "pink";
// switch(color) {
//   case "red":
//     console.log("il colore che hai scelto e il rosso");
//     break;
//   case "blue":
//     console.log("il colore che hai scelto e il blu");
//     break;
//   case "yellow":
//     console.log("il colore che hai scelto e il giallo");
//     break;
//   case "green":
//     console.log("il colore che hai scelto e il verde");
//     break;
//   default:
//     console.log("non hai selezionato alcun colore tra quelli disponibili!");
// }

// CICLI

// CICLO FOR
// for(let indice = 1; indice <= 10; indice++) {
//   console.log(`hai digitato il numero ${indice}`);
// }

// DIFFERENZE TRA VARI CICLI FOR
// let numeri = [1,5,9,45,789,55];
// console.log(numeri.length);

// CICLO "FOR"
// for (let indice = 0; indice < numeri.length; indice++) {
//   console.log(numeri[indice]);
// }

// CICLO "FOR IN"
// for (let indice in numeri) {
//   console.log(numeri[indice]);
// }

// CICLO "FOR OF"
// for (let indice of numeri) {
//   console.log(indice);
// }

// DIFFERENZE TRA CICLO "DO" E CICLO "DO WHILE"
// let indice3 = 1;

// while (indice3 < 1) {
//   console.log(indice3);
//   indice3++;
// }

// do { 
//   console.log(indice3);  //1 e stampa
//   indice3++;             //2
//  } while (indice3 < 1);  //2


// FUNZIONI
function possoEntrare () {
  let eta = prompt("Per favore inserisci la tua età");
  if (eta < 18) {
    document.getElementById("risposta").innerHTML = "Aspetta tra qualche anno";
    console.log("Aspetta tra qualche anno");
  } else if (eta >= 18 && eta <= 100) {
    document.getElementById("risposta").innerHTML = "Puoi entrare";
    console.log("Puoi entrare");
  } else {
  document.getElementById("risposta").innerHTML = "sarebbe meglio che rimanessi a casa!";
  console.log("sarebbe meglio che rimanessi a casa!");
  }
}


