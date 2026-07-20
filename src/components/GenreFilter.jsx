import React from 'react'

const GenreFilter = ({ genres, selectedGenre, setSelectedGenre }) => {
    return (
        <div>
            <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-[#1f1f1f] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
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
        </div>
    );
};

export default GenreFilter;