class Movie {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

movie.prototype.toString = function movietoString() {
    return "Movie title: " + this.name + "Movie Rating: " + this.rating
};

let movieName = document.getElementById("name");
let movieRating = document.getElementById("rating");