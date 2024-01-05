import { Bibliotheque } from "./classes/Bibliotheque.js";
import { Adherent } from "./classes/Adherent.js";
import { Document } from "./classes/Document.js";
import { Journal } from "./classes/Journal.js";
import { Volume } from "./classes/Volume.js";

// Création d'objet a partir de la classes Bibliotheque

let aquarese = new Bibliotheque("Aquarese")
let afpi = new Bibliotheque("Afpi")
let M2i = new Bibliotheque("M2i")

// Création d'objet a partir de la classe Adherent

let toto = new Adherent("Toto", "Toto")
aquarese.ajouterAdherent(toto)

//Creéation d'objet a partir de la classe document

let lpp = new Document ("Le petit prince")
aquarese.ajouterDocument(lpp)
toto.emprunterlivre(lpp)
//Création d'objet a partir de la classe Journal
let leMonde = new Journal ("leMonde", "05/01/2024")
leMonde.ToString()

//Création d'objet a partir de la classe Volume

let volume1 = new Volume ("volume1", "Toto")
volume1.ToString()


