    export class Adherent{
    constructor(prenom, nom, listelivre){
        this.prenom = prenom
        this.nom = nom
        this.listelivre = []
    }
    emprunterlivre(livre) {
        this.listelivre.push(livre)
        console.log(`${this.prenom} a emprunté le livre ${livre.titre}`);
    }

}