import { Personne } from "./Personne.js";
export class Etudiant extends Personne {
    constructor(nom, prenom, age, idEtudiant) {
        super(nom, prenom, age)
        this.idEtudiant = idEtudiant
    }

    display(){
        return `<p>${super.display()} <li>Votre Identifiant ${this.idEtudiant}</li></p>`
    }
}