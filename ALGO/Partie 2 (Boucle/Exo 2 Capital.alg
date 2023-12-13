<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER gain"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Taux EST_DU_TYPE NOMBRE" code="1#NOMBRE#Taux"/>
        <item algoitem="Nbannee EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nbannee"/>
        <item algoitem="Capital EST_DU_TYPE NOMBRE" code="1#NOMBRE#Capital"/>
        <item algoitem="resultat EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat"/>
        <item algoitem="gain EST_DU_TYPE NOMBRE" code="1#NOMBRE#gain"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE Capital" code="2#Capital#pasliste"/>
        <item algoitem="LIRE Taux" code="2#Taux#pasliste"/>
        <item algoitem="Nbannee PREND_LA_VALEUR 0" code="5#Nbannee#0#pasliste"/>
        <item algoitem="Taux PREND_LA_VALEUR Taux/100" code="5#Taux#Taux/100#pasliste"/>
        <item algoitem="TANT_QUE (resultat &lt; Capital * 2) FAIRE" code="15#resultat &lt; Capital * 2">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="Nbannee PREND_LA_VALEUR Nbannee + 1" code="5#Nbannee#Nbannee + 1#pasliste"/>
            <item algoitem="resultat PREND_LA_VALEUR Capital*pow(1+Taux,Nbannee)" code="5#resultat#Capital*pow(1+Taux,Nbannee)#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="gain PREND_LA_VALEUR resultat - Capital" code="5#gain#resultat - Capital#pasliste"/>
        <item algoitem="AFFICHER &quot;Le nombre d'année necessaire est de &quot;" code="4#Le nombre d'année necessaire est de #0"/>
        <item algoitem="AFFICHER Nbannee" code="3#Nbannee#0#pasliste"/>
        <item algoitem="AFFICHER &quot; ans&quot;" code="4# ans#1"/>
        <item algoitem="AFFICHER &quot;L'épargne total est de &quot;" code="4#L'épargne total est de #0"/>
        <item algoitem="AFFICHER resultat" code="3#resultat#0#pasliste"/>
        <item algoitem="AFFICHER &quot; €&quot;" code="4# €#1"/>
        <item algoitem="AFFICHER &quot;Le gain est de &quot;" code="4#Le gain est de #0"/>
        <item algoitem="AFFICHER gain" code="3#gain#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
