function jourtravaille(date) {
    //récuper le jour, mois et année
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
    const jourSemaine = date.getDay();

    const joursFeries = [
        "1/1",   // Jour de l'an
        "13/4",  // Lundi de Pâques
        "1/5",   // Fête du travail
        "8/5",   // Victoire 1945
        "21/5",  // Ascension
        "1/6",   // Lundi de Pentecôte
        "14/7",  // Fête nationale
        "15/8",  // Assomption
        "1/11",  // Toussaint
        "11/11", // Armistice
        "25/12"  // Noël
    ];

    const dateFormatee = `${jour}/${mois}`;
    let message;

    if (annee === 2020 && joursFeries.includes(dateFormatee)) {
        message = `le ${jour}/${mois}/${annee} est un jour férié`;
        console.log(message);
    }
    else if (jourSemaine === 0 || jourSemaine === 6) {
        message = `Non, ${jour}/${mois}/${annee} est un week end`;
        console.log(message);
    }
    else {
        message = `oui, ${jour}/${mois}/${annee} est un jour travaillé`;
        console.log(message);
    }

    const div = document.getElementById('result');
    if (div) {
        div.innerHTML += `<p>${message}</p>`;
    }
}

// Tests
jourtravaille(new Date(2020, 0, 1)); //1er janvier 2020 - jour férié
jourtravaille(new Date(2020, 6, 14)); //14 juillet 2020 - jour férié
jourtravaille(new Date(2020, 0, 4)); // 4 janvier 2020 - samedi (week end)
jourtravaille(new Date(2020, 0, 6)); // 6 janvier 2020