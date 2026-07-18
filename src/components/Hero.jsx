import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className="relative h-screen bg-black">
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Unlimited Movies,
                        <br />
                        TV Shows and More
                    </h1>

                    <p className="mt-6 text-lg md:text-2xl text-gray-300">
                        Watch anywhere. Cancel anytime.
                    </p>

                    <Link
                        to="/movies"
                        className="mt-10 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg text-lg font-semibold"
                    >
                        Start Watching
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Hero;