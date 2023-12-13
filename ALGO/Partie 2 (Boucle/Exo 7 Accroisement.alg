<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; ans&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Habitant EST_DU_TYPE NOMBRE" code="1#NOMBRE#Habitant"/>
        <item algoitem="Taux EST_DU_TYPE NOMBRE" code="1#NOMBRE#Taux"/>
        <item algoitem="Habitantnec EST_DU_TYPE NOMBRE" code="1#NOMBRE#Habitantnec"/>
        <item algoitem="Nbannee EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nbannee"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="Habitant PREND_LA_VALEUR 96809" code="5#Habitant#96809#pasliste"/>
        <item algoitem="Habitantnec PREND_LA_VALEUR 120000" code="5#Habitantnec#120000#pasliste"/>
        <item algoitem="Taux PREND_LA_VALEUR 0.0089" code="5#Taux#0.0089#pasliste"/>
        <item algoitem="TANT_QUE (Habitant &lt; Habitantnec) FAIRE" code="15#Habitant &lt; Habitantnec">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="Nbannee PREND_LA_VALEUR Nbannee + 1" code="5#Nbannee#Nbannee + 1#pasliste"/>
            <item algoitem="Habitant PREND_LA_VALEUR Habitant*(1+Taux)" code="5#Habitant#Habitant*(1+Taux)#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Le nombre d'année necessaire est de : &quot;" code="4#Le nombre d'année necessaire est de : #0"/>
        <item algoitem="AFFICHER Nbannee" code="3#Nbannee#0#pasliste"/>
        <item algoitem="AFFICHER &quot; ans&quot;" code="4# ans#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
