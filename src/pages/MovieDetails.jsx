import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <main className='min-h-screen bg-[#141414] text-white flex justify-center items-center'>
      <div>
        <h1 className='text-4xl font-bold'>Movie ID</h1>
        <p className='mt-4 text-2xl'>{id}</p>
      </div>
    </main>
  );
};

export default MovieDetails;