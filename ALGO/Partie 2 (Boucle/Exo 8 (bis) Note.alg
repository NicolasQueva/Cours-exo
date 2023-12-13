<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_TANT_QUE"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NBN" algoitem="NBN EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N" algoitem="N EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NP" algoitem="NP EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#moyenne" algoitem="moyenne EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NG" algoitem="NG EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Menu" algoitem="Menu EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#NP#20#pasliste" algoitem="NP PREND_LA_VALEUR 20"/>
        <item code="4#Combien de note ? #1" algoitem="AFFICHER &quot;Combien de note ? &quot;"/>
        <item code="15#N != 777" algoitem="TANT_QUE (N != 777) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Rentrer une note :#0" algoitem="AFFICHER &quot;Rentrer une note :&quot;"/>
            <item code="2#N#pasliste" algoitem="LIRE N"/>
            <item code="6#N != 777" algoitem="SI (N != 777) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#NBN#NBN + 1#pasliste" algoitem="NBN PREND_LA_VALEUR NBN + 1"/>
                <item code="6#N > NG" algoitem="SI (N > NG) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#NG#N#pasliste" algoitem="NG PREND_LA_VALEUR N"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="6#N &lt; NP" algoitem="SI (N &lt; NP) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#NP#N#pasliste" algoitem="NP PREND_LA_VALEUR N"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="5#moyenne#moyenne + N#pasliste" algoitem="moyenne PREND_LA_VALEUR moyenne + N"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#moyenne#moyenne/NBN#pasliste" algoitem="moyenne PREND_LA_VALEUR moyenne/NBN"/>
        <item code="15#Menu != 4" algoitem="TANT_QUE (Menu != 4) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="4#&#x9;Veuillez faire un choix :\n\t  _____________________________________ \n\t | 1) Pour voir la note la plus elevée | \n\t | 2) pour voir la note la plus basse  |\n\t | 3) Pour voir la moyenne             |\n\t | 4) Pour quitter                     |\n\t |_____________________________________|#1" algoitem="AFFICHER &quot;&#x9;Veuillez faire un choix :\n\t  _____________________________________ \n\t | 1) Pour voir la note la plus elevée | \n\t | 2) pour voir la note la plus basse  |\n\t | 3) Pour voir la moyenne             |\n\t | 4) Pour quitter                     |\n\t |_____________________________________|&quot;"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="2#Menu#pasliste" algoitem="LIRE Menu"/>
            <item code="6#Menu == 1 " algoitem="SI (Menu == 1 ) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#La note la plus élevée est : #0" algoitem="AFFICHER &quot;La note la plus élevée est : &quot;"/>
                <item code="3#NG#1#pasliste" algoitem="AFFICHER NG"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="6#Menu == 2 " algoitem="SI (Menu == 2 ) ALORS">
                        <item code="7#debutsi" algoitem="DEBUT_SI"/>
                        <item code="4#La note la plus petite est : #0" algoitem="AFFICHER &quot;La note la plus petite est : &quot;"/>
                        <item code="3#NP#1#pasliste" algoitem="AFFICHER NP"/>
                        <item code="8#finsi" algoitem="FIN_SI"/>
                        <item code="9#sinon" algoitem="SINON">
                            <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                            <item code="6#Menu == 3 " algoitem="SI (Menu == 3 ) ALORS">
                                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                <item code="4#La moyenne est de : #0" algoitem="AFFICHER &quot;La moyenne est de : &quot;"/>
                                <item code="3#moyenne#1#pasliste" algoitem="AFFICHER moyenne"/>
                                <item code="8#finsi" algoitem="FIN_SI"/>
                                <item code="9#sinon" algoitem="SINON">
                                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                    <item code="6#Menu &lt;= 0 ou Menu >= 5" algoitem="SI (Menu &lt;= 0 ou Menu >= 5) ALORS">
                                        <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                        <item code="4#Erreur en dehors de la plage prévue#1" algoitem="AFFICHER &quot;Erreur en dehors de la plage prévue&quot;"/>
                                        <item code="8#finsi" algoitem="FIN_SI"/>
                                    </item>
                                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                                </item>
                            </item>
                            <item code="11#finsinon" algoitem="FIN_SINON"/>
                        </item>
                    </item>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
