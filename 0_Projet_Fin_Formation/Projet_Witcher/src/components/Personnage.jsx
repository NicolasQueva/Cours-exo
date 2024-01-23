import React from 'react'
import '../style/Personnage.css'
export default function Personnage() {
    return (
        <>
            <section>
                <input type="text" className="search" placeholder='Rechercher' />
                <article id="perso">
                    <div className="navPerso">
                        <button id='precedent'>Perso precedent</button>
                        <h2>Perso Actuel</h2>
                        <button id='suivant'>Perso Suivant</button>
                    </div>
                </article>
            </section>
        </>
    )
}
