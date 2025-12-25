// 1. Chiediamo all’utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola");
// 2. Creiamo una funzione per verificare se è palindroma
function isPalindroma(parola) {
  // invertiamo la parola
  const parolaInversa = parola.split("").reverse().join("");

  // confrontiamo parola originale e invertita
  if (parola === parolaInversa) {
    return true;
  } else {
    return false;
  }
}

// 3. Usiamo la funzione
const risultato = isPalindroma(parolaUtente);

// 4. Stampiamo il risultato
if (risultato) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}