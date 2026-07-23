import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const savedMovies = useSelector((state) => state.watchLater.movies);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <Link to="/" >
                    <h1 className="text-red-600 text-3xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                        FilmX<span className='text-white'>Stream</span>
                    </h1>
                </Link>

                <div className="flex gap-8">

                    <Link
                        to="/watchlater"
                        className="relative flex items-center justify-center gap-2 border border-red-600 px-3 py-2 sm:px-5 sm:py-2 rounded-lg text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >  <FaHeart />
                        {/* <span className="sm:hidden">Saved</span> */}
                        <span className='hidden sm:inline'>Watch Later</span>
                        {savedMovies.length > 0 && (
                            <span className="absolute -top-2 -right-2 flex items-center justify-center bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full">
                                {savedMovies.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;