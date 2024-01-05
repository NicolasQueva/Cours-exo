import { Monstre } from "./Monstre.js";
export class EquipementM extends Monstre {
    constructor(type, difficulté, pvm, resistance, typarmure, arme) {
        super(type, difficulté, pvm)
        this.resistance = resistance
        this.typarmure = typarmure
        this.arme = arme
    }
}