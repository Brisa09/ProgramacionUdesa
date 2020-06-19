let proxy = "https://cors-anywhere.herokuapp.com/";
let cuarto = proxy + "https://api.deezer.com/genre";

fetch(cuarto)
    .then(function(hola){
        return hola.json();
    })
    .then(function(esto){
        let gol = document.querySelector('.generos');
        let aca = esto.data;

        aca.forEach(function(plato){
            gol.innerHTML += "<li>" + "<a href='detalle.html?id=" + plato.id + "'>" + "<img src=" + plato.picture_medium + ">" + plato.name + "</a>" + "</li>";
        })
    })