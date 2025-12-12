function bisextile(annee) {
    let result = (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0
        ? `${annee} est une annee bixestile`
        : `${annee} n'est pas une année bixestile`;

    console.log(result);

    // Afficher dans la page
    const div = document.getElementById('result');
    if (div) {
        div.innerHTML += `<p>${result}</p>`;
    }
}

bisextile(2000);
bisextile(2024);
bisextile(2025);