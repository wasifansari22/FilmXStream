import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button"

const TrendingPreview = () => {
    return (
        <section className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-4 text-center">
                    Start Your Movie Journey
                </h2>

                <p className="text-gray-400 mb-8 text-center">
                    Explore the latest popular movies.
                </p>

                <div className="bg-linear-to-r from-[#1b1b1b] to-[#252525] rounded-xl p-12 text-center">
                    <h3 className="text-2xl font-semibold">
                        Ready to start watching?
                    </h3>

                    <p className="text-gray-400 mt-4">
                        Thousands of movies are waiting for you. Browse, save your favourites and enjoy official trailers.
                    </p>

                    <Link to="/movies">
                        <Button
                            variant="primary"
                            className="mt-8 border border-red-600 text-red-500 hover:bg-red-600 hover:scale-110 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold cursor-pointer"
                        >
                            Browse Movies
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default TrendingPreview;