export class Bibliotheque {
    constructor(nom) {
        this.nom = nom
        this.listeAdherent = []
        this.listeDocument = []
        this.messageBienvenue()
    }

    ajouterAdherent(adherent) {
        this.listeAdherent.push(adherent)
        console.log(`${adherent.prenom} s'est inscrit a la bibliotheque ${this.nom}`);
    }
    
    ajouterDocument(document){
        this.listeDocument.push(document)
        console.log(`${document.titre} ajouté a la bibiliotheque ${this.nom}`);
    }
    messageBienvenue(){
        console.log(`Bienvenue dans la bibliotheque : ${this.nom}`);
    }
}