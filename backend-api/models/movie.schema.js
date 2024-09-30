const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    title: {
        type: String
    },
    movie_url: {
        type: String
    },
    poster: {
        type: String
    },
    release_year: {
        type: Number
    },
    length_in_min: {
        type: Number
    },
    imdb_rating: {
        type: Number
    },
    rating_count: {
        type: Number
    },
    plot: {
        type: String
    },
    directors: {
        type: String
    },
    writers: {
        type: String
    },
    stars: {
        type: String
    },
    genres: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    uodatedAt: {
        type: Date,
        default: Date.now
    }
});

const movieModel = new mongoose.model('movies', searchSchema);

module.exports = movieModel;
