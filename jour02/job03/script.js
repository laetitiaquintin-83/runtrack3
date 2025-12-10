const button = document.getElementById("button");
if (button) {
    function addone() {
        const compteur = document.getElementById("compteur");
        if (compteur)
            compteur.textcontent++;
    }
    button.addEventListener("click", addone);
}

