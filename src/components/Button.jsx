import React from "react";

const Button = ({ children, variant = "primary", onClick, disabled = false, className = "", ...props }) => {
    const baseStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-300";
    const variants = {
        primary:
            "bg-red-600 hover:bg-red-700 text-white",

        secondary:
            "bg-white text-black hover:bg-gray-200",

        outline:
            "border border-red-600 text-red-500 hover:bg-red-600 hover:text-white",

        danger:
            "bg-red-700 hover:bg-red-800 text-white",

        disabled:
            "bg-gray-600 text-gray-300 cursor-not-allowed",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${disabled
                ? variants.disabled
                : variants[variant]
                } ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;  