/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

//variabile nome + richiesta
var userName = prompt("inserisci il tuo nome");
//variabile cognome + richiesta
var userSurname = prompt("insersci il tuo cognome");
//variabile colore + richiesta
var userColor = prompt("inserisci il tuo colore predefinito");

//print what you get
document.getElementById("userName").innerHTML = userName;
document.getElementById("userSurname").innerHTML = userSurname;
document.getElementById("userColor").innerHTML = userColor;
//print you new password
document.getElementById("userPassword").innerHTML = userName+userSurname+userColor+"21";

