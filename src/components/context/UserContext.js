import React, { createContext, useState, useContext } from 'react';
import { API_BASE_URL } from '../Constants';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const registerUser = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };
    const loginUser = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else {
                setError(data.message || 'Invalid email or password');
            }
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };
    const forgotPassword = async (email) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };
    return (
        <UserContext.Provider
            value={{ user, registerUser, loginUser, forgotPassword, error, loading }}
        >
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => useContext(UserContext);