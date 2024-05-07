import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Register from "../register-login/Register";
import Login from "../register-login/Login";
import HomePage from "../pages/HomePage";
import SchedulePage from "../pages/SchedulePage";
import NewsPage from "../pages/NewsPage";

import "../App.css";


const PageRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/home"
                        element={<ProtectedRoute path="/home" element={HomePage} />}
                    />
                    <Route
                        path="/schedule"
                        element={
                            <ProtectedRoute
                                path="/schedule"
                                element={SchedulePage}
                            />
                        }
                    />
                    <Route
                        path="/news"
                        element={
                            <ProtectedRoute path="/news" element={NewsPage} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default PageRouter;
