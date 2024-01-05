import { Client } from "./classes/Client.js";
import { Article } from "./classes/Article.js";

const affichage = document.querySelector(".affichage")

let article1 = new Article("Clavier", 50, 10)
let article2 = new Article("Souris", 20, 15)
let client = new Client
let quantité = 2
client.panier(article1.nom, article1.prix, quantité)
article1.majstock(quantité)
client.panier(article2.nom, article2.prix, quantité)
article2.majstock(quantité)
affichage.innerHTML