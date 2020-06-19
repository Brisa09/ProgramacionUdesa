let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
let searchParams = new URLSearchParams(queryString);
let idAlbum = searchParams.get("id");

let url = proxy + "https://api.deezer.com/album/" + idAlbum;

fetch(url)
   .then(function(response){
       return response.json();
   })
   .then(function(datos){
       let nombre = document.querySelector('h1');
       nombre.innerHTML = datos.title;

       let foto = document.querySelector('.foto');
       foto.innerHTML = "<img src='" + datos.cover + "'>";

       let interprete = document.querySelector('.artista');
       interprete.innerHTML +=   "<a href='artista.html?id=" + datos.artist.id + "'>" + datos.artist.name; + "</a>"

       let fecha = document.querySelector('.fecha');
       fecha.innerHTML += datos.release_date;
   })