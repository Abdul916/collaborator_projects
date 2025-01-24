import React from 'react';
import { useNavigate } from "react-router-dom";
import './Footer.css';
import { SITETITLE } from '../Constants';

function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="pt-100 footer-3 footer division">
                <div className="container">
                    <div className="bottom-footer">
                        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                            <div className="col-lg-12 text-center center">
                                <div className="footer-copyright">
                                    <p className="p-sm"> © {currentYear} <a href="https://explorelogics.com/" className='link_site' target="_blank">{SITETITLE}</a>. <span>All Rights Reserved</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer