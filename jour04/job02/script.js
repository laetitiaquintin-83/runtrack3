function jsonValueKey(jsonString, key) {
    try {
        //On convertit la chaine JSON en objet JavaScript
        const objet = JSON.parse(jsonString);

        //On retourne la valeur associée à la clé
        return objet[key];

    } catch (error) {
        //Gestion simple d'erreur si le JSON est mal formé
        console.error("Erreur de format JSON", error);
        return null;
    }

}

// Définition de la chaîne JSON (avec les guillemets sur les clés)
const maChaineJson = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Appel de la fonction pour chercher la ville
const resultat = jsonValueKey(maChaineJson, "city");

// Affichage du résultat
console.log(resultat); // Affiche : Marseille

// Afficher dans la page
const div = document.getElementById('resultats');
div.innerHTML = `<div class="result"><strong>Ville trouvée:</strong> ${resultat}</div>`;

// Afficher d'autres valeurs
const nom = jsonValueKey(maChaineJson, "name");
const address = jsonValueKey(maChaineJson, "address");
const staff = jsonValueKey(maChaineJson, "nb_staff");
const creation = jsonValueKey(maChaineJson, "creation");

div.innerHTML += `
    <div class="result"><strong>Nom:</strong> ${nom}</div>
    <div class="result"><strong>Adresse:</strong> ${address}</div>
    <div class="result"><strong>Nombre de staff:</strong> ${staff}</div>
    <div class="result"><strong>Création:</strong> ${creation}</div>
`;