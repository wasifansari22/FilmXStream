import React from 'react';
import { imageBaseUrl } from '../services/tmdbApi';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../redux/slices/watchLaterSlice';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MoviePoster from './MoviePoster';
import Button from '../components/Button';
import { motion } from "framer-motion";
import toast from "react-hot-toast";

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
            toast("💔 Removed from Watch Later");
        } else {
            dispatch(addMovie(movie));
            toast.success("Added to Watch Later");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
            }}
            whileHover={{
                scale: 1.04,
                y: -6,
            }}
            className="group bg-[#1b1b1b] rounded-xl overflow-hidden shadow-xl">
            <Link to={`/movie/${movie.id}`}>
                <div className="relative overflow-hidden">

                    <MoviePoster
                        posterPath={movie.poster_path}
                        title={movie.title}
                        className="h-80"
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

            <Button
                variant={isSaved ? "danger" : "outline"}
                onClick={handleWatchLater}
                className="w-full"
            >
                {isSaved ? <FaHeart /> : <FaRegHeart />}
                {isSaved ? "Saved" : "Watch Later"}
            </Button>

        </motion.div>
    );
};

export default MovieCard;