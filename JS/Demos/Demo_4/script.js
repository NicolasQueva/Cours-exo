
let compte = -300

//Si - Sinon
if (compte > 0) {
    console.log("Votre compte est créditeur");
}
else {
    console.log("Votre compte est débiteur");
}
//Sinon ... Si

if (compte > 0) {
    console.log("Votre compte est créditeur");
} else if (compte == 0) {
    console.log("Votre compte est à 0");
} else {
    console.log("Votre compte est débiteur");
}

let estVrai = false

if (estVrai) {
    console.log("Vrai");
} else {
    console.log("faux");
}

console.log(1 === 1); // === => sert a comparer la valeur et le type 
console.log("1" === 1); // Faux
console.log(1 == 1); // sert a comparer UNIQUEMENT la valeur //Vrai
console.log("1" == 1); // Vrai
console.log(1 != 1); // != => Sert a notifier une différence //Faux
console.log(3 != 1); //Vrai
console.log(3 !== 3); // !==> Ser a notiier une différence valeur et type

/*
    Opérateur logique || => OU;
    Opérateur logique && => ET;
    Opérateur logique ! => Contraire de ...
    
*/

let estVrai2 = true

if (!estVrai2) {
    console.log("Faux");
}
else {
    console.log("Vrai");
}
