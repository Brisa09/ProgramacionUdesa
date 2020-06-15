let proxy = "https://cors-anywhere.herokuapp.com/";
let segundo = proxy + "https://api.deezer.com/chart/0/artists";

fetch(segundo)
    .then(function(respuesta){
        return respuesta .json();
    })
    .then(function(datos){
        let artists = document.querySelector('.cajasordenadasartistas');
        let ok = datos.data;

        ok.forEach(function(artist){
            artists.innerHTML += "<li>"+ "<a href='detalle.html'>" + "<img src=" + artist.picture + ">" + artist.name + "</a>"+ "</li>";
        })
    })

.catch(function(error){
    console.log(error);
})

let primero = proxy + "https://api.deezer.com/chart/0/albums";

fetch(primero)
   .then(function(devolucion){
       return devolucion .json();
   })
   .then(function(retornos){
       let albums = document.querySelector('.cajasordenadasalbums');
       let replica = retornos.data;

       replica.forEach(function(album){
           albums.innerHTML += "<li>" + "<a href='detalle.html'>" + "<img src=" + album.cover + ">" + album.title + "</a>" + "</li>";
       })
   })