import React from 'react';
import SkeletonCard from './SkeletonCard';

const Loader = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default Loader;