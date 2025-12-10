<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Puzzle Arc-en-Ciel</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 20px; }
        
        /* Conteneur Flexbox pour aligner les images */
        #rainbow-container {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin: 20px auto;
            min-height: 150px; /* Hauteur min pour faciliter le drop */
            border: 2px dashed #ccc; /* Aide visuelle */
            padding: 10px;
            width: fit-content;
        }

        /* Style des images */
        .img-piece {
            width: 80px;
            height: 150px;
            cursor: grab;
            border: 1px solid #ddd;
            background-color: #eee; /* Couleur de fond si image manquante */
        }
        
        /* Petit effet quand on survole une zone de dépôt */
        .img-piece:hover { opacity: 0.8; border-color: #333; }

        /* Messages */
        .gagne { color: green; font-size: 1.5em; font-weight: bold; }
        .perdu { color: red; font-size: 1.5em; font-weight: bold; }
        
        button { padding: 10px 20px; font-size: 1em; cursor: pointer; }
    </style>
</head>
<body>

    <h1>Reconstituez l'Arc-en-Ciel</h1>
    <button id="btn-melanger">Mélanger les images</button>
    
    <div id="rainbow-container"></div>
    <div id="message"></div>

    <script>
        // 1. CONFIGURATION
        const container = document.getElementById('rainbow-container');
        const messageDisplay = document.getElementById('message');
        const btnMelanger = document.getElementById('btn-melanger');

        // Utilisation des vraies images
        const ordreCorrect = ['image/arc1.png', 'image/arc2.png', 'image/arc3.png', 'image/arc4.png', 'image/arc5.png', 'image/arc6.png'];
        
        // Copie du tableau pour jouer
        let ordreActuel = [...ordreCorrect];
        
        // Variable pour stocker l'index de l'élément qu'on est en train de glisser
        let indexImageGlissee = null;

        // 2. FONCTIONS DE RENDU (AFFICHER LE JEU)
        function afficherJeu() {
            container.innerHTML = ""; // On nettoie le conteneur
            
            ordreActuel.forEach((item, index) => {
                // Création d'une vraie image
                const element = document.createElement('img'); 
                element.className = 'img-piece';
                element.src = item; // Charge l'image
                
                // --- C'EST ICI QUE LA MAGIE DU DRAG & DROP OPERE ---
                
                // A. On rend l'élément glissable
                element.draggable = true;

                // B. Événement 1 : Je commence à glisser (dragstart)
                element.addEventListener('dragstart', () => {
                    indexImageGlissee = index; // On retient "Qui" on déplace
                });

                // C. Événement 2 : Je survole une zone (dragover)
                element.addEventListener('dragover', (e) => {
                    e.preventDefault(); // OBLIGATOIRE pour autoriser le "drop"
                });

                // D. Événement 3 : Je lâche l'image (drop)
                element.addEventListener('drop', () => {
                    echangerImages(indexImageGlissee, index);
                });
                
                container.appendChild(element);
            });

            verifierResultat();
        }

        // 3. LOGIQUE DU JEU
        function echangerImages(fromIndex, toIndex) {
            // Technique d'échange de variables en JS
            const temp = ordreActuel[fromIndex];
            ordreActuel[fromIndex] = ordreActuel[toIndex];
            ordreActuel[toIndex] = temp;

            // On réaffiche tout pour mettre à jour l'ordre visuel
            afficherJeu();
        }

        function verifierResultat() {
            // On transforme les tableaux en texte pour les comparer facilement
            if (JSON.stringify(ordreActuel) === JSON.stringify(ordreCorrect)) {
                messageDisplay.innerText = "Vous avez gagné !";
                messageDisplay.className = "gagne";
            } else {
                messageDisplay.innerText = "Vous avez perdu";
                messageDisplay.className = "perdu";
            }
        }

        // Fonction de mélange (Fisher-Yates)
        btnMelanger.addEventListener('click', () => {
            for (let i = ordreActuel.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [ordreActuel[i], ordreActuel[j]] = [ordreActuel[j], ordreActuel[i]];
            }
            afficherJeu();
        });

        // Lancement initial
        afficherJeu();

    </script>
</body>
</html>