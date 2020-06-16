let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
console.log(queryString);

let searchParams = new URLSearchParams(queryString);
console.log(searchParams);

let search = searchParams.get("search");
console.log(search);
var artist = proxy + "https://api.deezer.com/search/artist?q=" + search;
console.log(artist);

let albums = proxy +"https://api.deezer.com/search/album?q=" + search;

if(artist.checkValidity){
    fetch(artist)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let lista = document.querySelector(".listaresultados");
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += "<li>" + "<a href='details.html' >" + resultado.name + "</a>" + "</li>"
        })
    })
} else {
    fetch(albums)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(info){
        let point = document.querySelector(".listaresultados");
        let backs = info.data;
        
        backs.forEach(function(back){
            point.innerHTML += "<li>" + "<a href='details.html' >" + back.title + "</a>" + "</li>"
        })
    })
}