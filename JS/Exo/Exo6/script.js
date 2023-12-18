const affich = document.querySelector(".affichage")

let carre, lrect, Lrect, affichage

carre = Number(prompt("Rentrer la longueur des cotés du carré : "))
lrect = Number(prompt("Rentrer les largeurs du rectangle : "))
Lrect = Number(prompt("Rentrer les longueurs du rectangle : "))



affichage = `
<h2> Calcul de l'aire et du perimetre d'un carré </h2>
<p> Les longueurs des cotés du carré étant de ${carre}cm </p>
<ul>    <li>Le perimètre de ce carré  est de ${carre*4}cm</li>
<li> l'aire de ce carré est de ${carre*carre}cm²</li>   </ul>
<h2> Calcul de l'aire et du perimetre d'un rectangle </h2>
<p> Les longueurs du rectangle étant de ${Lrect}cm et les largeurs étant de ${lrect}cm </p>
<ul>    <li>Le perimètre de ce rectangle  est de ${(lrect + Lrect) *2}cm</li>
<li> l'aire de ce carré est de ${lrect*Lrect}cm²</li>   </ul>

`

affich.innerHTML = affichage