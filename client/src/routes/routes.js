import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Public routes
import Dashboard from '../pages/dashboard/home';

// Authenticated routes

// Public routes path
const publicRoutes = [
    {
        path: '/',
        element: <Dashboard />,
    },
];

// Authenticated routes path
const authenticatedRoutes = [
    // Add more authenticated routes as needed
];

const Routers = () => (
    <Router>
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}

            {/* Authenticated routes */}
            {authenticatedRoutes.map((route, index) => (
                <PrivateRoute
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}

            {/* Redirect to home page if route not found */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
);

export default Routers;
