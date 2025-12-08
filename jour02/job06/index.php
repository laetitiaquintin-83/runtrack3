<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet La Plateforme_</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="content">
        <h1>La Plateforme_</h1>
        <p>Le code Konami a débloqué le style !</p>
        <p>Scrollez pour voir la barre de progression en bas.</p>
    </div>

    <footer>
        Loading...
    </footer>

    <script>
        // --- 1. GESTION DU SCROLL (Barre de chargement) ---
        const footer = document.querySelector('footer');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            // Mise à jour de la variable CSS
            footer.style.setProperty('--scroll', scrollPercent + '%');
            
            // Petit bonus : afficher le % dans le texte du footer
            if (document.body.classList.contains('plateforme-mode')) {
                footer.textContent = Math.round(scrollPercent) + '%';
            }
        });

        // --- 2. GESTION DU KONAMI CODE ---
        // Séquence : Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, b, a
        const konamiCode = [
            "ArrowUp", "ArrowUp", 
            "ArrowDown", "ArrowDown", 
            "ArrowLeft", "ArrowRight", 
            "ArrowLeft", "ArrowRight", 
            "b", "a"
        ];
        
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            // On récupère la touche appuyée
            const key = e.key;

            // Est-ce que la touche correspond à l'étape actuelle de la séquence ?
            if (key === konamiCode[konamiIndex]) {
                // Oui, on avance d'un cran
                konamiIndex++;

                // Si on a atteint la fin du tableau, c'est gagné !
                if (konamiIndex === konamiCode.length) {
                    activerLaPlateforme();
                    konamiIndex = 0; // Reset pour pouvoir le refaire si besoin
                }
            } else {
                // Non, erreur dans la séquence, on repart à zéro
                konamiIndex = 0;
            }
        });

        function activerLaPlateforme() {
            // On ajoute la classe au body
            document.body.classList.add('plateforme-mode');
            alert("Cheat Code Activé : Mode La Plateforme_ !");
        }
    <script src="./script.js"></script>
</body>
</html>