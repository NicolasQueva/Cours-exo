const affich = document.querySelector(".affichage")
let mdp, mdpreverse,affichage

mdp = prompt("Veuillez rentre un mot de passe : ")

affichage = `
<p>Le mot de passe entrer est ${mdp}</p>
<p>Le mot de passe inversé est ${ mdpreverse= mdp.split('').reverse().join('')}</p>
`
if (mdp == mdpreverse){
    affichage += `Le ${mdp} est un palimdrome`
}
else{
    affichage += `Le ${mdp} n'est pas un palimdrome`
}
affich.innerHTML = affichage