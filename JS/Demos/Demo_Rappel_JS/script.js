console.log("Rappel sur JS");

// Déclaration tableau de légumes

let vegetables = [
    {
        code: 1,
        nom: "Carotte",
        price: 1.99
    },
    {
        code: 2,
        nom: "Poivron vert",
        price: 4.99
    },
    {
        code: 3,
        nom: "Poivron rouge",
        price: 4.99
    },
    {
        code: 4,
        nom: "Haricot Vert",
        price: 3.89
    },
    {
        code: 5,
        nom: "Courgette",
        price: 2.5
    },
];

console.log(" ------------- Parcours Tableau avec .Foreach ------------- ");

vegetables.forEach(function (vegetable) {
    console.log(vegetable);
    console.log(vegetable.nom);
})
console.log(" ------------- Parcours Tableau avec .Foreach ------------- ");
//tableau.foreach(vegetable, index)
vegetables.forEach(function (vegetable, index) {
    console.log(index + " " + vegetable.nom);
})

//.map()
console.log(" ------------- Parcours Tableau avec .map ------------- ");
const copyVegetables = vegetables.map(function (vegetable) {
    if (vegetable.price > 2) {
        return vegetable
    }
})
console.table(vegetables);
console.table(copyVegetables);

// .find()
console.log(" ------------- Parcours Tableau avec .find ------------- ");

const poivron = vegetables.find(function (vegetable) {
    return vegetable.nom.includes("Poivron")
})

console.table(poivron);

// .filter()
console.log(" ------------- Parcours Tableau avec .filter ------------- ");

const poivrons = vegetables.filter(function (vegetable) {
    return vegetable.nom.includes("Poivron")
})

console.table(poivrons);

console.log(" ------------- Le destructuring ------------- ");
console.log("--Tableau numérique --");

const tabNum = [1, 2, 3]

// Depuis ES6 EcmaScript6 
const [a, b, c] = tabNum

console.log(a);
console.log(b);
console.log(c);

console.log("--Tableau numérique --");

const user = {
    firstname: "Jean",
    lastname: "Dupond",
    age: 35,
    active: true
}

/* ES5
const firstname = user.firstname
const lastname = user.lastname*/

//ES6

const { firstname, lastname } = user

console.log(firstname);
console.log(lastname);

console.log("-- Avec des fonctions() --");
//ES5
function getFullNameES5(user) {
    return `ES5 ${user.firstname} ${user.lastname} `
}
console.log(getFullNameES5(user));
//ES6
function getFullNameES6({ firstname, lastname }) {
    return `ES6 ${firstname} ${lastname} `
}
console.log(getFullNameES6(user));


console.log("-- Arrow Function --");