const affichage = document.querySelector(".affichage")

let affich, salaire, ancien, age, indemnite

salaire = Number(prompt("Entrer le salaire : "))
ancien = Number(prompt("Entrer vos années d'ancienneté  : "))
age = Number(prompt("Entrer votre âge : "))

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


if (ancien >= 1) {
    if (ancien > 10) {
        indemnite = salaire * ancien
        if (age >= 46) {
            indemnite = indemnite + (salaire * 2)
            if (age >= 50) {
                indemnite = indemnite + (salaire * 3)
            }
        }
    } else {
        indemnite = (salaire / 2) * ancien
        if (age >= 46) {
            indemnite = indemnite + (salaire * 2)
            if (age >= 50) {
                indemnite = indemnite + (salaire * 3)

            }
        }
    }
}

affich = `<p>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${ancien}</b> année(s) d'ancienneté s'éleve a <b>${indemnite}</b>€</p>`

affichage.innerHTML = affich