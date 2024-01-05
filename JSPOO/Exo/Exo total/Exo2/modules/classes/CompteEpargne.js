import { CompteBancaire } from "./CompteBancaire.js";

export class CompteEpargne extends CompteBancaire {
    constructor(titulaire, solde, tinteret) {
        super(titulaire, solde)
        this.tinteret = tinteret
    }
    affichsoldes() {
        return `<p>${super.affichsolde()}</p>`
    }

    interet() {

        this.solde *= this.tinteret
        return `<p>${this.titulaire}: Vos interet sont de ${this.tinteret} votre nouveau solde est de ${this.solde}</p>`
    }
}