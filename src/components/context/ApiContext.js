import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Constants';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('authToken') ? true : false);
    const [profile, setProfile] = useState(null);
    const [documents, setDocuments] = useState([]);
    const [projects, setProjects] = useState([]);
    const [affiliations, setAffiliations] = useState([]);
    const [collaboratorTypes, setCollaboratorTypes] = useState([]);

    const authHeaders = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };

    const handleError = (err) => {
        return { success: false, message: error.response?.data?.message || 'An error occurred' };
    };

    const register = async (formData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/signup`, formData);
            return response.data;
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    };

    const login = async (formData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/signin`, formData);
            if (response.data.token) {
                setIsAuthenticated(true);
                localStorage.setItem('authToken', response.data.token);
                return response.data;
            } else {
                return { success: false, message: response.data.message || 'Login failed' };
            }
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const forgotPassword = async (email) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
            return response.data;
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Forgot password request failed' };
        }
    };

    const verifyUser = async (token) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/verify-account`, { token });
            return response.data;
        } catch (error) {
            return { success: false, message: "Verification failed. Please try again." };
        }
    };

    // Profile functions
    const fetchProfile = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/profile`, authHeaders);
            setProfile(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            handleError(err);
        }
    };
    // Document and Project functions
    const fetchDocuments = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/get_my_documents`, authHeaders);
            setDocuments(response.data);
        } catch (error) {
            handleError(err);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/get-user-projects`, authHeaders);
            setProjects(response.data);
        } catch (error) {
            handleError(err);
        }
    };
    const getAffiliations = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/get_affiliations`);
            setAffiliations(response.data);
        } catch (error) {
            handleError(err);
        }
    };
    const getCollaboratorTypes = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/get_collaborator_types`);
            setCollaboratorTypes(response.data);
        } catch (error) {
            handleError(err);
        }
    };

    // const logout = () => {
    //     localStorage.removeItem('authToken');
    //     setIsAuthenticated(false);
    // };

    const logout = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/logout`);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    const resetPassword = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/reset-password`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };
    // Profile Functions
    const updateProfile = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/updateProfile`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    const updatePassword = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/updatePassword`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    // Project Functions
    const submitProject = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/project-submit`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    const editSubmission = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/edit_submission`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    const updateSubmission = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/update_submission`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    const updateVisibility = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/update_visibility`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    const reviewSubmission = async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/review-my-submission`, data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <ApiContext.Provider value={{
            register,
            login,
            isAuthenticated,
            setIsAuthenticated,
            forgotPassword,
            verifyUser,
            logout,
            profile,
            documents,
            projects,
            affiliations,
            collaboratorTypes,
            fetchProfile,
            fetchDocuments,
            fetchProjects,
            getAffiliations,
            getCollaboratorTypes,
            resetPassword,
            updateProfile,
            updatePassword,
            submitProject,
            editSubmission,
            updateSubmission,
            updateVisibility,
            reviewSubmission,
        }}>
            {children}
        </ApiContext.Provider>
    );
};

// Custom hook for using ApiContext
export const useApi = () => {
    return useContext(ApiContext);
};
