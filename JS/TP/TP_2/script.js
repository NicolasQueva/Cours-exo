const touches = [...document.querySelectorAll('.bouton')];
const ecranh = document.querySelector('.ecranHaut')
const ecranb = document.querySelector('.ecranbas')
const listeKeycode = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown', (e) => {
    const valeur = e.code;
    calculer(valeur)
    console.log(valeur);
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case 'Backspace':
                ecranh.textContent = "";
                ecranb.textContent = "";
                break;
            case 'Enter':
                const calcul = eval(ecranh.textContent);
                ecranb.textContent = `= ${calcul} `;
                console.log(calcul);
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecranh.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert(`Une erreur est survenue dans votre calcul : ${e.message}`)
})