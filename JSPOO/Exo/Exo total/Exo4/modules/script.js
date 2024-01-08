import { ArmeJ } from "./classes/ArmeJ.js";
import { ArmeM } from "./classes/ArmeM.js";

let joueur1 = new ArmeJ("KaelThas", "Elfe", "Mage", 5, 1, "Baton")
let mob1 = new ArmeM("Orc", 8, 1, "Club")
let string = "a"
console.log(joueur1.pv);
console.log(mob1.pv);
let pvj = joueur1.pv
let pvm = mob1.pv
while (pvm > 0 || pvj > 0) {
    let damage = joueur1.attaque(prompt("Veuillez entrer le nom de votre attaque"))
    if (damage != 0) {
        if (typeof (damage) != typeof (string)) {
            pvm -= damage
            if (damage > 3) {
                console.log(`L'${mob1.type} a subit ${damage} point(s) de dégat(s), il lui reste ${pvm} point(s) de vie `);
            } else {
                console.log(`Tu n'as pas pu lancé ta boule de feu tu le frappes avec ton baton a la place !`);
                console.log(`L'${mob1.type} a subit ${damage} point(s) de dégat(s), il lui reste ${pvm} point(s) de vie `);
            }
        }
        if (pvm > 0) {
            damage = mob1.attaque("Taper")
            console.log(`${joueur1.nom} a subit ${damage} point(s) de dégat(s), il te reste ${pvj} point(s) de vie`);
        }
        if (pvm <= 0 || pvj <= 0) {
            break;
        }
    } else {
        break;
    }
} 

console.log("GameOver");