document.addEventListener("keydown", function (event) {
    console.log(event);
    event.preventDefault();
    let textaera = document.getElementById("keylogger");
    let key = event.key;

    if (/^[a-zA-Z]$/.test(key)) {
        if (document.activeElement === textaera) {

            textaera.value += key + key;
        } else {
            textaera.value += key;
        }

    }

});

