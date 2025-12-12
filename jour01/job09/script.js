function compareNumbers(a, b) {
    return b - a;
}

function tri(number, order) {
    if (order === "desc") {
        number.sort(compareNumbers);
    } else {
        number.sort((a, b) => a - b);
    }
    console.log(number);
    return number;
}

const tableau1 = [1, 4, 40, 60];
const tableau2 = [1, 4, 40, 60];

const resultAsc = tri(tableau1, "asc");
const resultDesc = tri(tableau2, "desc");

const div = document.getElementById('result');
if (div) {
    div.innerHTML = `
        <p><strong>Tableau de départ :</strong> [1, 4, 40, 60]</p>
        <p><strong>Tri ascendant :</strong> [${resultAsc.join(', ')}]</p>
        <p><strong>Tri descendant :</strong> [${resultDesc.join(', ')}]</p>
    `;
}