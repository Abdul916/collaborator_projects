import React, { createContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../Constants';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8000/api/user', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to fetch user data');
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        checkUser();
    }, []);

    const login = async (formData) => {
        const response = await axios.post('http://localhost:8000/api/login', formData);
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    const register = async (formData) => {
        await axios.post('http://localhost:8000/api/register', formData);
    };

    const forgotPassword = async (email) => {
        await axios.post('http://localhost:8000/api/forgot-password', { email });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                forgotPassword,
                logout,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;