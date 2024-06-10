import React from "react";
import "./PasswordStrength.css";

const PasswordStrength = ({ strength }) => {
    let strengthClass = "";
    let displayText = "";

    if (strength === "Weak") {
        strengthClass = "weak";
        displayText = "Niebezpieczne";
    } else if (strength === "Medium") {
        strengthClass = "medium";
        displayText = "Słabe";
    } else if (strength === "Strong") {
        strengthClass = "strong";
        displayText = "Silne";
    }

    return (
        <div className={`password-strength ${strengthClass}`}>
            <div className={`rectangle ${strengthClass}`}></div>
            {strengthClass.length !== 0 && (
                <div className="text">Siła hasła:</div>
            )}
            <div className="strength">{displayText}</div>
        </div>
    );
};

export default PasswordStrength;
