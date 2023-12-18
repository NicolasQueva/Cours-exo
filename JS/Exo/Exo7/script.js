const affichage = document.querySelector(".affichage")

let adjacent, opposé, result, affich

adjacent = Number(prompt("Rentrer la longueur du coté adjacent : "))
opposé = Number(prompt("Rentrer la longueur du coté opposé : "))

result = Math.sqrt((Math.pow(adjacent, 2) + Math.pow(opposé, 2)))

affich = `<p>Les longueurs des cotés adjacents a l'angle droit étant  de ${adjacent} cm et de ${opposé}cm </p>
        <ul><li> La longueur de l'hypothénuse est de ${result.toFixed(2)}cm</li></ul>
`
affichage.innerHTML=affich
