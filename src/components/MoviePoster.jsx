import { useState } from "react";
import { imageBaseUrl } from "../services/tmdbApi";

const MoviePoster = ({ posterPath, title, className = "", }) => {
    const [loaded, setLoaded] = useState(false);

    const imageSrc = posterPath
        ? `${imageBaseUrl}${posterPath}`
        : "/placeholder-poster.png";

    return (
        <div className={`relative overflow-hidden ${className}`}>

            {/* Loading Skeleton */}
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-neutral-800" />
            )}

            <img
                src={imageSrc}
                alt={title}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={(e) => {
                    e.target.src = "/placeholder-poster.png";
                    setLoaded(true);
                }}
                className={`w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />

        </div>
    );
};

export default MoviePoster;