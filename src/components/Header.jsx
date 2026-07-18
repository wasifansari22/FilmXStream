import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-red-600 text-4xl font-bold tracking-wide">
                    NetflixX
                </h1>

                <div className="flex gap-4">

                    <Link
                        to="/watchlater"
                        className="text-white hover:text-red-500 transition"
                    >
                        Watch Later
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;