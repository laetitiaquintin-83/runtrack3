$(document).ready(function () {

    // --- 1. Lien Accueil vers La Plateforme ---
    $('#link-accueil').attr('href', 'https://laplateforme.io').attr('target', '_blank');


    // --- 2. Bouton "Papillon" affiche une modale ---
    $('#btn-papillon').click(function () {
        $('#papillonModal').modal('show');
    });


    // --- 3. Bouton "Rebooter le Monde" (Blade Runner) ---
    // Tableau de citations du film Blade Runner (1982) en français
    const bladeRunnerQuotes = [
        "J’ai vu des choses que vous ne pourriez pas croire.",
        "Des vaisseaux en flammes au large de l’épaule d’Orion.",
        "J’ai vu des rayons C étinceler dans l’obscurité près de la porte de Tannhäuser.",
        "Tous ces moments se perdront dans le temps, comme des larmes sous la pluie.",
        "Il est temps de mourir.",
        "Réveille-toi, il est temps de mourir.",
        "C’est dommage qu’elle ne vivra pas ! Mais, après tout, qui vit ?"
    ];

    $('#btn-reboot').click(function () {
        // Choisir une citation aléatoire
        const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
        // Remplacer le texte du paragraphe principal du Jumbotron
        $('#jumbo-text').text(randomQuote);
    });


    // --- 4. Pagination modifie le contenu du Jumbotron ---
    $('.pagination .page-link').click(function (e) {
        e.preventDefault(); // Empêche le lien de remonter en haut de page
        const pageContent = $(this).text(); // Récupère "1", "2", "Next", etc.
        $('#jumbo-text').text("Vous naviguez actuellement sur la page : " + pageContent);
    });


    // --- 5. Liste groupée (Changement d'actif) ---
    $('#my-list-group .list-group-item').click(function (e) {
        e.preventDefault();
        // Enlève la classe 'active' de tous les éléments frères
        $(this).siblings().removeClass('active');
        // Ajoute la classe 'active' sur l'élément cliqué
        $(this).addClass('active');
    });


    // --- 6. Progress Bar (+ et -) ---
    $('#btn-progress-minus').click(function () {
        let currentWidth = parseInt($('#my-progress-bar').css('width')) / $('#my-progress-bar').parent().width() * 100;
        if (currentWidth > 0) {
            let newWidth = currentWidth - 10;
            $('#my-progress-bar').css('width', newWidth + '%').attr('aria-valuenow', newWidth);
        }
    });

    $('#btn-progress-plus').click(function () {
        let currentWidth = parseInt($('#my-progress-bar').css('width')) / $('#my-progress-bar').parent().width() * 100;
        if (currentWidth < 100) {
            let newWidth = currentWidth + 10;
            $('#my-progress-bar').css('width', newWidth + '%').attr('aria-valuenow', newWidth);
        }
    });


    // --- 7. Code Secret "DGC" (Keypress) ---
    let keySequence = []; // Pour stocker les touches pressées

    $(document).keydown(function (e) {
        // On ajoute la touche pressée (en majuscule) au tableau
        keySequence.push(e.key.toUpperCase());

        // On garde seulement les 3 dernières touches
        if (keySequence.length > 3) {
            keySequence.shift();
        }

        // On vérifie si les 3 dernières touches forment "DGC"
        if (keySequence.join('') === 'DGC') {
            // Récupérer les infos du formulaire de gauche
            let nom = $('#inputName').val();
            let prenom = $('#inputFirstname').val();

            // Si vide, on met un message par défaut
            if (nom === "") nom = "Non renseigné";
            if (prenom === "") prenom = "Non renseigné";

            // Injecter dans la modale
            $('#dgc-content').html("<strong>Nom :</strong> " + nom + "<br><strong>Prénom :</strong> " + prenom);

            // Afficher la modale
            $('#dgcModal').modal('show');

            // Réinitialiser la séquence pour éviter les doublons
            keySequence = [];
        }
    });


    // --- 8. Validation formulaire & Couleur Spinner ---
    $('#form-login').submit(function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        let email = $('#inputEmail').val();
        let password = $('#inputPassword').val();

        if (email !== "" && password !== "") {
            // Liste des couleurs Bootstrap possibles pour le texte
            const colors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-dark'];

            // Sélectionner une couleur aléatoire
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            // Cibler le spinner
            const spinner = $('#main-spinner');

            // Enlever toutes les classes de couleur existantes
            spinner.removeClass(colors.join(' '));

            // Ajouter la nouvelle couleur
            spinner.addClass(randomColor);
        } else {
            alert("Veuillez remplir l'email et le mot de passe.");
        }
    });

});