import { Link } from "react-router-dom";

const EmptyState = ({ icon, title, description, buttonText, buttonLink, onButtonClick, }) => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center max-w-lg">

                {icon && (
                    <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-8">
                        {icon}
                    </div>
                )}

                <h2 className="text-4xl font-bold">
                    {title}
                </h2>

                <p className="text-gray-400 mt-5 leading-7">
                    {description}
                </p>

                {buttonText &&
                    (buttonLink ? (
                        <Link
                            to={buttonLink}
                            className="inline-block mt-10 bg-red-600 hover:bg-red-700 hover:scale-110 px-8 py-4 rounded-lg transition-all duration-300 font-semibold"
                        >
                            {buttonText}
                        </Link>
                    ) : (
                        <button
                            onClick={onButtonClick}
                            className="inline-block mt-10 bg-red-600 hover:bg-red-700  hover:scale-110 px-8 py-4 rounded-lg transition-all duration-300 font-semibold"
                        >
                            {buttonText}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default EmptyState;