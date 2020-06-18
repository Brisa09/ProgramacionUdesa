let proxy = "https://cors-anywhere.herokuapp.com/";

let queryString  = location.search;

let searchParams = new URLSearchParams(queryString);

let idGenero = searchParams.get("id");

