const affichage = document.querySelector(".affichage")
// Tableau numérique = Accéder a un tableau via son index
let affich
let tableau = []
// let tableau = new Array[] <---- Équivalent

tableau[0] = "Pomme" //Affectation d'une valeur a l'index 0
tableau[1] = "Poire" //Affectation d'une valeur a l'index 1

console.log(tableau);
console.table(tableau); // Afficher le tableau complet
console.log(tableau[1]); // Afficher uniquement l'index saisi

tableau.push("Banane") //ajouter un élément a la fin de mon tableau
console.table(tableau);

console.log(tableau.includes("Banane")); // verifie si un élement existe dans notre tableau
console.log("*********");
// for ... of 
/*
    ["Pomme, Poire, Banane"]

    Premier tour de boucle => fruit = "Pomme"
    Deuxième tour de boucle => fruit = "Poire"
    Troisième tour de boucle => fruit = "Banane"

*/
for (let fruit of tableau) {
    console.log(fruit);
}
console.log("*********");
tableau.forEach((fruit) => {
    console.log(fruit);
})

// Retirer le dernier élément d'un tableau
tableau.pop()

//Retirer le premier element d'un tableau
tableau.shift()

console.table(tableau);
tableau.push("Banane", "Tomate")
console.table(tableau);

console.log("********");
tableau.splice(1, 1, "Pomme");
console.table(tableau);

console.log(tableau.length);
affichage.innerHTML = affich