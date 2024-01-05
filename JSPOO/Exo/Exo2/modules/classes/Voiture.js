import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, Clim) {
        super(marque, modele, kilometrage, annee)
        this.Clim = Clim
    }
    ToString() {
       let affich = ``
        return `${super.ToString()}, ${this.Clim}`;

    }
}