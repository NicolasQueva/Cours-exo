const affichage = document.querySelector(".affichage")

let affich
let contact = [
    {
        Prenom :"Jean",
        Nom: "Dupont",
        Age : "15"
    },
    {
        Prenom :"Pierre",
        Nom: "Durant",
        Age : "16"
    },
    {
        Prenom :"Jean",
        Nom: "Martin",
        Age : "17"
    }
]

affich += `</table>La personne a la 2éme position de l'annuaire est : <br>`
affich += contact[1].Prenom + " " +contact[1].Nom

affichage.innerHTML = affich