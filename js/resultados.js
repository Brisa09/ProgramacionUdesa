let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
console.log(queryString);

let searchParams = new URLSearchParams(queryString);
console.log(searchParams);

let search = searchParams.get("search");
console.log(search);
var artist = proxy + "https://api.deezer.com/search/artist?q=" + search;
console.log(artist);


let canciones = proxy + "https://api.deezer.com/search/track?q=" + search;

fetch(artist)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let lista = document.querySelector(".artistas");
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += "<li>" + "<a href='artista.html?id=" + resultado.id + "'>" + resultado.name + "</a>" + "</li>"
        })
    })

let albums = proxy + "https://api.deezer.com/search/album?q=" + search;

fetch(albums)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(info){
        let point = document.querySelector(".albums");
        let backs = info.data;
        
        backs.forEach(function(back){
            point.innerHTML += "<li>" + "<a href='album.html?id=" + back.id + "'>" + back.title + "</a>" + "</li>";
        })
    })

fetch(canciones)
    .then(function(risposta){
        return risposta.json();
    })
    .then(function(envio){
        let select = document.querySelector(".canciones");
        let go = envio.data;

       go.forEach(function(goes){
           select.innerHTML += "<li>" + "<a href='cancion.html?id=" + goes.id + "'>" + goes.title + "</a>" + "</li>";
       })
        
    })