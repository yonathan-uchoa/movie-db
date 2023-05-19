import mongoose from 'mongoose';
import MovieSchema from '../schemas/movie-schema.js';

const Movie = mongoose.model('movie', MovieSchema);


Movie.insertMovie = movie => {
    const newMovie = new Movie({
        id: movie.id,
        name: movie.name,
        rating: movie.rating,
        createAt: new Date(),
        updateAt: new Date()
    });

    return newMovie.save();
};

Movie.findOneUser = async id => {
    return Movie.findOne({ id }).lean()
    
};


Movie.updateMovie = async (id, movie) => {    
    return Movie.updateOne({ id }, { $set: movie });
};

export default Movie;