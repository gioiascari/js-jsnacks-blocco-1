console.log("OK Js");
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//Nomi Invitati
const nomi = ["Gioia", "Giorgio", "Luca", "Mario"];

let nomeUtente = prompt("Inserisci il tuo nome");

if (nomeUtente) {
  for (let i = 0; i < nomi.length; i++) {
    const nomeValido = nomi[i];
    if (nomeUtente === nomeValido) {
      console.log("Benvenuto");
    }
  }
}
