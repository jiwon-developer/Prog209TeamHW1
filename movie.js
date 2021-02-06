"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("JavaScript:handleClick()").addEventListener("click", addMovie);
})



let addMovie = function(title, rating) {
    this.title = title;
    this.rating = rating;
    this.isValid = function() {}
    this.toString = function() {

    };
};



function addMovie() {

    if (isNaN(rating) || x < 1 || x > 5) {
        text = "Input not valid. Please rate movie from 1 to 5.";
    }
};

movie.prototype.toString = function movietoString() {
    return "Movie title: " + this.name + "Movie Rating: " + this.rating
};



let movie = document.getElementById("movie");
let rating = document.getElementById("rating");

console.log(addMovie.toString());