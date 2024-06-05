import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SchedulePage from "../pages/SchedulePage";
import NewsPage from "../pages/NewsPage";
import Facility from "../pages/FacilityPage";
import MapPage from "../pages/MapPage";
import AdminPanelPage from "../pages/AdminPanelPage";
import SettingsPage from "../pages/SettingsPage";
import PlanPage from "../pages/PlanPage";
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
                                requiredRoles={["STUDENT", "TEACHER", "ADMIN"]}
                                element={SchedulePage}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/news"
                        element={
                            <ProtectedRoute
                                path="/news"
                                requiredRoles={["STUDENT", "TEACHER", "ADMIN"]}
                                element={NewsPage}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/map"
                        element={
                            <ProtectedRoute
                                path="/map"
                                requiredRoles={["STUDENT", "TEACHER", "ADMIN"]}
                                element={MapPage}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/facility"
                        element={
                            <ProtectedRoute
                                path="/facility"
                                requiredRoles={["STUDENT", "TEACHER", "ADMIN"]}
                                element={Facility}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/admin"
                        element={
                            <ProtectedRoute
                                path="/admin"
                                requiredRoles={["ADMIN"]}
                                element={AdminPanelPage}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/settings"
                        element={
                            <ProtectedRoute
                                requiredRoles={["STUDENT", "TEACHER", "ADMIN"]}
                                element={SettingsPage}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/plan"
                        element={
                            <ProtectedRoute
                                path="/plan"
                                requiredRoles={["STUDENT", "TEACHER", "ADMIN"]}
                                element={PlanPage}
                            />
                        }
                    />
                </Routes>
                
            </BrowserRouter>
        </>
    );
};

export default PageRouter;
