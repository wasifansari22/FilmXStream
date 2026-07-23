import React from "react";

const MovieDetailsSkeleton = () => {
    return (
        <div className="animate-pulse max-w-7xl mx-auto px-6 py-12">

            <div className="flex flex-col md:flex-row gap-10">

                {/* Poster */}
                <div className="w-72 h-430px rounded-xl bg-gray-800"></div>

                {/* Details */}
                <div className="flex-1">

                    <div className="h-12 w-2/3 bg-gray-800 rounded"></div>

                    <div className="h-6 w-24 bg-gray-800 rounded mt-6"></div>

                    <div className="h-5 w-40 bg-gray-800 rounded mt-4"></div>

                    <div className="h-5 w-32 bg-gray-800 rounded mt-4"></div>

                    <div className="flex gap-3 mt-8">
                        <div className="h-8 w-24 bg-gray-800 rounded-full"></div>
                        <div className="h-8 w-24 bg-gray-800 rounded-full"></div>
                    </div>

                    <div className="space-y-3 mt-8">
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
                    </div>

                    <div className="flex gap-4 mt-10">
                        <div className="h-12 w-40 bg-gray-800 rounded"></div>
                        <div className="h-12 w-40 bg-gray-800 rounded"></div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default MovieDetailsSkeleton;