console.log("Ok Js");
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
let array = [];

let i = 0;

while (i < 6) {
  let numero = parseInt(prompt("inserisci un numero"));

  while (isNaN(numero)) {
    let numero = parseInt(prompt("inserisci di nuovo un numero"));
  }
  if (numero % 2 != 0) {
    array.push(numero);
  }
  i++;
}
console.log(array);
