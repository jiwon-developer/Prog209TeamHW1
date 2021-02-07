/* let Movie = function(title, rating) {
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

console.log(addMovie.toString()); */


let Movie = function(title, rating) {

    this.title = title;
    this.rating = parseInt(rating);
    this.isValid = function() {


        if (!this.title) {
            console.log("Title ckck")
            return false;

        } else if (isNaN(this.rating) || this.rating < 1 || this.rating > 5) {
            console.log("rating ckck")
            return false;

        } else {
            return true;
        }

    };

    this.toString = function() {

        return this.title + "s rating : " + this.rating;
    };

};