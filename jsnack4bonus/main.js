console.log("Ok Js");
//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

let numero;

while (isNaN(numero)) {
  numero = parseInt(prompt("Inserisci un numero"));
}
if (numero % 2 === 0) {
  console.log(numero);
} else {
  numero++;
  console.log(numero);
}
