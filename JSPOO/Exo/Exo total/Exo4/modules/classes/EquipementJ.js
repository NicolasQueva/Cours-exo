import { Joueur } from "./Joueur";
export class EquipementJ {
    constructor(nom, race, argent, niveau, experience, pvj, armor, weapon) {
        super(nom, race, argent, niveau, experience, pvj)
        this.weapon = []
        this.armor = []
    }
}