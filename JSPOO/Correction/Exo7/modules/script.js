import { Contact } from "./classes/Contact.js";

const affich = document.querySelector('#tablecontact')
const bouton = document.querySelector('#btn')

const Contacts = []
function createFakeContact() {
    let annuaire = [
        {
            titre: "Mr",
            nom: "Dupont",
            prenom: "Jean",
            daten: "08 10 1973",
            telephone: "+(33)6 12 36 54 78",
            email: "jdupont@gmail.com"
        },
        {
            titre: "Mme",
            nom: "Doe",
            prenom: "Jeane",
            daten: "08 10 1985",
            telephone: "+(33)6 12 36 54 72",
            email: "jDdoe@gmail.com"
        },
        {
            titre: "Mr",
            nom: "Martin",
            prenom: "Jacque",
            daten: "08 10 1933",
            telephone: "+(33)6 12 36 54 11",
            email: "jmartin@gmail.com"
        }
    ]
    for (let infoContact in annuaire) {
        let tmp = new Contact(annuaire[infoContact].titre, annuaire[infoContact].nom, annuaire[infoContact].prenom,
            annuaire[infoContact].daten, annuaire[infoContact].telephone, annuaire[infoContact].email)
        Contacts.push(tmp)
    }
    
}

function updateTab() {
    affich.innerHTML = ""
    Contacts.forEach((contact) => {
        affich.innerHTML += `
    <tr>
        <td>${contact.titre}</td>
        <td>${contact.nom}</td>
        <td>${contact.prenom}</td>
        <td>${contact.daten}</td>
        <td>${contact.tel}</td>
        <td>${contact.mail}</td>
    </tr>
    `
    })
}

bouton.onclick = () => {
    console.log("clique sur le bouton");
    const nom = document.querySelector('#nom').value
    const prenom = document.querySelector('#prenom').value
    const date = document.querySelector('#date').value
    const telephone = document.querySelector('#tel').value
    const email = document.querySelector('#email').value
    const titre = document.querySelector('#Mr').checked ? "Mr" : "Mme"
    if (nom != "" && prenom != "" && email != "" && telephone != "") {
        let tmp = new Contact(titre, nom, prenom, date, telephone, email)
        Contacts.push(tmp)
        updateTab()
    }
    else {
        console.log("Formulaire invalide");
    }
    resetForm()
}

function resetForm() {
    document.querySelector('#nom').value= ""
    document.querySelector('#prenom').value= ""
    document.querySelector('#date').value= ""
    document.querySelector('#tel').value= ""
    document.querySelector('#email').value= ""
}

console.log(Contacts);
createFakeContact()
console.log(Contacts);
console.log(Contacts.length);

updateTab()