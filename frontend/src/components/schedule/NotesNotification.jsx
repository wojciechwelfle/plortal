import React, { useState, forwardRef, useImperativeHandle } from "react";
import Alert from "react-bootstrap/Alert";
import "./NotesNotification.css";

const NotesNotification = forwardRef(({ variantNote, messageNote }, ref) => {
    const [visibleNote, setVisibleNote] = useState(false);
    const [variant, setVariant] = useState(variantNote);
    const [message, setMessage] = useState(messageNote);

    const setNote = (message) => {
        setMessage(message);
        setVisibleNote(true);
    };

    const setVariantNote = (variant) => {
        setVariant(variant);
        setVisibleNote(true);
    };

    const handleDismiss = () => {
        setVisibleNote(false);
    };

    useImperativeHandle(ref, () => ({
        setNote,
        setVariantNote,
        setVisibleNote,
    }));

    if (visibleNote) {
        return (
            <div className="notes-alert">
                <Alert
                    key={variant}
                    variant={variant}
                    onClose={handleDismiss}
                    dismissible
                    style={{ fontSize: "var(--font-size)" }}
                >
                    {message}
                </Alert>
            </div>
        );
    }

    return null;
});

export default NotesNotification;
