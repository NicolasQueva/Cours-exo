const affichage = document.querySelector(".affichage")

let affich, lettre , voyelle

lettre = prompt("Veuillez entre une lettre :")
// voyelle = lettre
$lettre = lettre.toLowerCase();
 voyelle = ["a","e","i","o","u","y"]
//  if (lettre == "a" || lettre == "e" ||lettre == "i" ||lettre == "o" || lettre == "u" || lettre == "y")
//  {
//      affich = `<p>La lettre ${voyelle} est une voyelle</p>`
// } else {
//      affich = `<p>La lettre ${lettre} est une consonne </p>`
//  }

 if (voyelle.includes(lettre)
 ){
     affich = `<p>La lettre est une voyelle</p>`
 } else{
     affich = `<p>La lettre est une consonne</p>`
 }
 affichage.innerHTML = affich