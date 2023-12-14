// Comentaire sur une ligne

/* Comentaire
    sur plusieur
    ligne */


// alert = Afficher un message en popup
alert("Hello World")

// console.log (ou clg) Afficher un message dans la console 
console.log("Coucou la console");

// Chercher une balise html avec le nom de classe ".result"
const result = document.querySelector(".result");

//Déclaration de variable et affection de valeur
//prompt = Demander a l'utilsateur de rentrer un message
let prenom = prompt("Veuillez Saisir votre prénom :")

console.log(prenom);

//Faire afficher un message sur un message html
result.innerHTML = "Bonjour " + prenom