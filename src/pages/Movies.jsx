import React from 'react'
import Header from '../components/Header'
import MovieGrid from '../components/MovieGrid'

const Movies = () => {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-6 pt-28 pb-10">
        <h1 className="text-4xl font-bold mb-8">
          Popular Movies
        </h1>

        <MovieGrid />
      </section>
    </main>
  )
}

export default Movies