<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll Footer Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Scrollez vers le bas 👇</h1>
    <p>La barre en bas va se remplir comme une barre de chargement.</p>

    <footer>
        Progression du scroll
    </footer>

    <script>
        // On sélectionne le footer et le body
        const footer = document.querySelector('footer');
        
        // On écoute l'événement de défilement (scroll)
        window.addEventListener('scroll', () => {
            // 1. Position actuelle du scroll (haut de la fenêtre)
            const scrollTop = window.scrollY;
            
            // 2. Hauteur totale du document - Hauteur de la fenêtre visible
            // Cela nous donne la distance maximale qu'on peut scroller
            const docHeight = document.body.scrollHeight - window.innerHeight;
            
            // 3. Calcul du pourcentage (0 à 100)
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            // 4. On envoie ce pourcentage au CSS via la variable --scroll
            footer.style.setProperty('--scroll', scrollPercent + '%');
        });
    </script>
</body>
</html>