/*
    camelCase => Premier mot en minusculue et la première lettre de chaque mots en Majuscule
    snake_case => Chaque mot est séparé par un underscore "_"
    PascalCase => Premier lettre de chaque mots est en majuscule
    kebab-case => Entre chaque mot il y a un "-" 
*/

// Pour déclarer une variable, on peut utiliser "let"
let maVariable

// Au moment de l'initialisation (Affection de valeur), JS définira automatiquement celon la syntaxe

let number1 = 15 //type number
let string1 = "texte" // type String (Chaine de caractères)
let boolean = true //type boolean
let emptyvar = null // type null => type par défaut 

// On peut egalement déclarer une constante, donc la valeur sera figée. 
const number = 2


// Pour afficher une variable ou une valeur dans la console je l'apelle par son nom
console.log(number1);

// En JS , je peux utiliser  l'operateur typeof pour demander le type d'une variable
// alt + shift + Fleche du haut/bas  => duplique la ligne
// alt + Haut ou bas => Déplacer la ligne selectionnée
console.log(typeof(string1));
console.log(typeof(boolean));
// Je peux concaténer des valeurs et des variables entre elles grâce au symbole +
// /!\ Cela ne fonctionne pas avec deux nombre
let chaine1 = "Bonjour je m'apelle : "
let chaine2 = "Toto"
let concat1 = chaine1 + chaine2
console.log(concat1);

console.log(number + number1);

// Le type par défaut d'un prompt sera String. Il faut rajouter Number() avant pour qu'il passe en type nombre
let nbr1 = Number(prompt("Veuillez saisir un nombre : "))
let nbr2 = Number(prompt("Veuillez saisir un nombre : "))

console.log(nbr1 + nbr2);
console.log(typeof(nbr1));