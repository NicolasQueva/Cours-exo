import { Arme } from "./classes/Arme.js";
import { Joueur } from "./classes/Joueur.js";
import { Monstre } from "./classes/Monstre.js";

console.log("Exercice 6");

let arme1 = new Arme("Épée", 20)
let arme2 = new Arme("Arc", 15)
let arme3 = new Arme("Griffe", 30)
let setArme = [arme1, arme2]
let choix = Number(prompt("Choisir une arme : [0 : Épée] [1 : Arc]"))
let choixArme =  setArme[choix]
let joueur1 = new Joueur(prompt("Entrer nom du joueur"), 15, choixArme)
let mob1 = new Monstre("Dragon", arme3, 30, 10)

joueur1.Attaquer(mob1)
mob1.Attaquer(joueur1)