let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
let searchParams = new URLSearchParams(queryString);
let idTrack = searchParams.get("id");
console.log(idTrack);

let url = proxy + "https://api.deezer.com/track/" + idTrack;

fetch(url)
   .then(function(response){
       return response.json();
   })
   .then(function(datos){
       let nombre = document.querySelector('h1');
       nombre.innerHTML = datos.title;

       let artista = document.querySelector('.artista');
       artista.innerHTML += datos.artist.name ;

       let album = document.querySelector('.album');
       album.innerHTML += datos.album.title;

       let duracion = document.querySelector('.duracion');
       duracion.innerHTML += datos.duration;

       
   })

   .catch(function(error){
       console.log(error);
   })
