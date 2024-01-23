import React from 'react'
import './style/App.css'
import LCDPR from './assets/img/CDProjektRed.jpg'
import LWitcher from './assets/img/Image-Witcher.jpg';
function App() {


  return (
    <>
      <section id="Menu">
        <article id='CDPR'>
          <img src={LCDPR} alt="Logo CD Projekt" />
          <p> - CD Projekt est un développeur et éditeur polonais de jeux vidéo. L'entreprise est fondée
            en mai 1994 par Marcin Iwiński et Michał Kiciński dans le but de publier des logiciels sur CD-ROM. </p>
          <p> - Le studio, grâce à sa division de développement de jeu CD Projekt Red, est principalement connu pour
            sa saga The Witcher et Cyberpunk 2077.
          </p>
        </article>
        <article id='Witcher'>
          <img src={LWitcher} alt="Image annonce suite the witcher" />
          <p>
            -Il est le premier jeu vidéo à prendre place dans l'univers littéraire du Sorceleur, créé par
            l'écrivain polonais Andrzej Sapkowski. Le jeu met en scène le sorceleur Geralt de Riv et prend place
            plusieurs années après les évènements du roman La Dame du lac, le dernier ouvrage de la saga
            littéraire publié en 1999.
          </p>
          <p>
            - Il connait deux suites, The Witcher 2: Assassins of Kings en 2011, et The Witcher 3: Wild Hunt en
            2015. Un quatrième opus est également en préparation1.
          </p>
          <p>
            -En octobre 2022, le studio annonce une nouvelle version du jeu qui tournera grâce au moteur Unreal
            Engine 5.
          </p>
        </article>
      </section>
    </>
  )
}

export default App
