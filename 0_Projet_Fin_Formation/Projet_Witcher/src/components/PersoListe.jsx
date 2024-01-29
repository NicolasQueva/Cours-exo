import React from 'react'
import Geralt from '../assets/img/Geralt.webp'
import Yen from '../assets/img/yennefer.webp'
import Triss from '../assets/img/triss.webp'
import Ciri from '../assets/img/Ciri.webp'
import Jaskier from '../assets/img/jaskier.webp'
import Vesemir from '../assets/img/vesemir.webp'
import Dijkstra from '../assets/img/dijkstra.webp'
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
            story: "Geralt de Riv (en polonais : Geralt z Rivii), aussi connu sous le nom de Gwynbleidd (nom en langage ancien signifiant « Le loup blanc » qui lui fut donné par les Dryades) est un sorceleur et le personnage principal de la Saga du Sorceleur des livres écrits par Andrzej Sapkowski et ses adaptations (incluant les jeux vidéo The Witcher et ses suivants). Il est aussi connu sous le nom de « boucher de Blaviken ».  Malgré son nom, Geralt ne vient pas de Riv, mais les jeunes sorceleurs sont encouragés par maître Vesemir à se choisir un nom de famille, afin de paraître plus dignes de confiance. Son premier choix fut Geralt Roger Eric du Haute-Bellegarde (en français dans le texte), mais ce choix idiot et prétentieux fut écarté par Vesemir. ",
        },
        {
            prenom: "Yennefer",
            nom: "de Vengerberg",
            alias: "La dame de Vengerberg",
            age: "99 ans",
            profession: "Sorcière",
            img: Yen,
            id: "Yennefer",
            story: "Yennefer de Vengerberg (née probablement pendant la fête de Belleteyn en l'an 1173) est une magicienne qui vit à Vengerberg, la capitale d'Aedirn. Elle était le plus jeune membre du Conseil des Magiciens avant que la Loge des Magiciennes ne tente de la recruter. Elle est amoureuse du sorceleur Geralt de Riv et la mère adoptive de Ciri. La dame de Vengerberg est connue pour sa beauté, même si durant les événements de La Tour de l'Hirondelle, elle avait 94 ans. Elle est toujours habillée de vêtements noirs et blancs et utilise un parfum de lilas et de groseilles à maquereau. Elle a de remarquables yeux violets et les cheveux noir-corbeau. C'est une quart-elfe, ce qui signifie qu'elle avait ¼ de sang elfique. ",
        },
        {
            prenom: "Triss",
            nom: "Merigold",
            alias: "la Quatorzième du mont",
            age: "Inconnu",
            profession: "Sorcière",
            img: Triss,
            id: "Triss",
            story: `Triss Merigold de Maribor est une magicienne, appelée aussi "la quatorzième du Mont" car elle fut considérée, à tort, comme tuée durant la Bataille du Mont Sodden. C'est une amie de Yennefer et du sorceleur Geralt, malheureusement amoureuse de ce dernier. A la demande des sorceleurs, elle prit soin de Ciri pendant un moment à Kaer Morhen et est comme une grande soeur pour elle. Elle est membre du conseil royal du roi Foltest, avec Fercart et Keira Metz. Triss est connue pour ses magnifiques cheveux auburn. Elle est une guérisseuse compétente et transporte avec elle de nombreuses potions magiques, mais elle ne les utilise jamais pour elle car elle est allergique aux élixirs magiques. `
        },
        {
            prenom: "Cirilla Fiona Elen ",
            nom: "Riannon",
            alias: "Le Lionceau de Cintra / Zireael / L'Enfant de sang ancien",
            age: "21 ans",
            profession: "Sorcelleuse",
            img: Ciri,
            id: "Ciri",
            story: `Cirilla Fiona Elen Riannon(connu sous le surnom de Ciri ou le Lionceau de Cintra), est née en 1251, plus vraisemblablement durant les fêtes de Belleteyn.Elle est la princesse de Cintra, fille de Pavetta et de Duny(le Hérisson d'Erlenwald) et la petite fille de la reine Calanthe. Après que Geralt de Rivia ait aidé à lever la malédiction de Duny, Duny demanda quelle récompense le sorceleur voulait et Geralt proclama la Loi de Surprise, car il s'avéra que Pavetta était enceinte de Ciri, à l'insu de Duny. Six ans après le jour de la naissance de l'enfant, Geralt retourna à Cintra pour elle, mais ne l'emmena pas avec lui à Kaer Morhen à ce moment-là. En fait, il ne la regardait même pas et ne parlait qu'avec Calanthe, qui ne lui révélait aucune information, pas même le sexe de l'enfant.`
        },
        {
            prenom: "Julian Alfred Pankratz",
            nom: "de Lettenhove",
            alias: "Jaskier",
            age: "42 ans",
            profession: "Barde",
            img: Jaskier,
            id: "Jaskier",
            story: ` Le poète Jaskier (également épelé « Jasquier » ou nommé vicomte « Julian » par le baron Peyrac-Peyran de Toussaint dans le tome 6) a bien connu Geralt avant que celui-ci ne soit laissé pour mort et ne perde la mémoire, il se dit être son meilleur ami. Il connaît bien Triss Merigold et Shani qu’il visite régulièrement, tout comme Zoltan Chivay. Jaskier est un homme jeune, qui dégage beaucoup de charme, un bavard intarissable, un bouffon et un paresseux. C’est aussi un coureur de jupons invétéré qui a le chic pour s’attirer toutes sortes d’ennuis. Il est tout autant attiré par un bon concours de boisson qu'une partie de poker de dés. Toutefois, c’est un artiste de talent, même s’il traîne sur les routes et gagne sa vie en faisait quelques représentations pendant lesquelles il improvise ou chante ses ballades en s’accompagnant d’un luth.`,
        },
        {
            prenom: "Vesemir",
            alias: "Aucun",
            nom: "",
            age: "Inconnu",
            profession: "Sorceleur",
            img: Vesemir,
            id: "Vesemir",
            story: `Vesemir est le plus ancien et le plus expérimenté sorceleur connu de Kaer Morhen et probablement plus âgé que la forteresse elle-même. Il est une figure de père pour Geralt et les autres sorceleurs. Il passe chaque hiver dans la forteresse et se lance sur la route quand le printemps arrive. Il est un excellent tireur et a une grande connaissance de monstres. Il transmit son savoir des créatures à Ciri
                    Il est le seul des anciens sorceleurs qui a survécu à l'assaut de Kaer Morhen, laissé pour mort parmi les cadavres de ses compagnons. Cependant, il n'était qu'un maître d'armes et donc ne possédait pas les connaissances nécessaires pour créer de nouveaux mutagènes pour muter de simples garçons en sorceleurs. Malgré son âge, Vesemir est robuste et vif. `,
        }, {
            prenom: "Sigismund",
            nom: "Dijkstra",
            alias: "Sigi Reuven",
            age: "53 ans",
            profession: "Ancien chef espion",
            img: Dijkstra,
            id: "Dijkstra",
            story: "Sigismund Dijkstra est originaire de Tretogor. Il fut le chef du Service de renseignement du roi Vizimir II le Juste de Redania et dirigea le Conseil de Régence après l'assassinat de Vizimir le 1er juillet 1267 jusqu'en en avril 1268 où il dut fuir le pays."
        }

    ]
    const listel = liste.length - 1
    return (
        <>
            <Personnage liste={liste} listel={listel} />
        </>
    )
}
