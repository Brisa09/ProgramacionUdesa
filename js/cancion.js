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

   // agregar o eliminar en la playlist 

let recuperoStorage = localStorage.getItem('playlist');

if(recuperoStorage == null){
       playlist = [];
       document.querySelector('.agregar').innerHTML = 'Agregar a my playlist'
} else {
       playlist = JSON.parse(recuperoStorage);
}

if(playlist.includes(idTrack)){
    document.querySelector('.agregar').innerHTML = "Eliminar de la playlist"
}
   
let agregar = document.querySelector('.agregar');
   
agregar.addEventListener('click', function(mantenerse){
    mantenerse.preventDefault();

    if(playlist.includes(idTrack)){
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = "Agregar a playlist";
        console.log(playlist); 
    } else {
        playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Eliminar de la playlist"
    }
   
    let playlistParaStorage = JSON.stringify(playlist);
   localStorage.setItem('playlist', playlistParaStorage); 
   console.log(localStorage);
   
})