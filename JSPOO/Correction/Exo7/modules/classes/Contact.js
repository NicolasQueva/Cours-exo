export class Contact {
    constructor(titre, nom, prenom, daten, tel, mail) {
        this.titre = titre
        this.nom = nom
        this.prenom = prenom
        this.daten = daten
        this.tel = tel
        this.mail = mail
    }

    toString(){
        return ` Titre : ${this.titre} - Nom : ${this.nom} - Prénom : ${this.prenom}`
    }
}