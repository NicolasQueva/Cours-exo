const affichage = document.querySelector(".affichage")

let affich, taille, poids

taille = Number(prompt("Entrez votre taille (en cm) : "))
poids = Number(prompt("Entrez votre poids (en kg) :"))
affich = `Pour ${taille}cm et ${poids}kg`
switch (true) {
    case ((poids >= 43 && poids <= 47 && taille >= 145 && taille <= 169) || (poids >= 48 && poids <= 53 && taille >= 145 && taille <= 166) || (poids >= 54 && poids <= 59 && taille >= 145 && taille <= 163) || (poids >= 60 && poids <= 65 && taille >= 145 && taille <= 160)):
        affich += `<p>Taille 1</p>`
        break;
    case ((poids >= 48 && poids <= 53 && taille >= 169 && taille <= 178) || (poids >= 54 && poids <= 59 && taille >= 166 && taille <= 175) || (poids >= 60 && poids <= 65 && taille >= 163 && taille <= 172) || (poids >= 66 && poids <= 71 && taille >= 160 && taille <= 169)):
        affich += `<p>Taille 2</p>`
        break;
    case ((poids >= 54 && poids <= 59 && taille >= 178 && taille <= 183) || (poids >= 60 && poids <= 65 && taille >= 175 && taille <= 183) || (poids >= 66 && poids <= 71 && taille >= 172 && taille <= 183) || (poids >= 72 && poids <= 77 && taille >= 163 && taille <= 183)):
        affich += `<p>Taille 3</p>`
        break;
    default:
        affich += `<p>Erreur</p>`
        break;
}

affichage.innerHTML = affich