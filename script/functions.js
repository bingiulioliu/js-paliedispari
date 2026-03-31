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

let sceltaGiocatore = prompt('PARI o DISPARI?');

if (sceltaGiocatore === 'PARI' || sceltaGiocatore === 'DISPARI') {
    console.log(`Hai scelto ${sceltaGiocatore}`)
}
    else{
        console.log(`Riprova, inserisci un valore corretto`)
    }

let numeroGiocatore = prompt('Scegli un numero');