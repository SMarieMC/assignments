// fetch the 150 Pokemon

$(document).ready(function () {
    $("#btn").click(function () {
        getData()
    });
})
function getData() {
    var randInt = getRndInteger(1, 151)
    getRanPoke(randInt)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRanPoke(id) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function (data) {
        console.log(data.name);
        // This will show up on browser.
        console.log(data);
        // This will be shown only on the console.
        console.log(data.sprites.front_default);
        // This will show images of the Pokemon.
        var htmlstr = ""
        htmlstr += `<h4>${data.name}</h4>`
        $("#showPoke").append(htmlstr)
        var htmlimg = ""
        htmlimg += `<img src=${data.sprites.front_default}>`
        $("#showPoke").append(htmlimg)
    });
}

$(document).ready(function () {
    $("#hidePoke").click(function () {
        $("#showPoke").hide();
    });
    $("#btn").click(function () {
        $("#showPoke").show();
    });
})

// Form function

$(document).ready(function () {
    $("#seek").submit(function (event) {
        $("#delete").click(function () {
            $("#seePoke").remove();
        });
        event.preventDefault();
        console.log("submitbuttonclick");
        $("#searchPoke").val();
        console.log($("#searchPoke").val())
        var pokeId = $("#searchPoke").val();
        $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`, function (data) {
            console.log(data);
            // This will only show up on the console.
            console.log(data.name);
            console.log(data.sprites.front_default)
            var htmlstr = ""
            htmlstr += `<h4>${data.name}</h4>`
            $("#seePoke").append(htmlstr)
            var htmlimg = ""
            htmlimg += `<img src=${data.sprites.front_default}>`
            $("#seePoke").append(htmlimg)
        });
    });
});