import { Monstre } from "./Monstre.js";

export class ArmeM extends Monstre {
    constructor(type, pv, niveau, arme) {
        super(type, pv, niveau)
        this.arme = arme
    }

    attaque(spell){
        if (this.Arme == "Club"){
             if (spell == "Taper"){
                let damage = (Math.floor(Math.random() * (4 - 2 + 1)) + 2)*this.Niveau
                return damage
             } 
        }
    }

}