const affichage = document.querySelector(".affichage")

let affich, boisson

boisson = Number(prompt(`
 ******** Distributeur de boisson ********
            1. Eau                 
            2. Jus d'orange               
            3. Limonade                 
            4. Café 
            5. Thé 
`))

affich = ` 
<p> ******** Distributeur de boisson ********</p> 
<ol>
<li> Eau </li>                
<li> Jus d'orange </li>                
<li> Limonade </li>                
<li> Café </li> 
<li> Thé </li>
</ol>      

<p> Votre choix est : ${boisson}.
`

switch (boisson) {
    case 1:
        affich += `<p>Votre eau est servie</p>`
        break;
    case 2:
        affich += `<p>Votre Jus d'orange est servie</p>`
        break;
    case 3:
        affich += `<p>Votre Limonade est servie</p>`
        break;
    case 4:
        affich += `<p>Votre Café est servie</p>`
        break;
    case 5:
        affich += `<p>Votre Thé est servie</p>`
        break;
    default:
        affich += `<p>Entrer invalide</p>`
        break;
}



affichage.innerHTML = affich