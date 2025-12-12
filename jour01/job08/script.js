function sommenombresPremiers(a, b) {
    function nbrPremier(nbr) {
        for (var i = 2; i < nbr; i++)
            if (nbr % i === 0) return false;
        return true;
    }

    if (nbrPremier(a) && nbrPremier(b)) {
        return (a + b)
    } else {
        return false;
    }
}

const div = document.getElementById('result');

const test1 = sommenombresPremiers(3, 5);
const test2 = sommenombresPremiers(4, 5);

console.log(test1);
console.log(test2);

if (div) {
    div.innerHTML = `
        <p>sommenombresPremiers(3, 5) = ${test1}</p>
        <p>sommenombresPremiers(4, 5) = ${test2}</p>
    `;
}

