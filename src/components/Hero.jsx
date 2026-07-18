import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero.jpg'

const Hero = () => {
    return (
        <>
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                        Unlimited Movies,
                        <br />
                        TV Shows and More
                    </h1>

                    <p className="mt-6 md:text-2xl max-w-2xl text-gray-300">
                        Watch anywhere. Cancel anytime.
                    </p>

                    <Link
                        to="/movies"
                        className="mt-10 bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg text-lg font-semibold shadow-xl"
                    >
                        Start Watching
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Hero;