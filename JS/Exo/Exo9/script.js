const affichage = document.querySelector(".affichage")

let capitalinit, capitalfinal, Taux, Annee, affich

capitalinit = Number(prompt("Veuillez entrer le capital initial :"))
Taux = Number(prompt("Veuillez entrer le taux d'intêret : "))
Annee = Number(prompt("Veuillez entrer la durée de l'épargne (en année) :"))
capitalfinal =Math.round( capitalinit*Math.pow(1+Taux/100,Annee))
affich = `
<p> Avec un capital initial de <b>${capitalinit}€</b>, placé a <b>${Taux}%</b>pendant <b>${Annee} année(s)</b></p>
<ul><li>Le montant des intérêts s'élévera à ${capitalfinal - capitalinit}€</li><li> Le capital a l'issue sera de ${capitalfinal}€</ul>
`

affichage.innerHTML = affich