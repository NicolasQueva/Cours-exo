<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER V2"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="V1 EST_DU_TYPE NOMBRE" code="1#NOMBRE#V1"/>
        <item algoitem="V2 EST_DU_TYPE NOMBRE" code="1#NOMBRE#V2"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR i ALLANT_DE 1 A 6" code="12#i#1#6">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Entrer un chiffre : &quot;" code="4#Entrer un chiffre : #1"/>
            <item algoitem="LIRE V1" code="2#V1#pasliste"/>
            <item algoitem="SI (V2 &lt; V1) ALORS" code="6#V2 &lt; V1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="V2 PREND_LA_VALEUR V1" code="5#V2#V1#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Le chiffre le plus grand est : &quot;" code="4#Le chiffre le plus grand est : #0"/>
        <item algoitem="AFFICHER V2" code="3#V2#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
