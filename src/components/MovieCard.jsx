import React from 'react';
import { imageBaseUrl } from '../services/tmdbApi';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../redux/slices/watchLaterSlice';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <div className="group bg-[#1b1b1b] rounded-xl overflow-hidden shadow-xl hover:shadow-red-600/20 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-red-500 flex flex-col h-full">
            <Link to={`/movie/${movie.id}`}>
                <div className="relative overflow-hidden">
                    <img
                        src={`${imageBaseUrl}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                    <h2 className="h-16 font-bold text-lg text-white line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                        {movie.title}
                    </h2>
                    <p className="mt-auto text-yellow-400 font-semibold flex items-center gap-1">
                        ⭐ IMDb {movie.vote_average.toFixed(1)}
                    </p>
                </div>
            </Link>


            <button onClick={handleWatchLater}
                className={`w-full h-12 flex justify-center items-center gap-2 font-medium transition-all duration-300 cursor-pointer ${isSaved
                    ? "bg-red-600 hover:bg-red-700"
                    : "border border-red-600 text-red-500 hover:bg-red-600 hover:text-white cursor-pointer"
                    }`}
            >
                {isSaved ? <FaHeart /> : <FaRegHeart />}
                {isSaved ? "Saved" : "Watch Later"}
            </button>


        </div>
    );
};

export default MovieCard;