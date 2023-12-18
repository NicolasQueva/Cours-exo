const affichage = document.querySelector(".affichage")

let affich, age

age = Number(prompt("Veuillez entrer l'âge de votre enfant "))

if (age < 3) {
    affich = `L'enfant est trop jeune pour pratiquer `
} else if (age <= 3 || age <= 6) {
    affich = `L'enfant est dans la catégorie Baby `
} else if (age <= 7 || age <= 8) {
    affich = `L'enfant est dans la catégorie Poussin `
} else if (age <= 9 || age <= 10) {
    affich = `L'enfant est dans la catégorie Pupille `
} else if (age <= 11 || age <= 12) {
    affich = `L'enfant est dans la catégorie Minime `
} else if (age <= 13 || age < 18) {
    affich = `L'enfant est dans la catégorie cadet `
} else {
    affich = `C'est n'est plus un enfant`
}
affichage.innerHTML = affich