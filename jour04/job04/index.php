<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Utilisateurs</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
        th {
            background-color: #f2F2F2;
        }
    </style>
</head>
<body>

<h1>Utilisateurs</h1>

<button id="update-button">Cliquez pour Actualiser la Liste (Update)</button>
<p id="status-message"></p>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody id="users-table-body">
    </tbody>
</table>

<script>
    function updateUsersTable() {
        const tbody = document.getElementById('users-table-body');
        const statusMessage = document.getElementById('status-message');

        statusMessage.textContent = "Je vais chercher la liste...";

        fetch('users.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(users => {
                tbody.innerHTML = '';

                if (users.length === 0) {
                    statusMessage.textContent = "La table est vide !";
                } else {
                    users.forEach(user => {
                        const row = tbody.insertRow();

                        row.insertCell().textContent = user.id;
                        row.insertCell().textContent = user.nom;
                        row.insertCell().textContent = user.prenom;
                        row.insertCell().textContent = user.email;
                    });
                    statusMessage.textContent = `Liste actualisée ! ${users.length} utilisateurs trouvés.`;
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
                statusMessage.textContent = 'Erreur : Impossible de récupérer la liste.';
            });
    }

    document.getElementById('update-button').addEventListener('click', updateUsersTable);
    updateUsersTable();
</script>
</body>
</html>