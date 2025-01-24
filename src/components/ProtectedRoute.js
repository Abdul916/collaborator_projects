import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext); // Access the user from AuthContext

    // If user exists, render the children; otherwise, navigate to the login page
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
