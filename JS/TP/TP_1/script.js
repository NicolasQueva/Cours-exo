const affichage = document.querySelector(".affichage")
const affichage2 = document.querySelector(".affichage0")
const affichage3 = document.querySelector(".affichage1")
const affichage4 = document.querySelector(".affichage8")
let affich, affich2, affich3, affich4, random, uinput
let min = 1
let max = 50
let button = document.querySelector(".button")
let message = document.querySelector(".input")

random = Math.floor(Math.random() * (max - min) + min)
console.log(random);
affich2 = `<h1>Nombre mystère</h1>`
affich3 = `<h3>J'ai généré un nombre entre 1 et 50</h3>`
affich4 = `<h3>Essayez de le deviner en proposant ci-dessous</h3>`

affichage2.innerHTML = affich2
affichage3.innerHTML = affich3
affichage4.innerHTML = affich4
affich = `<p>Nombre de coup : ${essaie = 0}</p>`
affichage.innerHTML = affich

function nmyst() {

    uinput = document.querySelector("#rnum").value
    affich = `<p>Nombre de coup : ${++essaie}<p>`
    affichage.innerHTML = affich
    if (uinput > random) {
        affich3 = `<h3>Le nombre saisie plus grand que le nombre mystère</h3>`
        affichage3.innerHTML = affich3
    } else if (uinput < random) {
        affich3 = `<h3>Le nombre plus petit que le nombre mystère</h3>`
        affichage3.innerHTML = affich3
    } else if (uinput == random) {
        affich4 = `<h3> Le nombre mystère était ${random}`
        affichage4.innerHTML = affich4
        button.setAttribute("disabled", "")
        message.setAttribute("disabled", "")
    }
    message.value = ""
}

function replay() {
    button.removeAttribute("disabled", "")
    message.removeAttribute("disabled", "")
    affich = `<p>Nombre de coup : ${essaie = 0}<p>`
    affichage.innerHTML = affich
    random = Math.floor(Math.random() * (max - min) + min)
    console.log(random);
}