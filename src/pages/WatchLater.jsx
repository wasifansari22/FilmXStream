import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { div, main } from 'framer-motion/client';
import Footer from '../components/Footer';

const WatchLater = () => {
  const savedMovies = useSelector((state) => state.watchLater.movies);

  return (
    <main className='min-h-screen bg-[#141414] text-white'>
      <Header />

      <section className='max-w-7xl mx-auto px-6 pt-28 pb-10'>
        <h1 className='text-4xl font-bold mb-3'>Watch Later</h1>

        <div className="mb-5">
          <Link
            to="/movies"
            className="inline-flex items-center text-red-500 hover:text-white transition-all duration-300"
          >
            ← Back to Movies
          </Link>
        </div>

        {
          savedMovies.length === 0 ? (
            <div className='text-center mt-20'>
              <h2 className='text-2xl font-semibold'>No Movies saved yet 🍿</h2>
              <p className='text-gray-400 mt-3'>Start adding movies to your watch later list.</p>
              <Link to="/movies"
                className='inline-block mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md transition'>Browse Movies</Link>
            </div>
          ) :
            (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {
                  savedMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie} />
                  ))
                }
              </div>
            )
        }
      </section>
      <Footer />
    </main>
  )
}

export default WatchLater;