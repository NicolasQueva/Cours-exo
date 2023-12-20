const affichage = document.querySelector(".affichage")

let affich
let max, min, moyenne, sum, totalnote, note
min = 20
max = 0
moyenne = 0
sum = 0
totalnote = 0
affich = `<h1>Meilleur note, moins bonne note, moyenne des notes</h1>`
affich = `<p>La série contient les notes suivantes : </p>`
while (note != 777) {
    note = Number(prompt("Veuillez saisir une note"))
    if (note != 777 && note < 21 && note >= 0 ) {
        sum = sum + note
        totalnote = totalnote + 1
        affich += `<p>En note n°${totalnote}, vous avez saisis ${note}/20</p>`
        if (note > max) {
            max = note
        } else if (note < min) {
            min = note
        }
    }

}
moyenne = sum / totalnote
affich += `<p>Sur l'ensemble des ${totalnote} notes:</p>`
affich += `<div class="green"><p>La meilleur note est ${max}/20</p></div>`
affich += `<div class="red"><p>La pire note est ${min}/20</p></div>`
affich += `<p>La moyenne des note est ${moyenne.toFixed(2)}/20</p>`
affichage.innerHTML = affich