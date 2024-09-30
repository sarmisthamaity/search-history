require('dotenv').config();
const mongoose = require('mongoose');
const movieSchema = require("../models/movie.schema");
const movies = require("./movies.json");
const mongodbUrl = "mongodb+srv://sarmisthamaity:search@cluster0.wbu47.mongodb.net/searchdb";


const seedMovie = async () => {

    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`database connected securely`);
    }).catch((err) => {
        console.log(err);
    });

    try {
        await movieSchema.insertMany(movies);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users', error);
    } finally {
        mongoose.connection.close();
    }
};

seedMovie();
