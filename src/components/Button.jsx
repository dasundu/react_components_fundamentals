import React from "react";

const Button = ({ children, variant, size , onClick }) => {
    return (
        <button 
            className={`btn btn-${variant} btn-${size}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;