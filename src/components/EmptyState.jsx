import { Link } from "react-router-dom";
import Button from "./Button";
import { FaHeartBroken } from "react-icons/fa";

const EmptyState = ({ icon, title, description, buttonText, buttonLink, }) => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">

            <div className="text-center max-w-lg">

                {/* icon */}
                <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-8">
                    {/* {icon} */}
                    <FaHeartBroken className="text-red-500 text-5xl" />
                </div>

                {/* title */}
                <h2 className="text-4xl font-bold">
                    {title}
                </h2>

                {/* description */}
                <p className="text-gray-400 mt-5">
                    {description}
                </p>

                {/* button */}
                {buttonText && buttonLink && (
                    <Link
                        to={buttonLink}
                        className="inline-block mt-10 hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        <Button variant="primary">
                            {buttonText}
                        </Button>
                    </Link>
                )}

            </div>

        </div>
    );
};

export default EmptyState;