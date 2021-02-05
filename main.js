"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("add").addEventListener("click", makeMovie);
    document.getElementById("show").addEventListener("click", showInfo);
})

let makeMovie = function () {
    let title = document.getElementById("movie");
    let rating = document.getElementById("rating");

    let movie = new Movie(title.value, rating.value);

    if (movie.isValid()) {
        addMovie(movie);
    } else {
        alert("The data was no crrect and no movie data should be saved for that movie!")
    }


    title.value = ""
    rating.value = ""
    title.focus();

}

const movieList = [];

function addMovie(newMovie) {
    movieList.push(newMovie);
    console.log(movieList.length);

}

function showInfo() {

    let ul = document.getElementById("movie_list");
    ul.innerText = "";
    for (let i in movieList) {

        let li = document.createElement("li");
        li.innerHTML = movieList[i].toString();
        console.log(movieList[i].rating)
        ul.appendChild(li);

    }
}