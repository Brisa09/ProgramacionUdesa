let proxy = "https://cors-anywhere.herokuapp.com/";
let segundo = proxy + "https://api.deezer.com/chart/0/artists";

fetch(segundo)
    .then(function(respuesta){
        return respuesta .json();
    })
    .then(function(datos){
        let artists = document.querySelector('.cajasordenadasartistas');
        let ok = datos.data;

        for (var i=0; i<=5; i++){
            artists.innerHTML += "<li>"+ "<a href='details.html'>" + "<img src=" + ok[i].picture + ">" + ok[i].name + "</a>"+ "</li>";
        }
    })

.catch(function(error){
    console.log(error)
})

let primero = proxy + "https://api.deezer.com/chart/0/albums";

fetch(primero)
   .then(function(devolucion){
       return devolucion .json();
   })
   .then(function(retornos){
       let albums = document.querySelector('.cajasordenadasalbums');
       let replica = retornos.data;

       for (var i = 0; i<=5; i++){
           albums.innerHTML += "<li>" + "<a href='details.html'>" + "<img src=" + replica[i].cover + ">" + replica[i].title + "</a>" + "</li>";
       }
   })

let cuarto = proxy + "https://api.deezer.com/genre";

fetch(cuarto)
    .then(function(hola){
        return hola.json();
    })
    .then(function(esto){
        let gol = document.querySelector('.cajasordenadasgeneros');
        let aca = esto.data;
   
        for(var i =1; i<=6; i++){
           gol.innerHTML += "<li>" + "<a href='details.html'" + ">" + "<img src=" + aca[i].picture + ">" + aca[i].name + "</a>" + "</li>";
         }
})
