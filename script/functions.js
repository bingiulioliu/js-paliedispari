'use strict';
// PALINDROMA
// la parola scritta nel prompt va convertita o tutto in maiuscola o in minuscola
// inverto l`input con .split('').reverse().join(''): arrayzzo, inverto e riunisco
// restituisco la parola invertita
// confronto l'input con la parola invertita

function checkPalindromo(testo) {
    let testoCaps = testo.toUpperCase();
    let testoInvertito = testoCaps.split('').reverse().join('');
    return testoCaps === testoInvertito
}


// PARI E DISPARI
// L'utente sceglie pari o dispari
// L'utente inserisce un numero (eventuale check Number e !=0)
// Pc genera math floor random *5 in una funzione
// Somma due valori
// Controllo del risultato 

let sceltaGiocatore = '';

while (sceltaGiocatore !== 'PARI' && sceltaGiocatore !== 'DISPARI') {
    sceltaGiocatore = prompt(`PARI o DISPARI?`);
    
}
console.log(`Hai scelto: ${sceltaGiocatore}`)

let numeroGiocatore = '';
while (isNaN(numeroGiocatore) || numeroGiocatore < 1 || numeroGiocatore > 5) {
    numeroGiocatore = parseInt(prompt('Scegli un numero da 1 a 5'));
    console.log(`Riprova, inserisci un valore corretto`);
}
console.log(`Hai scelto: ${numeroGiocatore}`)

function letsPlay() {
    let numeroPc = Math.floor(Math.random() * 5) + 1;
    return numeroPc;
}
let numeroRandomPc = letsPlay();
console.log(`PC ha scelto: ${numeroRandomPc}`);
let somma = (numeroGiocatore) + (numeroRandomPc);
console.log(`Totale: ${somma}`);
function checkPariDispari(num) {
    if (num % 2 === 0) {
        return 'PARI';
    }   else {
        return 'DISPARI';
    }
}

let checkRisultato = checkPariDispari(somma);

if (checkRisultato === sceltaGiocatore) {
    console.log(`Totale: ${somma}. Hai vinto!`);
}   else {
    console.log(`Totale: ${somma}. Hai perso!`);
}