export class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque
        this.modele = modele
        this.vitesse = vitesse
    }

    ToString(){
       return `<p>Voiture : ${this.marque} ${this.modele} roule à ${this.vitesse} km/h</p>`
    }

    Accelerer(){
        this.vitesse += 10
    }
    Tourner(){
        this.vitesse -= 5 
    }
}