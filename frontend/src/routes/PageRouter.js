import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";

import Register from "../register-login/Register";
import Login from "../register-login/Login";
import Home from "../pages/Home";
import NewsPage from "../pages/NewsPage";

import "../App.css";

class PageRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Register />} />
                        <Route path='/login' element={<Login />}/>
                        <Route path='/home' element={<ProtectedRoute path='/home' element={Home} />}/>
                        <Route path='/news' element={<ProtectedRoute path='/news' element={NewsPage} />}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default PageRouter;
