// On attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function () {

    // On sélectionne tous les champs de texte qui ont la classe 'copy-input'
    const inputs = document.querySelectorAll('.copy-input');

    // Pour chaque champ, on ajoute une écoute d'événement "click"
    inputs.forEach(input => {
        input.addEventListener('click', function () {
            // Cette fonction sélectionne tout le texte à l'intérieur
            this.select();

            // Optionnel : Copier directement dans le presse-papier
            // navigator.clipboard.writeText(this.value);
            // alert("Lien copié !");
        });
    });

    console.log("Le script est chargé et prêt.");
});