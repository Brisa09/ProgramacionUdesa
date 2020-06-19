let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
let searchParams = new URLSearchParams(queryString);
let idGenero = searchParams.get("id");

let url = proxy + "https://api.deezer.com/genre/" + idGenero;
 
fetch(url)
   .then(function(response){
       return response.json();
   })
   .then(function(datos){
    let nombre = document.querySelector('h1');
    nombre.innerHTML = datos.name
   })

let pasta = url + "/artists";

fetch(pasta)
   .then(function(respuesta){
       return respuesta.json(); 
   })
   .then(function(info){
       let artistas = document.querySelector('.artistasrelacionados');
       let aca =info.data;

       for(var i=0; i<=9; i++){
        artistas.innerHTML += "<li>" + "<a href='artista.html?id=" + aca[i].id + "'>" + aca[i].name + "</a>" + "</li>";
       }
       
   })


    