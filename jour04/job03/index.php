<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex Filtre</title>
    <style>
        /* Un peu de style pour la lisibilité */
        .search-box { margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; }
        .pokemon-card { border: 1px solid #ddd; padding: 10px; margin: 5px 0; background: #f9f9f9; }
    </style>
</head>
<body>

<h1>Recherche de Pokémon</h1>

<div class="search-box">
    <label>ID : <input type="text" id="inputId"></label>
    <label>Nom : <input type="text" id="inputNom"></label>

    <label>Type :
        <select id="selectType">
            <option value="">-- Tous les types --</option>
            <option value="Plante">Plante</option>
            <option value="Feu">Feu</option>
            <option value="Eau">Eau</option>
            <option value="Électrik">Électrik</option>
            <option value="Psy">Psy</option>
            <option value="Normal">Normal</option>
        </select>
    </label>

    <input type="button" id="btnFiltrer" value="Filtrer">
</div>

<div id="resultats"></div>

<script src="./script.js"></script>
</body>
</html>