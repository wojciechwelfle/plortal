import React, { Component } from "react";
import Register from "../register-login/Register.js";
import Login from "../register-login/Login.js";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute.js";
import Home from "../home/Home.js";
import Sidebar from "../components/Sidebar.jsx";
import wykladowcy from "../home/wykladowcy.js";


class PageRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Register />} />
                        <Route path='/login' element={<Login />}/>
                        <Route path='/home' element={<ProtectedRoute path='/home' component={Home}  /> }/>
                        <Route path='/wykladowcy' element={<ProtectedRoute path='/wykladowcy' component={wykladowcy}  /> }/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default PageRouter;
/*  linia 17: <Route path='/home' element={<ProtectedRoute path='/home' component={Home} />}/> */