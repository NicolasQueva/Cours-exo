let legumes = ["Carottes", "Choux", "Navets"]
let fruits = ["Raisin", "Kiwi", "Banane"]


//Création d'un tableau à 2 dimensions

let primeur = [legumes, fruits]

console.table(primeur);
console.table(primeur[0][1]);

let zoo = [
    {
        nom: "Simba",
        espece: "Lion",
        continent: "Afrique"
    },
    {
        nom: "Jack",
        espece: "Kangourou",
        continent: "Océanie"
    }
]

console.table(zoo);
console.log(`Je suis ${zoo[0].nom} et je suis ${zoo[1].espece}`);