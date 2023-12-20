const affichage = document.querySelector(".affichage")

let affich
affich = `<h2>Compter jusqu'a 10</h2>`

for (let i = 0; i <= 10; i++) {

    affich += `<ul><li>${i}</li></ul>`

}

affichage.innerHTML = affich