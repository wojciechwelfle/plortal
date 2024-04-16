import React, { Component } from "react";
import "./App.css";
import PageRouter from "./routes/PageRouter.js";

class App extends Component {
    render() {
        return (
            <>
                <PageRouter />
            </>
        );
    }
}

export default App;
