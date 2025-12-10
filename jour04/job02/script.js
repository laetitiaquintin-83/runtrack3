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