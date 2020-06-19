let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
let searchParams = new URLSearchParams(queryString);
let idArtista = searchParams.get("id");

let url = proxy + "https://api.deezer.com/artist/" + idArtista;

fetch(url)
   .then(function(response){
       return response.json();
   })
   .then(function(datos){
       let nombre = document.querySelector('h1');
       nombre.innerHTML = datos.name;

       let foto = document.querySelector('.foto');
       foto.innerHTML = "<img src='" + datos.picture + "'>";

       let fans = document.querySelector('.fans');
       fans.innerHTML += datos.nb_fan;

   })

let fact = url + "/top";

fetch(fact)
   .then(function(respuesta){
       return respuesta.json(); 
   })
   .then(function(info){
       let canciones = document.querySelector('.canciones');
       let aca =info.data;

       aca.forEach(function(cancion){
           canciones.innerHTML += "<li>" + cancion.title + "</li>";
       })
       
   })