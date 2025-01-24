import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../context/ApiContext'; 
import { Helmet } from 'react-helmet';
import { SITETITLE } from '../Constants';

const Verify = () => {
    const { verifyUser } = useApi();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    const { token } = useParams(); 
    console.log("Token from URL:", token);

    const hasSentRequest = useRef(false);

    useEffect(() => {
        if (hasSentRequest.current) return;
        hasSentRequest.current = true;

        if (!token) {
            setMessage("Invalid verification link.");
            setLoading(false);
            return;
        }

        const verifyEmail = async () => {
            setLoading(true);
            try {
                const response = await verifyUser(token);
                if (response.msg === "error") {
                    setMessage(response.response);
                } else if (response.msg === "success") {
                    setMessage(response.response);
                    setTimeout(() => navigate("/login"), 2000);
                } else {
                    setMessage(response.response);
                }
            } catch (error) {
                console.error(error);
                setMessage("An error occurred. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        verifyEmail();
    }, [token, navigate, verifyUser]);

    return (
        <>
            <Helmet>
                <title>Verify Account | {SITETITLE}</title>
            </Helmet>
            <div id="login" className="register-page division">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="register-page-form">
                                <div className="register-form-title">
                                    <h4>Account Verification</h4>
                                    <p>
                                        {loading ? (
                                            <div className="loading">Verifying your account...</div>
                                        ) : (
                                            <div className="alert alert-info">{message}</div>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Verify;
