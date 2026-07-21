import React from 'react';
import { FaFilm, FaHeart, FaSearch, FaPlayCircle } from "react-icons/fa";

const features = [
    {
        icon: <FaFilm />,
        title: "Unlimited Movies",
        description: "Browse thousands of popular movies from TMDB."
    },
    {
        icon: <FaSearch />,
        title: "Smart Search",
        description: "Find your favourite movies instantly."
    },
    {
        icon: <FaHeart />,
        title: "Watch Later",
        description: "Save movies and continue watching anytime."
    },
    {
        icon: <FaPlayCircle />,
        title: "Watch Trailers",
        description: "Open official YouTube trailers with one click."
    }
];

const Features = () => {
    return (
        <section className="bg-[#141414] py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-4">
                    Why Choose <span className='text-red-600'>FilmX</span>Stream
                </h2>

                <p className="text-gray-400 text-center mb-14">
                    Everything you need to discover your next favourite movie.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#1d1d1d] rounded-xl p-8 text-center border border-gray-800 hover:border-red-500 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="text-red-600 text-4xl mb-5 flex justify-center">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400">
                                {feature.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;