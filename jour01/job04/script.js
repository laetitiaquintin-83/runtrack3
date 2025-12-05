function bisextile(annee) {
    let result = (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0
        ? `${annee} est une annee bixestile`
        : `${annee} n'est pas une année bixestile`;

    console.log(result);
}

bisextile(2000);