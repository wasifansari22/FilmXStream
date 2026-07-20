import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getMovieDetails, imageBaseUrl } from '../services/tmdbApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const fetchMovie = async () => {
    try {
      const data = await getMovieDetails(id);
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
      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-28">
        <Link
          to="/movies"
          className="text-red-500 hover:text-white transition duration-300"
        >
          ← Back to Movies
        </Link>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-xl shadow-xl"
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
          </div>

        </div>
      </div>

    </main>
  );
};

export default MovieDetails;