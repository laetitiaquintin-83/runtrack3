function afficherjourssemaines() {
    const jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    const iterateur = jourssemaines.keys();

    const div = document.getElementById('result');

    for (const key of iterateur) {
        console.log(`${key}: ${jourssemaines[key]}`);
        if (div) {
            div.innerHTML += `<p>${key}: ${jourssemaines[key]}</p>`;
        }
    }
}
afficherjourssemaines();    