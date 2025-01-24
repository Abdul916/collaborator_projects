import React, { useState, useContext, useEffect } from 'react';
import { useApi } from '../context/ApiContext';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';
import './Auth.css';

function LoginPage() {
    const { login, isAuthenticated, setIsAuthenticated  } = useApi();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate("/dashboard");
        }
    }, [navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            const response = await login(formData);
            if (response.msg === "errors") {
                let errorMessages = '';
                for (const field in response.response) {
                    if (response.response[field].length > 0) {
                        errorMessages += `${response.response[field].join(', ')}\n`;
                    }
                }
                setMessage(errorMessages);
            } else if (response.msg === "error") {
                setMessage(response.response);
            } else if (response.msg === "success") {
                setMessage(response.response);
                setTimeout(() => navigate("/dashboard"), 2000);
            } else {
                setMessage(response.response);
            }
        } catch (err) {
            setMessage("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login | {SITETITLE}</title>
            </Helmet>
            <div id="login" className="register-page division">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="register-page-form">
                                <div className="register-form-title">
                                    <h4>Welcome Back!</h4>
                                    <p>Login to access your account to get started.</p>
                                </div>
                                {message && <div className="alert alert-info">{message}</div>}
                                <form name="signinform" className="row sign-in-form" onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <input className="form-control email" type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="wrap-input">
                                            <span className="btn-show-pass ico-20">
                                                <span className="flaticon-visibility eye-pass" /></span>
                                            <input className="form-control password" type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter Your Password" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="reset-password-link">
                                            <p className="p-sm">
                                                <Link to="/forgot-password">Forgot your password?</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn r-06 btn--theme hover--black submit"> Log In </button>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <p className="create-account"> Don't have an account?{" "} <Link to="/register" className="color--theme"> Sign up </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
