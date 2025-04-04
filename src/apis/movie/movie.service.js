const Movie = require('./movie.model.js');

exports.createMovie = async (title, duration, price) => {
    const movie = new Movie({ title, duration, price });
    const savedMovie = await movie.save();
    return savedMovie;
}

exports.getAllMovie = async () => {
    const movie = await Movie.find();
    return movie;
}

