import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-linear-to-t from-black to-[#111111] border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* logo */}
                <Link to="/"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }} className='text-gray-300 hover:text-red-500 transition'>
                    <h2 className="text-4xl font-bold text-red-600 text-center">
                        FilmX<span className='text-white'>Stream</span>
                    </h2>
                </Link>

                {/* TMDB attribution */}
                <p className="text-center text-gray-500 text-sm mt-5">
                    Movie information provided by TMDB API.
                </p>

                {/* copyright */}
                <p className="text-center text-gray-600 text-sm mt-5">
                    © 2026 FilmXStream. All Rights Reserved. Built with React, Redux Toolkit & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;