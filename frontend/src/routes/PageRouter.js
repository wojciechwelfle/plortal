import React, { Component } from "react";
import Register from "../register-login/Register.js";
import Login from "../register-login/Login.js";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute.js";
import Home from "../home/Home.js";
import Lecturers from "../home/Lecturers.js";
class PageRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Register />} />
                        <Route path='/login' element={<Login />}/>
                        <Route path='/home' element={<ProtectedRoute path='/home' component={Home}  /> }/>
                        <Route path='/lecturers' element={<ProtectedRoute path='/lecturers' component={Lecturers}  /> }/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default PageRouter;