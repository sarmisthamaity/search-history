const movieModel = require("../models/movie.schema");

const createMovieData = async(data) => {
    const saveData = await movieSchema.create(data);
    return saveData;
}

const filterMovie = async(title) => {
        
    const movies = await movieModel.aggregate([
        {
            $match: {
                title: { $regex: title, $options: 'i' }
            },
        },
    ]);    

    return movies;
}

module.exports = {
    createMovieData,
    filterMovie
}
