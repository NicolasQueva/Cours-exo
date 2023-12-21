// Tableau associatif = Accéder a un tableau via une clé

let personne ={
    nom : "Tata" ,
    prenom : "Toto",
    sexe :"M",
    age : 30
}

console.log(personne.prenom);

console.log(`Bonjour je suis ${personne.prenom}, j'ai ${personne.age} ans`);

//for ... in

for (let key in personne) {
    console.log(`${key} : ${personne[key]}`);
}