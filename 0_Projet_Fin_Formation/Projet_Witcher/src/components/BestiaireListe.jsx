import React from 'react'
import Bestiaire from './Bestiaire'
import Leshen from '../assets/img/Bestiraire/leshen.webp'
import Noyeur from '../assets/img/Bestiraire/noyeur.webp'
import Fiellon from '../assets/img/Bestiraire/fiellon.webp'
export default function BestiaireListe() {

    const liste = [
        {
            Nom: "Leshen",
            img: Leshen,
            Taille: "2.5 m",
            Poids: "136 kg",
            Lore: "Le leshen, ou Silvanus Agilis est une créature territoriale vivant au plus profond des forêts anciennes. Furtif et rusé, c'est un monstre solitaire qui contrôle par magie les plantes et les animaux de son territoire.",
        },
        {
            Nom:"Fiellon",
            img: Fiellon,
            Taille: "???",
            Poids: " ???",
            Lore: "Un fiellon est une montagne de muscles au sommet de laquelle trône une tête cornue à la gueule bardée de crocs. Tout comme son cousin le bukavac (plus rare), il vit dans les forêts humides et les marais. Il évite les humains si possible, mais en cas de confrontation, il les tue sans états d'âme… et sans la moindre difficulté. "
        },
        {
            Nom: "Noyeur",
            img: Noyeur, 
            Taille: "Taille Humaine",
            Poids: "Poids humain",
            Lore : "Un noyeur ressemble à un cadavre humain ayant longtemps séjourné au fond de l'eau. Boue et vase sortent par tous les pores de sa peau bleuâtre ou verdâtre et il émane de lui une odeur âcre de chair pourrie. ",
        }
    ]



    const listel = liste.length - 1
    return (


        <>
            <Bestiaire liste={liste} listel={listel} />
        </>
    )
}
