import React from 'react';
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieGrid;