document.addEventListener("keydown", function (event) {
    var textaera = document.getElementById("keylogger");
    var key = event.key;

    if (/^[a-zA-Z]$/.test(key)) {
        if (document.activeElement === textaera) {
            event.preventDefault();
            textaera.value += key + key;
        } else {
            textaera.value += key;
        }

    }

});

