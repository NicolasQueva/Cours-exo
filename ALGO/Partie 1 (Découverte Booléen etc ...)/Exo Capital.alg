<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER RC"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param nbDecimales="8" maxBoucle="500000" epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Taux EST_DU_TYPE NOMBRE" code="1#NOMBRE#Taux"/>
        <item algoitem="Nbannee EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nbannee"/>
        <item algoitem="Capital EST_DU_TYPE NOMBRE" code="1#NOMBRE#Capital"/>
        <item algoitem="resultat EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat"/>
        <item algoitem="RC EST_DU_TYPE NOMBRE" code="1#NOMBRE#RC"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE Capital" code="2#Capital#pasliste"/>
        <item algoitem="LIRE Nbannee" code="2#Nbannee#pasliste"/>
        <item algoitem="LIRE Taux" code="2#Taux#pasliste"/>
        <item algoitem="Taux PREND_LA_VALEUR Taux/100" code="5#Taux#Taux/100#pasliste"/>
        <item algoitem="resultat PREND_LA_VALEUR Capital*pow(1+Taux,Nbannee)" code="5#resultat#Capital*pow(1+Taux,Nbannee)#pasliste"/>
        <item algoitem="RC PREND_LA_VALEUR resultat-Capital" code="5#RC#resultat-Capital#pasliste"/>
        <item algoitem="AFFICHER resultat" code="3#resultat#0#pasliste"/>
        <item algoitem="AFFICHER &quot; Le gain est de &quot;" code="4# Le gain est de #0"/>
        <item algoitem="AFFICHER RC" code="3#RC#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
