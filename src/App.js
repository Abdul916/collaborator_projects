import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';
import ManageProjects from './components/account/ManageProjects';
import HomePage from './components/home/HomePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/LoginPage';
import Register from './components/auth/Register';
import Verify from './components/auth/Verify';
import ForgotPassword from './components/auth/ForgotPassword';
import About from './components/cms_pages/About';
import Create from './components/cms_pages/Create';
import AddProject from './components/account/AddProject';
import EditProject from './components/account/EditProject';
import UserProfile from './components/account/UserProfile';
import { ApiProvider } from './components/context/ApiContext';

function App() {
    const location = useLocation(); 
    const noFooterRoutes = ["/login", "/register", "/forgot-password", "/verify/:token"];
    return (
        <>
            <div id="page" class="page">
            <ApiProvider> 

                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/discover" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify/:token" element={<Verify />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={<ManageProjects />} />
                    <Route path="/add-project" element={<AddProject />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
                {!noFooterRoutes.includes(location.pathname) && <Footer />}
                {/* <Footer /> */}
            </ApiProvider>
            </div>
        </>
    );
}

export default App;
