import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            placeholder="🔍 Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 bg-[#1f1f1f] border border-gray-700 rounded-lg px-4 py-3 mb-8 text-white outline-none focus:border-red-500 transition-all"
        />
    );
};

export default SearchBar;