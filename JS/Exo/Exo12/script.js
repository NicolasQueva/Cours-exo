const affichage = document.querySelector(".affichage")

let affich, resultat, nb1, nb2

nb1 = Number(prompt("Veuillez entrer un premier nombre : "))
nb2 = Number(prompt("Veuillez entrer un second nombre :"))
resultat = nb1 % nb2
if (resultat == 0) {
    affich = `${nb1} est divisible par ${nb2}, le resultat est ${resultat}`
} else {
    affich = `${nb1} n'est pas divisible par ${nb2}, le resultat est ${resultat}`
}

// Ternaire 
// nb % nb == 0 ? affich = `${nb1} est divisible par ${nb2}, le resultat est ${resultat}` : affich = `${nb1} n'est pas divisible par ${nb2}, le resultat est ${resultat}` 
affichage.innerHTML = affich