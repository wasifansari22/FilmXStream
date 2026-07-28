import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const savedMovies = useSelector((state) => state.watchLater.movies);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#141414]/40 backdrop-blur-xl backdrop-saturate-150 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <Link to="/" >
                    <h1 className="text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                        FilmX<span className='text-white'>Stream</span>
                    </h1>
                </Link>

                <div className="flex gap-8">

                    <Link
                        to="/watchlater"
                        className="relative flex items-center gap-2 border border-red-600 px-3 sm:px-5 py-2 rounded-md text-sm sm:text-base text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >  <FaHeart />
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