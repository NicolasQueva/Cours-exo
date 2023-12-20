const affichage = document.querySelector(".affichage")

let affich
affich = `<h2>Table de multiplication de 1 a 10</h2>`
let add = document
for (let i = 1; i <= 10; i++) {
    affich += `<div class="card"><ul><h5>Table de ${i} :</h5> `
    for (let j = 1; j <= 10; j++) {
        affich += `<li>${i} x ${j} = ${i * j}</li>`

    }
    affich += `</ul></div>`
}
affichage.innerHTML = affich