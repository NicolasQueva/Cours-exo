<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Merci&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2lignes="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="reponse EST_DU_TYPE NOMBRE" code="1#NOMBRE#reponse"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Saisir un nombre 1 et 3:&quot;" code="4#Saisir un nombre 1 et 3:#0"/>
        <item algoitem="LIRE reponse" code="2#reponse#pasliste"/>
        <item algoitem="TANT_QUE (reponse &lt; 1 ou reponse > 3) FAIRE" code="15#reponse &lt; 1 ou reponse > 3">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER &quot;Erreur saisie invalide, Merci de saisir un nombre entre 1 et 3&quot;" code="4#Erreur saisie invalide, Merci de saisir un nombre entre 1 et 3#0"/>
            <item algoitem="LIRE reponse" code="2#reponse#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Merci&quot;" code="4#Merci#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
