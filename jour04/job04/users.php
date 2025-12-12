<?php
// 1. Les informations pour se connecter à l'armoire
$serveur = "localhost"; // L'adresse de ton ordinateur
$utilisateur = "root"; // Ton nom d'utilisateur de Base de données
$mot_de_passe = ""; // Le mot de passe (souvent vide)
$nom_base = "utilisateurs"; // Le nom de la table que tu as créée

// 2. Essayer de se connecter 
$connexion = new mysqli($serveur, $utilisateur, $mot_de_passe, $nom_base);

// Vérifier si la connexion a raté 
if ($connexion->connect_error) {
    die("La connexion a échoué : " . $connexion->connect_error);
}

// 3. Demander tous les "utilisateurs"
$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$resultat = $connexion->query($sql);

$liste_utilisateurs = array(); // On prépare une liste vide

// 4. Mettre chaque ami dans la liste
if ($resultat->num_rows > 0) {
    // Tant qu'il y a des lignes, on les ajoute
    while($row = $resultat->fetch_assoc()) {
        $liste_utilisateurs[] = $row;
    }
}

// 5. Emballer la liste en JSON et l'afficher
header('Content-Type: application/json'); 
echo json_encode($liste_utilisateurs);

// 6. Fermer la connexion
$connexion->close();
?>
