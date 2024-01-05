export class Personne{
    constructor(nom, prenom, age, ) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }

    display(){
        return `Vos information : <li>Nom :${this.nom}</li> <li>Prenom: ${this.prenom}</li> <li>age: ${this.age} ans</li>`
    }

    parler(){
        return `Bonjour ${this.prenom} ${this.nom}`
    }
}