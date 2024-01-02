const affichage = document.querySelector(".affichage")

let affich
// Création de fonction sans paramètres
function hello() {
    console.log("Hello World");
}
// Appel de la fonction
hello()


// Fonction avec des paramètres
function param1(lastname, firstname){
    console.log(`Bonjour ${firstname} ${lastname}`);

}
//Appel de la fonction avec paramètres
param1("Queva", "Nicolas")
affichage.innerHTML = affich