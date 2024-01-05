import { CompteBancaire } from "./classes/CompteBancaire.js";
import { CompteEpargne } from "./classes/CompteEpargne.js";
const affichage = document.querySelector(".affichage")
let titu1 = new CompteEpargne("Titi", 2500, 1.05)
let titu2 = new CompteEpargne("Tata", 1500, 1.02)





titu2.interet()
affichage.innerHTML = titu1.affichsoldes()
affichage.innerHTML += titu1.withdraw(500)
affichage.innerHTML += titu1.deposit(20)
affichage.innerHTML += titu1.interet()
affichage.innerHTML += titu1.deposit(50)

