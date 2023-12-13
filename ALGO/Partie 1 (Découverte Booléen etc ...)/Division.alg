<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#a" algoitem="a EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#b" algoitem="b EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#c" algoitem="c EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#d" algoitem="d EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Rentrer un nombre :#0" algoitem="AFFICHER &quot;Rentrer un nombre :&quot;"/>
        <item code="2#a#pasliste" algoitem="LIRE a"/>
        <item code="5#b#3#pasliste" algoitem="b PREND_LA_VALEUR 3"/>
        <item code="5#c#a%b#pasliste" algoitem="c PREND_LA_VALEUR a%b"/>
        <item code="6#c == 0" algoitem="SI (c == 0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#est divisible par 3#1" algoitem="AFFICHER &quot;est divisible par 3&quot;"/>
            <item code="3#c#1#pasliste" algoitem="AFFICHER c"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#n'est pas divisible par 3#1" algoitem="AFFICHER &quot;n'est pas divisible par 3&quot;"/>
                <item code="3#c#1#pasliste" algoitem="AFFICHER c"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
