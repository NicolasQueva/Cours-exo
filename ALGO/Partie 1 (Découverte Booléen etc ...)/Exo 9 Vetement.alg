<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SINON" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Taille EST_DU_TYPE NOMBRE" code="1#NOMBRE#Taille"/>
        <item algoitem="Poids EST_DU_TYPE NOMBRE" code="1#NOMBRE#Poids"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE Taille" code="2#Taille#pasliste"/>
        <item algoitem="LIRE Poids" code="2#Poids#pasliste"/>
        <item algoitem="SI ((Poids >= 43 et Poids &lt;= 77) et (Taille >= 145 et Taille &lt;= 183)) ALORS" code="6#(Poids >= 43 et Poids &lt;= 77) et (Taille >= 145 et Taille &lt;= 183)">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="SI ((Poids >= 43 et Poids &lt;= 65) et (Taille >= 145 et Taille &lt;= 169)) ALORS" code="6#(Poids >= 43 et Poids &lt;= 65) et (Taille >= 145 et Taille &lt;= 169)">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="SI (Poids >= 43 et Poids &lt;=47 ) ALORS" code="6#Poids >= 43 et Poids &lt;=47 ">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Vetement Catégorie 1&quot;" code="4#Vetement Catégorie 1#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI ((Poids >= 48 et Poids &lt;=53 ) et (Taille >= 145 et Taille >=178) ) ALORS" code="6#(Poids >= 48 et Poids &lt;=53 ) et (Taille >= 145 et Taille >=178) ">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="SI (Taille >=167 et Taille >= 178) ALORS" code="6#Taille >=167 et Taille >= 178">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="SI (Taille > 178) ALORS" code="6#Taille > 178">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="AFFICHER &quot;Erreur&quot;" code="4#Erreur#1"/>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="AFFICHER &quot;Vetement Catégorie 2&quot;" code="4#Vetement Catégorie 2#1"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                                <item algoitem="SINON" code="9#sinon">
                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                    <item algoitem="AFFICHER &quot;Vetement Catégorie 1&quot;" code="4#Vetement Catégorie 1#1"/>
                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                </item>
                            </item>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;ERREUR&quot;" code="4#ERREUR#1"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
