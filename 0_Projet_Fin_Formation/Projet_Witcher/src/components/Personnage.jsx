import React, { useState } from 'react'
import '../style/Personnage.css'
export default function Personnage(props) {

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
    if (props.liste[0].id == search) {
        console.log(props.liste.index);
    }

    let alt = `Image de ${props.liste[i].prenom} ${props.liste[i].nom}`
    return (
        <>
            <input type="search" className="search" placeholder='Rechercher' onInput={(e) => setsearch(e.target.value)} />
            <section id="perso">
                <article className="navPerso">
                    <button id='precedent' onClick={() => decrementation()} >Perso precedent</button>
                    <h2>{props.liste[i].prenom} {props.liste[i].nom}</h2>
                    <button id='suivant' onClick={() => incrementation()}>Perso Suivant</button>
                </article>
                <article id='FichePerso'>
                    <div className='imagediv'>
                        <img src={props.liste[i].img} alt={alt} id="ImgPerso" />
                    </div>
                    <div className='details'>
                        <p>Alias : {props.liste[i].alias}</p>
                        <p>Âge : {props.liste[i].age}</p>
                        <p>Profession : {props.liste[i].profession}</p>
                        <p>Lore : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus temporibus maiores unde dolorum, reprehenderit provident quasi, magni deserunt beatae adipisci exercitationem dicta sit nobis dolores illo repellat id officia voluptatem.</p>
                    </div>

                </article>
            </section>
        </>
    )
}
