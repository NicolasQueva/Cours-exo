const affich = document.querySelector(".affichage")
let  pi, nbr1, aire, permimetre,affichage

pi = Math.PI
nbr1 = Number(prompt("Veuillez saisir le diamètre du cercle :" ))
affichage = `
<h3>Utilisation de la constante &#960 (pi)</h3>
<p>La valeur de &#960 est de : ${pi}
<h3> Calcul du périmètre (d x &#960) et de l'aire (&#960 * r²) d'un cercle </h3>
<p>La diamètre est de : ${nbr1}cm
<p>La permimetre est de : ${ permimetre = nbr1 * Math.PI}cm
<p>L'aire  est de :${aire = Math.pow((nbr1/2),2)* Math.PI}cm²
<p>La permimetre est de : ${Math.round(permimetre)}cm (arrondi)
<p>L'aire est de : ${Math.round(aire)}cm² (arrondi)
`

affich.innerHTML = affichage
