const affich = document.querySelector(".affichage")

let mot ,motboucle, result ,affichage, i 

mot = prompt("Veuillez rentrez une phrase : ")
motboucle = mot
for (i = 0; i < motboucle.length; i++)
{
    if (motboucle.search(" "))
    {
        motboucle
    }
    else
    {
        motboucle[i].toLowerCase
1    }

    
}

affichage = `
<h3> Traitement d'une chaîne de caractères </h3>
<p> Vous avez saisi : ${mot} </p>
<p> La chaine en minuscule : ${mot.toLocaleLowerCase()} </p>
<p> Mise en tableau : ${mot.toLocaleLowerCase().split("").join(",")} </p>
<p> ${mot} </p>
`


affich.innerHTML = affichage