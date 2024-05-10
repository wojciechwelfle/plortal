import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import SchedulePage from "../pages/SchedulePage";
import NewsPage from "../pages/NewsPage";

import "../App.css";
import MapPage from "../pages/MapPage";

const PageRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<RegisterPage />} />
                    <Route exact path="/login" element={<LoginPage />} />

                    <Route
                        exact
                        path="/home"
                        element={
                            <ProtectedRoute path="/home" element={HomePage} />
                        }
                    />
                    <Route
                        exact
                        path="/schedule"
                        element={
                            <ProtectedRoute
                                path="/schedule"
                                element={SchedulePage}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/news"
                        element={
                            <ProtectedRoute path="/news" element={NewsPage} />
                        }
                    />
                    <Route
                        exact
                        path="/map"
                        element={
                            <ProtectedRoute path="/map" element={MapPage} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default PageRouter;
