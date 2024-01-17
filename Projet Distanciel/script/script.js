
import { Personnage } from "./classes/Personnage.js"

const nom = document.getElementById('Nom')
const prenom = document.getElementById('Prenom')
const age =  document.getElementById('age')
const affi = document.getElementById('Affiliation')
const Prof = document.getElementById('Profession')
const image = document.getElementById('Chara-img')

const Geralt = new Personnage("Geralt", "De riv", "Loup blanc", " 100 ans", "Sorceleur de Kaer Morhen", "Sorceleur" ,"../ressource/img/Geralt.jpg")
const Yen = new Personnage("Yennefer", "de Vengerberg", "La dame de Vengerberg", " ~ 100 ans", "Loge des Magiciennes ", "Sorcière" ,"../ressource/img/Yennefer.jpg")
const Triss = new Personnage("Triss", "Merigold", "la Quatorzième du Mont ", " ~ 50 ans", "Loge des Magiciennes", "" ,"../ressource/img/triss.jpg")
const list = []
list.push(Geralt)
list.push(Yen)
list.push(Triss)
console.table(list);
console.log(list.affiliation)
function display(){
    
    nom.textContent = list.nom
    prenom.textContent = list.prenom
    age.textContent = list.age
    affi.textContent = list.affilition
}