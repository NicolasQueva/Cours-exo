import { Contact } from "./classes/Contact.js";
const table = document.querySelector(".table")
let contact = new Contact()
let genre = document.querySelectorAll('input[name="genre"]')
let titre, nom, prenom, daten, tel, mail
let btn = document.querySelector("input[type='button']")


btn.addEventListener("click", ajouter)

// affiche la valeur du radio coché

function ajouter() {
    for (let i = 0; i < genre.length; i++) {
        if (genre[i].checked) {
            titre = genre[i].value
            break
        }
    }
    nom = document.getElementById("Nom").value
    prenom = document.getElementById("Prenom").value
    daten = document.getElementById("Date").value
    tel = document.getElementById("tel").value
    mail = document.getElementById("mail").value
    console.log(`${titre}, ${nom}, ${prenom}, ${daten}, ${tel}, ${mail}`)
    contact.ajoutContact(titre, nom, prenom, daten, tel, mail)
    table.innerHTML = contact.affichage()
}



