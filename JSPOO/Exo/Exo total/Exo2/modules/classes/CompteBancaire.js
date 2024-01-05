export class CompteBancaire {
    constructor(titulaire, solde) {
        this.solde = solde
        this.titulaire = titulaire
    }

    withdraw(liquid) {
        this.solde -= liquid
        return `<p>Vous avez retirer ${liquid}€ il vous reste ${this.solde}€</p>`
    }

    deposit(liquide) {
        this.solde += liquide
        return `<p>Vous avez ajouter ${liquide}€ Vous avez ${this.solde}€</p>`
    }

    affichsolde() {
        return `${this.titulaire}, votre solde est ${this.solde}€`
    }
}