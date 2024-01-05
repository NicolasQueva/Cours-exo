import { Article } from "./Article.js";

export class Client  {

    panier(nom, prix, quantité){
        console.log(`Le client a commandé ${quantité} ${nom} cela lui coutera ${prix*quantité}` );
    }
}