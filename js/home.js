let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/artist/";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
    })

    let artists = document.querySelector()