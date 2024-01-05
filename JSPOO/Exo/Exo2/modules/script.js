import { Vehicule } from "./classes/Vehicule.js";
import { Moto } from "./classes/Moto.js";
import { Voiture } from "./classes/Voiture.js";
const affichage = document.querySelector(".affich")

let voiture = new Voiture("Renault", " Kangoo", " 240.000km ", 2003, " Climatisé")
console.log(voiture.ToString());
let moto = new Moto("BMW", " R1150R Rockster", " 65.000km ", 2005 )
moto.ToString()


affichage.innerHTML = `<p>Voiture : ${voiture.ToString()}<p>`
affichage.innerHTML += `<p>Moto : ${moto.ToString()}<p>`


