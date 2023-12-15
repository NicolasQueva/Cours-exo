// Pour remplacer rapidement les valeurs => ctrl + h
const affich1 = document.querySelector(".affich1");
const affich2 = document.querySelector(".affich2");
const names = document.querySelector(".names");

let prenom = prompt("Veuillez entrer votre prenom :")
let nom = prompt("Veuillez entrez votre nom : ")

affich1.innerHTML = "Vous avez saisis :" + prenom
affich2.innerHTML = "Vous avez saisis :" + nom
names.innerHTML = prenom + " " + nom