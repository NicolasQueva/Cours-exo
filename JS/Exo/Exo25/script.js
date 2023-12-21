const affichage = document.querySelector(".affichage")

let affich
let etudiants = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            Français: 16,
            Anglais: 7,
            Humour: 14,
        },
        moyenne: 12.3
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            Français: "15",
            Anglais: "6",
            Humour: "16",
            Informatique: "4",
            Sport: "10"
        },
        moyenne: "10.2"
    }
]
console.table(etudiants);
affich = `<h3> Notes des étudiants </h3><hr>`
let j = 0

for (let etud of etudiants) {
    affich += `<p>${etud.prenom} ${etud.nom}<p><ul>`
    for (let mat in etud.matieres) {
        affich += `<li>${mat} : ${etud.matieres[mat]}/20</li>`
    }
    affich += `</ul><p>Moyenne générale : ${etud.moyenne}/20</p><hr>`
    ++j
}

affichage.innerHTML = affich