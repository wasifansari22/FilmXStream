import React from "react";
import { HiXMark } from "react-icons/hi2";

const TrailerModal = ({ trailerKey, onClose }) => {
    if (!trailerKey) return null;

    return (
        <div className='fixed inset-0 bg-black/80 z-999 flex justify-center items-center px-4' onClick={onClose}>
            <div className='relative w-full max-w-5xl aspect-video' onClick={(e) => e.stopPropagation()}>
                {/* close button */}
                <button onClick={onClose}
                    className='absolute -top-12 right-0 text-white text-3xl hover:text-red-500 transition'>
                    <HiXMark className="text-4xl" />
                </button>

                {/* youtube player */}
                <iframe
                    className='w-full h-full rounded-xl'
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                    title='Movie Trailer'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default TrailerModal;
