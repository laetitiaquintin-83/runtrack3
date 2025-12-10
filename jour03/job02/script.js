const container = document.getElementById('rainbow-container');
const message = document.getElementById('result-message');
const btn = document.getElementById('shuffle-btn');

// L'ordre correct attendu
const correctOrder = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];
// Une copie qu'on va mélanger
let currentOrder = [...correctOrder];

// Fonction pour afficher les images
function render() {
    container.innerHTML = ''; // On vide le conteneur
    currentOrder.forEach((imgSrc) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'img-piece';
        // Ici, il faudrait ajouter les événements Drag & Drop
        container.appendChild(img);
    });
    checkWin(); // On vérifie si c'est gagné après affichage
}

// Fonction pour mélanger (Algorithme de Fisher-Yates simplifié)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Clic sur le bouton mélanger
btn.addEventListener('click', () => {
    shuffleArray(currentOrder);
    render();
    message.innerText = ""; // On efface le message quand on mélange
});

// Fonction de vérification
function checkWin() {
    // On transforme le tableau actuel en chaîne de caractères pour comparer
    // JSON.stringify permet de comparer ['a','b'] avec ['a','b'] facilement
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        message.innerText = "Vous avez gagné";
        message.className = "win";
    } else {
        message.innerText = "Vous avez perdu"; // Ou rien afficher tant que le jeu est en cours
        message.className = "lose";
    }
}

// Initialisation
render();