const affichage = document.querySelector(".affichage")

let affich, revenu, rimposable, impot, adulte, enfant, part

function impotF() {
revenu = document.querySelector("#RevenuFoyer").value
adulte  = document.querySelector("#Adult").value
enfant  = document.querySelector("#Enfant").value
console.log(revenu);
console.log(adulte);
console.log(enfant);
if (enfant > 0) {
    part = (adulte * 1) + (enfant * 0.5)
    console.log(part);
    if (enfant > 2) {
        part = part + ((enfant - 2) * 1)
        console.log(part);
    }
}
else {
    part = adulte * 1
}
rimposable = revenu / part
console.log(rimposable);

if (rimposable >= 10778 && rimposable <= 27478) {
    impot = (rimposable - 10777) * 0.11
} else if (rimposable >= 27479 && rimposable <= 78570) {
    impot = (rimposable - 27478) * 0.30 + (27478 - 10777) * 0.11
}

impot = part * impot

affich = `Le montant de l'impot sur le revenu du foyer composé de <b>${adulte} adulte(s)</b>  et de <b>${enfant} enfant(s)</b> , avec un revenu fiscal de <b>${revenu}€</b>  s'élève à <b>${Math.round(impot)}€</b> `

affichage.innerHTML = affich
}