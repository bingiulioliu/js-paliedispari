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
