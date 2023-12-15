const result = document.querySelector(".affichage")

//Déclaration de plusieurs variables en une seul fois
let prenom, nom, resultat , affichage

prenom = prompt("Veuillez entrer votre prénom")
nom = prompt("Veuillez entrer votre nom")
resultat = `${prenom} ${nom}`

affichage = `<p> Vous avez saisi : ${prenom}</p>`
affichage += `<p> Vous avez saisi : ${nom}</p>`
affichage += `<p> Bonjour ${resultat}</p>`

result.innerHTML = affichage
