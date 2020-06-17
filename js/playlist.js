
let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let trackPlaylist = document.querySelector('.trackPlaylist');
console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    trackPlaylist.innerHTML += '<li> Explora nuestra pagina y busca tus canciones favoritas para agregarla a tu playlist  </li>'
    console.log(trackPlaylist);
    
} else {

    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    });
}

function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            trackPlaylist.innerHTML += '<li>'  + track.title + '</a></li>' 
            
        })
        .catch(function(errors){
            console.log(errors);
            
        })
};

