import React, { Component } from "react";
import Register from "../register-login/Register.js";
import Login from "../register-login/Login.js";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute.js";
import Home from "../home/Home.js";

class PageRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" Component={ Register }/>
                        <Route path="/login" Component={ Login }/>
                        <Route exact path='/home' element={<ProtectedRoute path="/accounts" component={ Home } isAuth={ true }/>} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default PageRouter;
