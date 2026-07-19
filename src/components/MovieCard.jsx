import React from 'react';
import { imageBaseUrl } from '../services/tmdbApi';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../redux/slices/watchLaterSlice';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {
    // change redux state
    const dispatch = useDispatch();
    // read redux state
    const savedMovies = useSelector((state) => state.watchLater.movies);

    const isSaved = savedMovies.some(
        (savedMovies) => savedMovies.id === movie.id
    );

    const handleWatchLater = () => {
        if (isSaved) {
            dispatch(removeMovie(movie.id));
        } else {
            dispatch(addMovie(movie));
        }
    };

    return (
        <div className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img
                src={`${imageBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover"
            />

            <div className="p-4">
                <h2 className="font-bold text-lg line-clamp-2">
                    {movie.title}
                </h2>
                <p className="mt-2 text-yellow-400">
                    ⭐ {movie.vote_average.toFixed(1)}
                </p>

                <button onClick={handleWatchLater}
                    className={`mt-4 w-full flex justify-center items-center gap-2 py-2 rounded-lg transition-all duration-300 
                ${isSaved ? "bg-red-600 hover:bg-red-700" : "border border-red-600 text-red-500 hover:bg-red-600 hover:text-white cursor-pointer"
                        }`}
                >
                    {isSaved ? <FaHeart /> : <FaRegHeart />}
                    {isSaved ? "Saved" : "Watch Later"}
                </button>

            </div>
        </div>
    );
};

export default MovieCard;