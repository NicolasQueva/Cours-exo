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
        <item code="1#NOMBRE#nbcopies" algoitem="nbcopies EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prixcopies" algoitem="prixcopies EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Combien de copies necessaire ?#0" algoitem="AFFICHER &quot;Combien de copies necessaire ?&quot;"/>
        <item code="2#nbcopies#pasliste" algoitem="LIRE nbcopies"/>
        <item code="6#nbcopies &lt; 10" algoitem="SI (nbcopies &lt; 10) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#prixcopies#0.5*nbcopies#pasliste" algoitem="prixcopies PREND_LA_VALEUR 0.5*nbcopies"/>
            <item code="3#prixcopies#1#pasliste" algoitem="AFFICHER prixcopies"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#nbcopies &lt;= 20 et nbcopies >= 10" algoitem="SI (nbcopies &lt;= 20 et nbcopies >= 10) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#prixcopies#0.4*nbcopies#pasliste" algoitem="prixcopies PREND_LA_VALEUR 0.4*nbcopies"/>
                    <item code="3#prixcopies#1#pasliste" algoitem="AFFICHER prixcopies"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="5#prixcopies#0.3*nbcopies#pasliste" algoitem="prixcopies PREND_LA_VALEUR 0.3*nbcopies"/>
                        <item code="3#prixcopies#1#pasliste" algoitem="AFFICHER prixcopies"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
