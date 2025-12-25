Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUtente = prompt("Scegli 'pari' o 'dispari'").toLowerCase();
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
Sommiamo i due numeri
const numeroComputer = numeroRandom(1, 5);
const somma = numeroUtente + numeroComputer;
console.log(`Numero utente: ${numeroUtente}`);
console.log(`Numero computer: ${numeroComputer}`);
console.log(`Somma: ${somma}`); 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isPari(num) {
  return num % 2 === 0;
} 
Dichiariamo chi ha vinto
const sommaPari = isPari(somma);
if ((sommaPari && sceltaUtente === "pari") || (!sommaPari && sceltaUtente === "dispari")) {
  console.log("Hai vinto!");
} else {
  console.log("Ho vinto io!");
} 