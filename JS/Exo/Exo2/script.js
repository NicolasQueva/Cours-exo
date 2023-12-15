const nbrs = document.querySelector(".nbrs");
const calc = document.querySelector(".calc");
const nbrsa = document.querySelector(".nbrsa");
let nbr1 = Number(prompt("Veuillez saisir un nombre"))
let nbr2 = Number(prompt("Veuillez saisir un second nombre"))
console.log(typeof(nbr1));
console.log(nbr1);
console.log(typeof(nbr2));
console.log(nbr2);
nbrs.innerHTML = "Vous avez saisi :" + nbr1
nbrsa.innerHTML = "Vous avez saisi :" + nbr2
calc.innerHTML = nbr1 + nbr2
