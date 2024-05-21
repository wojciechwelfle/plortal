import React from "react";
import { Card } from "react-bootstrap";

const PanelHeader = ({ children }) => {
    return (
        <Card
            body
            style={{
                backgroundColor: "var(--main-color)",
                alignItems: "center"
            }}
        >
            <b style={{ color: "white" }}>
                {children}
            </b>
        </Card>
    );
};

export default PanelHeader;