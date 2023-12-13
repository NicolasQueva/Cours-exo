<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER nom_complet"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" arrondiAuto="vrai" epaisseurLigne="2" nbDecimales="8" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#prenom" algoitem="prenom EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#nom" algoitem="nom EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#nom_complet" algoitem="nom_complet EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez entrer le prénom : #0" algoitem="AFFICHER &quot;Veuillez entrer le prénom : &quot;"/>
        <item code="2#prenom#pasliste" algoitem="LIRE prenom"/>
        <item code="4#Veuillez entrer le nom : #0" algoitem="AFFICHER &quot;Veuillez entrer le nom : &quot;"/>
        <item code="2#nom#pasliste" algoitem="LIRE nom"/>
        <item code="4#Le nom complet est :#0" algoitem="AFFICHER &quot;Le nom complet est :&quot;"/>
        <item code="5#nom_complet#prenom +&quot; &quot;+nom#pasliste" algoitem="nom_complet PREND_LA_VALEUR prenom +&quot; &quot;+nom"/>
        <item code="3#nom_complet#1#pasliste" algoitem="AFFICHER nom_complet"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
