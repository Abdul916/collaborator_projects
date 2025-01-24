import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';

function ForgotPassword() {
    const { forgotPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email);
            setMessage('Password reset link sent!');
        } catch (error) {
            setMessage('Failed to send reset link.');
        }
    };

    return (
        <>
            <Helmet>
                <title>Forgot Password | {SITETITLE}</title>
            </Helmet>
            <div id="login" className="register-page division">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="register-page-form">
                                <div className="register-form-title">
                                    <h4>Forgot Password</h4>
                                    <p>Enter your email address below and we'll send you a link to securely reset your password</p>
                                </div>
                                {message && <div className="alert alert-info">{message}</div>}
                                <form name="signinform" className="row sign-in-form" onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <input className="form-control email" type="email" name="email" value={email} onChange={(e) => setEmail({ email: e.target.value })} placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn r-06 btn--theme hover--black submit"> Reset My Password </button>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <p className="create-account"> <Link to="/login" className="color--theme"> Back to Login </Link>
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

export default ForgotPassword;
