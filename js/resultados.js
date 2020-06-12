let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;
console.log(queryString);

let searchParams = new URLSearchParams(queryString);
console.log(searchParams);

let search = searchParams.get("search");
console.log(search);

let artist = proxy + "https://api.deezer.com/search/artist?q=" + search;
console.log(artist);


fetch(artist)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let lista = document.querySelector(".listaresultados");
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += "<li>" + "<a>" + resultado.name + "</a>" + "</li>"
        })
    })
.catch(function(error){
    console.log(error);
})