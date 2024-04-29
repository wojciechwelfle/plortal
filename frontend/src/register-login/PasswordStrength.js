import React, { Component } from "react";
import "./PasswordStrength.css";

class PasswordStrength extends Component {
    render() {
        const { strength } = this.props;
        let strengthClass = '';

        if (strength === 'Weak') {
            strengthClass = 'Weak';
        } else if (strength === 'Medium') {
            strengthClass = 'Medium';
        } else if (strength === 'Strong') {
            strengthClass = 'Strong';
        }

        return (
            <div className={`PasswordStrength ${strengthClass}`}>
                <div className={`Rectangle ${strengthClass}`}></div>
                <div className="Text">Password strength:</div>
                <div className="Strength">{strength}</div>
            </div>
        );
    }
}

export default PasswordStrength;
