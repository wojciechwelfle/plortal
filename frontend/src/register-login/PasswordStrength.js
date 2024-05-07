import React, { Component } from "react";
import "./PasswordStrength.css";

class PasswordStrength extends Component {
    render() {
        const { strength } = this.props;
        let strengthClass = '';

        if (strength === 'Weak') {
            strengthClass = 'weak';
        } else if (strength === 'Medium') {
            strengthClass = 'medium';
        } else if (strength === 'Strong') {
            strengthClass = 'strong';
        }

        return (
            <div className={`password-strength ${strengthClass}`}>
                <div className={`rectangle ${strengthClass}`}></div>
                {strengthClass.length !== 0 && <div className="text">Password strength:</div>}
                <div className="strength">{strength}</div>
            </div>
        );
    }
}

export default PasswordStrength;
