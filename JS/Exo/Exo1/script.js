
const affich1 = document.querySelector(".affich1");
const affich2 = document.querySelector(".affich2");
let prenom = prompt("Veuillez entrer votre prenom :")
let nom = prompt("Veuillez entrez votre nom : ")
affich1.innerHTML = "Vous avez saisis :" + prenom
affich2.innerHTML = "Vous avez saisis :" + nom
const names = document.querySelector(".names");
names.innerHTML = prenom + " " + nom