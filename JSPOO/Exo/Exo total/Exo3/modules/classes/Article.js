export class Article{
    constructor(nom, prix, stock) {
        this.nom = nom
        this.prix = prix
        this.stock = stock
    }

    majstock(rstock){
        this.stock -= rstock
        console.log( `La stock de ${this.nom} est maintenant de ${this.stock}`);
    }
}