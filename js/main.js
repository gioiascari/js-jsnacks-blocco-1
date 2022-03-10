console.log("OK Js");
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//Nomi Invitati
const invitati = ["Gioia", "Giorgio", "Luca", "Mario"];

let ospite = prompt("Inserisci il tuo nome");

let messaggio = false;

for (let i = 0; i < invitati.length; i++) {
  if (invitati[i] === ospite) {
    console.log("Benvenuto");
    alert("Benvenuto");
    messaggio = true;
  } else {
    console.log("Non sei stato invitato");
  }
}
