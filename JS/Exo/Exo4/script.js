const affich = document.querySelector(".affichage")
let mdp, mdpreverse,affichage

mdp = prompt("Veuillez rentre un mdp : ")

affichage = `<p>Le mot de passe entrer est ${mdp}</p>`
affichage += `<p>Le mot de passe inversé est ${ mdpreverse= mdp.split('').reverse().join('')}</p>`
if (mdp == mdpreverse){
    affichage += `le ${mdp} est un palimdrome`
}
else{
    affichage += `le ${mdp} n'est pas un palimdrome`
}
affich.innerHTML = affichage