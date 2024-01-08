export class Monstre {
    constructor(nom, arme, pv, force) {
        this.nom = nom
        this.arme = arme
        this.pv = pv
        this.force = force
    }

    Attaquer(cible) {
        let degats = this.arme.degats + this.force
        cible.SubirDegats(degats)
        console.log(`${this.nom} attaque ${cible.nom} lui infligeant ${degats} point(s) de dégat(s)`);
    }

    SubirDegats(degats) {
        this.pv -= degats
        if (this.pv <= 0) {
            alert(`${this.nom} a été vaincu ! PS : T'es nul`)
        }
    }
}