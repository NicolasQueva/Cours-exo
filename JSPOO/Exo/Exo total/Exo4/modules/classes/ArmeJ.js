import { Joueur } from "./Joueur.js";

export class ArmeJ extends Joueur {
    constructor(Nom, Race, classe, pv, Niveau, Arme) {
        super(Nom, Race, classe, pv, Niveau)
        this.Arme = Arme
    }

    attaque(spell) {
        if (spell != 0) {
            let damage
            if (spell == "Fireball") {
                if (this.Arme == "Baton" && this.classe == "Mage") {
                    damage = (Math.floor(Math.random() * (8 - 5 + 1)) + 5) * this.Niveau
                    return damage
                } else if (this.Arme != "Baton" && this.classe == "Mage") {
                    damage = (Math.floor(Math.random() * (6 - 3 + 1)) + 3) * this.Niveau
                    return damage
                } else if (this.classe != "Mage") {
                    damage = (Math.floor(Math.random() * (3 - 1 + 1)) + 1) * this.Niveau
                    return damage
                }
            }
        }
        else { 
            return 0 
        }
    }
}