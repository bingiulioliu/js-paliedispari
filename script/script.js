let parolaUtente = prompt('Inserisci parola per check Palindromo');
let risultato = checkPalindromo(parolaUtente);

if (risultato === true) {
    console.log(`${parolaUtente} è un palindromo!`);
} else {
    console.log(`${parolaUtente} non è un palindromo!`);
}