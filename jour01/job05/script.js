function afficherjourssemaines() {
    const jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    const iterateur = jourssemaines.keys();
    for (const key of iterateur) {
        console.log(`${key}: ${jourssemaines[key]}`);
    }
}
afficherjourssemaines();    