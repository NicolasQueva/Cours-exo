import React, { useState } from 'react'
import '../style/Bestiaire.css'
export default function Bestiaire(props) {
    const [i, seti] = useState(0)
    const [search, setsearch] = useState("")

    const incrementation = () => {
        if (i >= props.listel) {
            seti(0)
        } else {
            seti(i + 1)
        }
    }


    const decrementation = () => {
        if (i <= 0) {
            seti(props.listel)
        } else {
            seti(i - 1)
        }
    }

    const recherche = () => {
        for (let i = 0; i < props.liste.length; i++) {
            if (props.liste[i].id == search) {
                seti(i)
            }

        }
    }
    let alt = `Image de ${props.liste[i].prenom} ${props.liste[i].nom}`
    return (
        <>
            <input type="search" className="searchb" placeholder='Rechercher' onInput={(e) => setsearch(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter")recherche();}} />
            <section id="beast">
                <article className="navbeast">
                    <button id='precedentbeast' onClick={() => decrementation()} >Créature precedente</button>
                    <h2>{props.liste[i].Nom}</h2>
                    <button id='suivantbeast' onClick={() => incrementation()}>Créature Suivante</button>
                </article>
                <article id='Fichebeast'>
                    <div className='imagediv'>
                        <img src={props.liste[i].img} alt={alt} id="Imgbeast" />
                    </div>
                    <div className='details'>
                        <p>Taille : {props.liste[i].Taille}</p>
                        <p>Poids : {props.liste[i].Poids}</p>
                        <p>Lore : {props.liste[i].Lore}</p>
                    </div>

                </article>
            </section>
        </>
    )
}
