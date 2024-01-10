// URL des API
const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=642"

//Utilisation fetch

fetch(apiURL)
    .then(response => {
        // Verifier si la reponse est ok (HTTP 200)
        if (!response.ok) {
            throw new Error(`La requete a échoué avec un statut ${response.data}`)
        } 
        // renvoie des données
        // Parse la reponse json
        // .json a { } ou [ ]
        return response.json()
    })
    .then(data => {
        console.log("Donnée reçu :");
        console.log(data);
    })
    .catch(error => {
        //Gestion des erreur
        console.error("Une erreur : " + error);
    })


    