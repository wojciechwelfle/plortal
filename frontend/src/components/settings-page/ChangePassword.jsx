import React from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
    return (
        <div className="change-password-container">
            <h3>Zmień hasło</h3>
            <form>
                <div>
                    <label>Aktualne hasło:</label>
                    <input type="password" name="current-password" />
                </div>
                <div>
                    <label>Nowe hasło:</label>
                    <input type="password" name="new-password" />
                </div>
                <div>
                    <label>Potwierdź nowe hasło:</label>
                    <input type="password" name="confirm-password" />
                </div>
                <button>Zmień hasło</button>
            </form>
        </div>
    );
};

export default ChangePassword;
