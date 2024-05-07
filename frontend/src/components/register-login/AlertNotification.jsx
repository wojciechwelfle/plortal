import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Alert from 'react-bootstrap/Alert';
import './AlertNotification.css';

const AlertNotification = forwardRef(({ variant, heading, message }, ref) => {
    const [visible, setVisible] = useState(false);
    const [alertVariant, setAlertVariant] = useState(variant);
    const [alertHeading, setAlertHeading] = useState(heading);
    const [alertMessage, setAlertMessage] = useState(message);

    const setAlert = (message) => {
        setAlertMessage(message);
        setVisible(true);
    };

    const setHeading = (heading) => {
        setAlertHeading(heading);
        setVisible(true);
    };

    const setVariant = (variant) => {
        setAlertVariant(variant);
        setVisible(true);
    };

    const handleDismiss = () => {
        setVisible(false);
    };

    useImperativeHandle(ref, () => ({
        setAlert,
        setHeading,
        setVariant,
        setVisible
    }));

    if (visible) {
        return (
            <div className="register-alert">
                <Alert
                    key={alertVariant}
                    variant={alertVariant}
                    onClose={handleDismiss}
                    dismissible
                >
                    <Alert.Heading>{alertHeading}</Alert.Heading>
                    {alertMessage}
                </Alert>
            </div>
        );
    }

    return null;
});

export default AlertNotification;
