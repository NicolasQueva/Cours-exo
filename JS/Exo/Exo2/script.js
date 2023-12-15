const calcul = document.querySelector(".calc")

let nbr1, nbr2, addition, affichage
nbr1 = Number(prompt("Entrez un premier nombre : "))
nbr2 = Number(prompt("Entrez un second nombre : "))
addition = nbr1 + nbr2

affichage = `<p>Le premier nombre entré est : ${nbr1}</p>`
affichage += `<p>Le second nombre entré est : ${nbr2}</p>`
affichage += `<p>L'addition des deux nombres est : ${addition}</p>`

calcul.innerHTML = affichage
