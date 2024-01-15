console.log("Rappel sur JS");

// Déclaration tableau de légumes

const vegetables = [
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
const Monstre = {
    firstname: "Toto",
    lastname: "Tata",
    type: "Orc",
    force: 40
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


console.log("-- Arrow Function    --");

// Cas 1
//Fonction sans paramètre

let test1 = function () {
    return "toto"
}

// equivalent à 
let test2 = () => {
    return "TOTO"
}


let test3 = () => "TATA"

console.log(test1());
console.log(test2());
console.log(test3());

// Cas 2 
// Avec 1 parametre

let test4 = function (monster) {
    return monster.firstname
}
//Equivalent à 
let test5 = (haveAFistname) => {
    return haveAFistname.firstname
}
// Simplification seulement si la fonction ne fait qu'un return
let test6 = (prenom) => prenom.firstname

console.log("------------");
console.log(test4(Monstre));
console.log(test4(user));
console.log("------------");
console.log(test5(Monstre));
console.log(test5(user));
console.log("---------");
console.log(test6(Monstre));
console.log(test6(user));
console.log("****************");

//Cas 3
//Avec au moins deux paramètres

let test7 = function (firstname, lastname) {
    return `${firstname} ${lastname}`
}
// Equivalent à
let test8 = (firstname, lastname) => {
    return `${firstname} ${lastname}`
}
// Simplification seulement si la fonction ne fait qu'un return
let test9 = (firstname, lastname) => `${firstname} ${lastname}`

console.log("------------");
console.log(test7("Varyan", "Wrynn"));
console.log("------------");
console.log(test8("Sylvanas", "Coursevent"));
console.log("------------");
console.log(test9("Valeera", "Sanguinar"));

console.log("****************");

//Nettoyage de console
console.clear()

console.log(" ------------- Rest Operator ------------- ");
console.log(vegetables);

//let haricot = vegetables[3] // Crée une réference vers l'objet vegetable[3], ce n'est une copie ! 

let haricot = { ...vegetables[3] }

haricot.price = 2
console.log(haricot);
console.log(vegetables[3]);
console.log(vegetables);

const tabNum2 = [1, 2, 3, 4]
console.table(tabNum2);

//En ES5
//const a = tabNum2[0]
//const b = tabNum2[1]

// en ES6 avec le destructuring

const [d, ...e] = tabNum2
//Affichage
console.log(d);
console.log(e);