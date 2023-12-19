const affichage = document.querySelector(".affichage")

let AB, BC, CA, affich

AB = Number(prompt("Rentrez la longueur AB :"))
BC = Number(prompt("Rentrez la longueur BC :"))
CA = Number(prompt("Rentrez la longueur CA :"))

if (AB != BC) {
    if (AB != CA) {
        if (BC != CA) {
            affich = `Le triangle n'est pas isocèle ni en A, Ni en B, Ni en C`
        } else {
            affich = `Le triangle est isocèle en C`
        }
    } else {
        affich = `Le triangle est isocèle en A`
    }
} else if (BC != CA) {
    affich = `Le triangle est isocèle  en B`
} else {
    affich = `Le triangle est équilatéral`
}

affichage.innerHTML = affich