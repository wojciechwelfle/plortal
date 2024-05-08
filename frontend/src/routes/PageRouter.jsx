import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SchedulePage from "../pages/SchedulePage";
import NewsPage from "../pages/NewsPage";
import Facility from "../pages/FacilityPage";

import "../App.css";

const PageRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<RegisterPage />} />
                    <Route exact path="/login" element={<LoginPage />} />
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
                        path="/facility"
                        element={
                            <ProtectedRoute path="/facility" element={Facility} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default PageRouter;
