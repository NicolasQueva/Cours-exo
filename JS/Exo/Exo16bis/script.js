const affichage = document.querySelector(".affichage")

let affich, salaire, ancien, age, indemnite

function indemn() {
    

    salaire = document.querySelector("#Salaire").value
    age = document.querySelector("#Age").value
    ancien = document.querySelector("#Anciennete").value

// if (ancien >= 1 && ancien <= 10) {
//     if (age >= 46 && age >= 49) {
//         indemnite = ((salaire/2)* ancien) + (salaire * 2)
//         affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€</p>`
//     } else if (age >= 50) {
//         indemnite = ((salaire/2) * ancien) + (salaire * 5)
//         affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€<p>`
//     } else {
//         indemnite = (salaire/2) * ancien
//         affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€</p>`
//     }
// } else if (ancien > 10) {
//     if (age >= 46 && age <= 49) {
//         indemnite = (salaire * ancien) + (salaire * 2)
//         affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€</p>`
//     } else if (age >= 50) {
//         indemnite = (salaire * ancien) + (salaire * 5)
//         affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€<p>`
//     } else {
//         indemnite = salaire * ancien
//         affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€</p>`
//     }
// }


if (ancien >= 1 && ancien <= 10) {
    indemnite = ancien * (salaire / 2)
}

if (ancien > 10) {
    indemnite = 10 * (salaire / 2)
    indemnite += (ancien - 10) * salaire
}

if (ancien >= 1 && age > 45) {
    if (age < 50) {
        indemnite += 2 * salaire
    } else {
        indemnite += 5 * salaire
    }
}

affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€</p>`

affichage.innerHTML = affich
}