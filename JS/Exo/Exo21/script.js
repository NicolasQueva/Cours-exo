const affichage = document.querySelector(".affichage")

let affich
affich = `<h2>Menu et sous menu</h2>`

for (let i = 1; i <= 3; i++) {
    affich += `<p> Chapitre ${i} </p>`
    for (let j = 1; j <= 3; j++) {

        affich += `<p>  - Partie ${i}.${j} </p>`
    
    }

}

affichage.innerHTML = affich