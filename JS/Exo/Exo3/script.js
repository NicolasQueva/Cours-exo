const affich = document.querySelector(".affichage")
let  pi, nbr1, aire, permimetre,affichage

pi = Math.PI
nbr1 = Number(prompt("Veuillez saisir le diamètre du cercle :" ))
affichage = `<p>Utilisation de la constante &#960</p>`
affichage += `<p>La valeur de &#960 est de : ${pi}`
affichage += `<p> Calcul du périmètre (d x &#960) et de l'aire (&#960 * r²) d'un cercle </p>`
affichage += `<p>La diamètre est de : ${nbr1}cm`
affichage += `<p>La permimetre est de : ${ permimetre = nbr1 * Math.PI}cm`
affichage += `<p>L'aire  est de :${aire = ((nbr1/2)*(nbr1/2)) * Math.PI}cm²`
affichage += `<p>La permimetre est de : ${Math.round(permimetre)}cm (arrondi)`
affichage += `<p>L'aire'est de : ${Math.round(aire)}cm² (arrondi)`

affich.innerHTML = affichage
