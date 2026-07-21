import React from "react";

const SkeletonCard = () => {
    return (
        <div className="animate-pulse">
            <div className="bg-gray-700 rounded-lg h-72"></div>

            <div className="mt-3 h-5 bg-gray-700 rounded"></div>

            <div className="mt-2 h-4 bg-gray-700 rounded w-2/3"></div>
        </div>
    );
};

export default SkeletonCard;