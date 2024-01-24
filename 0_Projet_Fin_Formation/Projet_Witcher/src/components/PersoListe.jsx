import React from 'react'
import Geralt from '../assets/img/Geralt.jpg'
import Yen from '../assets/img/Yennefer.jpg'
import Triss from '../assets/img/triss.jpg'
import Personnage from './Personnage'

export default function PersoListe() {
    const liste = [
        {
            prenom: "Géralt",
            nom: "de Riv",
            alias: "Le boucher de blaviken / Loup Blanc / Gwynbleidd",
            age: "~100 ans",
            profession: "Sorceleur",
            img: Geralt,
            id: "Geralt",
            story: "",
        },
        {
            prenom: "Yennefer",
            nom: "de Vengerberg",
            alias : "La dame de Vengerberg" ,
            age: "99 ans",
            profession: "Sorcière",
            img: Yen,
            id: "Yennefer",
            story: "",
        },
        {
            prenom: "Triss",
            nom: "Merigold",
            alias: "la Quatorzième du mont",
            age: "Inconnu",
            profession: "Sorcière",
            img: Triss,
            id: "Triss",
            story: "",
        }, 
        {
            prenom: "Cirilla Fiona Elen ",
            nom: "Riannon",
            alias : "Le Lionceau de Cintra / Zireael / L'Enfant de sang ancien",
            age: "21 ans",
            profession: "Sorcelleuse",
            img: Yen,
            id: "Ciri",
            story: "",
        },
        {
            prenom: "Julian Alfred Pankratz",
            nom: "de Lettenhove",
            alias : "Jaskier",
            age: "42 ans",
            profession: "Barde",
            img: Yen,
            id:"Jaskier",
            story: "",
        },
        {
            prenom: "Vesemir",
            alias: "Aucun",
            nom: "",
            age: "Inconnu",
            profession: "Sorceleur",
            img: Yen,
            id:"Vesimir",
            story: "",
        },

    ]
    const listel = liste.length - 1
    return (
        <>
            <Personnage liste={liste} listel={listel} />
        </>
    )
}
