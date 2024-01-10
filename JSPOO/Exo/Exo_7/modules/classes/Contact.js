export class Contact {
    constructor() {
        this.lcontact = []
    }

    ajoutContact(titre, nom, prenom, daten, tel, mail) {
        this.lcontact.push(titre, nom, prenom, daten, tel, mail)
        console.table(this.lcontact);
        
    }

    affichage(){
        this.lcontact.forEach(item => {
           console.log(`<td>${item.titre}</td><td>${item.nom}</td><td>${item.prenom}</td><td>${item.daten}</td><td>${item.tel}</td><td>${item.mail}</td>`);
        })
    }
}