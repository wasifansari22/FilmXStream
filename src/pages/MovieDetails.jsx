import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getMovieDetails, imageBaseUrl } from '../services/tmdbApi';
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../redux/slices/watchLaterSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Footer from '../components/Footer';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const savedMovies = useSelector(state => state.watchLater.movies);
  const isSaved = movie ? savedMovies.some(item => item.id === movie.id) : false;

  const handleWatchLater = () => {
    if (isSaved) {
      dispatch(removeMovie(movie.id));
    } else {
      dispatch(addMovie(movie));
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const fetchMovie = async () => {
    try {
      const data = await getMovieDetails(id);
      // test the movie data from console.log
      // console.log(data)
      setMovie(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#141414] text-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#141414] text-white">

      <div
        className="relative h-[65vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="-mt-40 relative z-20 flex flex-col md:flex-row gap-10">
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className="w-72 rounded-xl shadow-2xl"
          />

          <div>
            <h1 className="text-5xl font-bold">
              {movie.title}
            </h1>

            <p className="mt-4 text-yellow-400 text-xl">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>

            <p className="mt-2 text-gray-400">
              Release Date: {movie.release_date}
            </p>

            <p className="mt-2 text-gray-400">
              Runtime: {movie.runtime} min
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-red-600 px-4 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mt-8 leading-8 text-gray-300">
              {movie.overview}
            </p>

            {/* watch later button */}
            <button
              onClick={handleWatchLater}
              className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 mt-3 cursor-pointer ${isSaved
                ? "bg-red-600 hover:bg-red-700"
                : "border border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                }`}
            >
              {isSaved ? <FaHeart /> : <FaRegHeart />}
              {isSaved ? "Saved" : "Watch Later"}
            </button>

            {/* back link */}
            <div className="mt-5">
              <Link
                to="/movies"
                className="inline-flex items-center text-red-500 hover:text-white transition-all duration-300"
              >
                ← Back to Movies
              </Link>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
};

export default MovieDetails;