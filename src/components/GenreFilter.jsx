import React from 'react'

const GenreFilter = ({ genres, selectedGenre, setSelectedGenre, }) => {
    return (
        <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full md:w-64 bg-[#1f1f1f] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500 transition-all cursor-pointer"
        >
            <option value="">All Genres</option>

            {genres.map((genre) => (
                <option
                    key={genre.id}
                    value={genre.id}
                >
                    {genre.name}
                </option>
            ))}
        </select>
    );
};

export default GenreFilter;