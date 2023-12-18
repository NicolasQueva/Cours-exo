const affichage = document.querySelector(".affichage")

let TVA, TVAffich, Prix, affich

Prix= Number(prompt("Veuillez entrer le prix :"))
TVA = Number(prompt("Veuillez entrer la TVA :"))

affich = `
<p> Le prix H.T de l'objet étant de <b>${Prix}€</b>, avec un taux de T.V.A applicable  de ${TVA}%</p>
<ul><li>Le montant de la T.V.A s'élélevera à ${TVAffich = Prix*(TVA/100)}€</li><li>Le prix T.T.C de l'objet sera de ${Prix+TVAffich}€</li>

`
affichage.innerHTML = affich