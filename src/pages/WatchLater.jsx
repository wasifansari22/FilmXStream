import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { FaHeartBroken, FaArrowLeft } from "react-icons/fa";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import Button from '../components/Button';
import EmptyState from "../components/EmptyState";

const WatchLater = () => {
  const savedMovies = useSelector((state) => state.watchLater.movies);

  return (
    <Layout className='min-h-screen bg-[#141414] text-white flex flex-col'>
      <section className='flex-1 pt-28 pb-10'>
        <div className="max-w-7xl mx-auto px-6">
          {/* <h1 className='text-4xl font-bold mb-3'>Watch Later</h1>
          <p className="text-gray-400 mb-8">Keep track of movies you don't want to miss.</p> */}
          <PageHeader
            title="❤️ Watch Later"
            subtitle="Keep track of movies you don't want to miss."
          >
            {savedMovies.length > 0 && (
              <p className="text-red-500 font-semibold">
                {savedMovies.length} Movie{savedMovies.length !== 1 ? "s" : ""} Saved
              </p>
            )}
          </PageHeader>

          {savedMovies.length > 0 && (
            <div className="mb-5">
              <Link
                to="/movies"
                className="inline-flex items-center text-red-500 hover:text-white transition-all duration-300"
              >
                <FaArrowLeft /> &nbsp; Back to Movies
              </Link>
            </div>
          )}

          {
            savedMovies.length === 0 ? (
              <EmptyState
                icon={
                  <FaHeartBroken className="text-red-500 text-5xl" />
                }
                title="Your Watch Later List is Empty"
                description="Save your favourite movies to watch later. Your saved movies will appear here."
                buttonText="Browse Movies"
                buttonLink="/movies"
              />
            ) :
              (
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
        </div>
      </section>


    </Layout>
  )
}

export default WatchLater;