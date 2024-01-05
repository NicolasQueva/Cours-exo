import { Personne } from "./classes/Personne.js";
import { Etudiant } from "./classes/Etudiant.js";

const affichage = document.querySelector(".affichage")
let personne =  new Etudiant(" Toto ", " Titi ", 20 , " 2A ")
let personne2 =  new Etudiant(" Tyty ", " Tata ", 22 , " 1B ")
 
affichage.innerHTML = `${personne.parler()} ${personne.display()}`
affichage.innerHTML += `${personne2.parler()} ${personne2.display()}`