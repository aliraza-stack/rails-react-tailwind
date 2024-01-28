// src/routes/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Custom PrivateRoute component to handle authenticated routes
const PrivateRoute = ({ component: Component, ...rest }) => {
    // Replace the condition below with your authentication logic
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
            }
        />
    );
};

export default PrivateRoute;
