console.log("Ok Js");
//Chiedi un numero di 4 cifre all’utente e
//calcola la somma di tutte le cifre che compongono il numero.
let numero;
while (isNaN(parseInt(numero)) || numero.length !== 4) {
  numero = prompt("inserisci un numero di 4 cifre");
}

let somma = 0;

for (let i = 0; i < numero.length; i++) {
  const carattere = numero;
  somma += parseInt(carattere);
}
console.log(somma);
//Esercizio corretto, mancava lo step del while
