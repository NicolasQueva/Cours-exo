export class Joueur {
    constructor(nom, arme, pv) {
        this.nom = nom
        this.arme = arme
        this.pv = pv
    }

    Attaquer(cible){
        let degats = this.arme.degats
        cible.SubirDegats(degats)
        console.log(`${this.nom} attaque ${cible.nom} lui infligeant ${degats} point(s) de dégat(s)`);
    }

    SubirDegats(degats){
        this.pv -= degats
        if (this.pv <= 0){
            alert(`${this.nom} a été vaincu ! PS : T'es nul`)
        }
    }
}