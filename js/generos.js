let proxy = "https://cors-anywhere.herokuapp.com/";
let cuarto = proxy + "https://api.deezer.com/genre";

fetch(cuarto)
    .then(function(hola){
        return hola.json();
    })
    .then(function(esto){
        let gol = document.querySelector('.generos');
        let aca = esto.data;

        aca.forEach(function(tan){
            gol.innerHTML += "<li>" + "<a href='details.html'" + ">" + "<img src=" + tan.picture_medium + ">" + tan.name + "</a>" + "</li>";
        })
    })