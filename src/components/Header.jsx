import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-red-600 text-3xl md:text-4xl font-bold tracking-wide">
                    FilmXStream
                </h1>

                <div className="flex gap-8">

                    <Link
                        to="/watchlater"
                        className="flex items-center gap-2 border border-red-600 px-3 md:px-5 py-2 rounded-md text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 text-sm md:text-base"
                    >  <FaHeart />
                        Watch Later
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;