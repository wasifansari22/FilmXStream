import React from 'react';
import { imageBaseUrl } from '../services/tmdbApi';

const MovieCard = ({ movie }) => {
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
            </div>
        </div>
    );
};

export default MovieCard;