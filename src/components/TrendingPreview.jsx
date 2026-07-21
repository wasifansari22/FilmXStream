import React from 'react';
import { Link } from "react-router-dom";

const TrendingPreview = () => {
    return (
        <section className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-4 text-center">
                    Trending Today
                </h2>

                <p className="text-gray-400 mb-8 text-center">
                    Explore the latest popular movies.
                </p>

                <div className="bg-[#1b1b1b] rounded-xl p-12 text-center">
                    <h3 className="text-2xl font-semibold">
                        Ready to start watching?
                    </h3>

                    <p className="text-gray-400 mt-4">
                        Browse hundreds of popular movies powered by TMDB.
                    </p>

                    <Link
                        to="/movies"
                        className="inline-block mt-8 bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg font-semibold"
                    >
                        Browse Movies
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default TrendingPreview;