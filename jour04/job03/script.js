document.getElementById("btnFiltrer").addEventListener("click", () => {
    // 1. Récupération des valeurs du formulaire
    const searchId = document.getElementById("inputId").value.trim();
    const searchNom = document.getElementById("inputNom").value.toLowerCase().trim();
    const searchType = document.getElementById("selectType").value;

    const divResultats = document.getElementById("resultats");
    divResultats.innerHTML = "Chargement...";

    // 2. Récupération des données avec Fetch
    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) throw new Error("Fichier introuvable");
            return response.json();
        })
        .then(pokemons => {
            // 3. Logique de filtrage
            const resultatsFiltres = pokemons.filter(p => {
                // Si l'utilisateur a tapé un ID et que l'ID ne correspond pas
                if (searchId !== "" && p.id.toString() !== searchId) {
                    return false;
                }

                // Si l'utilisateur a tapé un Nom et que le nom n'est pas inclus dedans
                if (searchNom !== "" && !p.nom.toLowerCase().includes(searchNom)) {
                    return false;
                }

                // Si l'utilisateur a choisi un Type et que ce n'est pas le bon
                if (searchType !== "" && p.type !== searchType) {
                    return false;
                }

                // Si on arrive ici, c'est que le Pokémon correspond à tous les critères
                return true;
            });

            // 4. Affichage des résultats
            afficherResultats(resultatsFiltres);
        })
        .catch(error => {
            console.error("Erreur:", error);
            divResultats.innerHTML = "<p style='color:red'>Erreur lors du chargement des données.</p>";
        });
});

// Fonction pour générer le HTML de la liste
function afficherResultats(liste) {
    const container = document.getElementById("resultats");
    container.innerHTML = "";

    if (liste.length === 0) {
        container.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
        return;
    }

    // On crée une boucle pour afficher chaque Pokémon trouvé
    liste.forEach(pokemon => {
        const div = document.createElement("div");
        div.className = "pokemon-card";
        div.innerHTML = `<strong>#${pokemon.id} ${pokemon.nom}</strong> - Type: ${pokemon.type}`;
        container.appendChild(div);
    });
}