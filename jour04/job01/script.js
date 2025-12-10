//Sélection du bouton
const btn = document.getElementById("button");

//Ajout de l'écouteur d'événement au clic
btn.addEventListener("click", () => {
    //Utilisation de Fetch pour récupérer le fichier
    fetch('expression.txt')
        .then(reponse => {
            //On vérifie que la requete à réussi
            if (!reponse.ok) {
                throw new Error("Erreur lors du chargement du fichier");
            }
            //On convertit la réponse en texte brut
            return reponse.text();
        })
        .then(texte => {
            //Création du paragraphe <p>
            const nouveauParagraphe = document.createElement("p");

            //Insertion du texte récupéré
            nouveauParagraphe.textContent = texte;

            //Insertion dans le corps de la page (body)
            document.body.appendChild(nouveauParagraphe);
        })
        .catch(error => {
            console.error("Il y a eu un problème :", error);
        });
});