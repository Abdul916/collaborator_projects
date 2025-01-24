import React, { useState, useContext } from 'react';
import { useApi } from '../context/ApiContext';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';
import './Auth.css';

function Register() {
    const { register } = useApi();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ full_name: "", email: "", password: "", password_confirmation: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        if (formData.password !== formData.password_confirmation) {
            setMessage("Passwords do not match");
            setLoading(false);
            return;
        }
        try {
            const response = await register(formData);

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
                setTimeout(() => navigate("/login"), 2000);
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
                <title>Register | {SITETITLE}</title>
            </Helmet>
            <div id="login" className="register-page division">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="register-page-form">
                                <div className="register-form-title">
                                    <h4>Register</h4>
                                    <p>Create your account to get started</p>
                                </div>
                                {message && <div className="alert alert-info">{message}</div>}
                                <form name="signinform" className="row sign-in-form" onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="full_name" value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} placeholder="Enter Your Full Name" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="wrap-input">
                                            <span className="btn-show-pass ico-20">
                                                <span className="flaticon-visibility eye-pass" /></span>
                                            <input className="form-control password" type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter Your Password" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="wrap-input">
                                            <span className="btn-show-pass ico-20">
                                                <span className="flaticon-visibility eye-pass" /></span>
                                            <input className="form-control password" type="password" name="password" value={formData.password_confirmation} onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} placeholder="Repeat Your Password" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn r-06 btn--theme hover--black submit"> Register </button>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <p className="create-account"> Already registered? <Link to="/login" className="color--theme"> Login here </Link>
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

export default Register;
