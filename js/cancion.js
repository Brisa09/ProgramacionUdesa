let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;

let searchParams = new URLSearchParams(queryString);

let idTrack = searchParams.get("id");
console.log(idTrack);