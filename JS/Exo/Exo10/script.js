const affichage = document.querySelector(".affichage")

let affich, mail, mdp, Verifmail, Verifmdp

Verifmail = "contact@teamjs.fr"
Verifmdp= "leLundiAuSoleil"

mail = prompt("Veuillez entrer votre email")
mdp = prompt("Veuillez entrer votre mot de passe : ")

if(mail == Verifmail && mdp == Verifmdp){
    affich =`<p>Bienvenue Sur votre espace sécurise </p>`
}
else {
    alert("Information incorrecte !!!")
    affich =` Information incorrecte !!!`
}

affichage.innerHTML = affich