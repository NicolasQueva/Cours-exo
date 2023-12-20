const affichage = document.querySelector(".affichage")

let affich, habitant, année, nannee
habitant = 96809
année = 2015
nannee = 0
affich += `<h2> Taux d'accroissement de la ville de Tourcoing</h2>`
affich += `En <b>${année}</b>, il a été recensé <b>${habitant}</b> habitants. le taux d'accroissement de la population étant de 0.89%. Combiens faudra-t-il d'années pour atteindre une
population de <b>120.000</b> habitants ?`
while (habitant < 120000) {
année++
nannee++
habitant = habitant+(habitant*0.0089)
affich += `<p>En ${année}, il y aura ${Math.round(habitant)} habitants</p><hr>`
}
affich += `Il faudra ${nannee} ans pour atteindre 120000 habitant`
affichage.innerHTML = affich