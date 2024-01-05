import { Voiture } from "./classes/Voiture.js";
const affichage = document.querySelector(".affich")
let voiture1 = new Voiture("BMW", "Serie 1", 80)
let voiture2 = new Voiture("Mercedes", "GLB", 100)
let affich

voiture1.Accelerer()
voiture1.Accelerer()
voiture1.Accelerer()

voiture2.Accelerer()
voiture2.Accelerer()
voiture2.Tourner()
voiture2.Tourner()

affichage.innerHTML = voiture1.ToString()
affichage.innerHTML += voiture2.ToString()

