$(document).ready(function () {
    $("#button").click(function (e) {
        $("#texte").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
    });

    $("#cacher").click(function (e) {
        $("#texte").hide();
    });
});