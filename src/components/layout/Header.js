import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApi } from '../context/ApiContext';

function Header() {
    const { isAuthenticated, setIsAuthenticated  } = useApi();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        setIsAuthenticated(false); 
    };


    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <header id="header" className="tra-menu navbar-dark white-scroll">
                <div className="header-wrapper">
                    <div className="wsmobileheader clearfix">
                        <span className="smllogo">
                            <Link to="/">
                                <img className="lt-img" src="/assets/images/logo.png" alt="mobile-logo" />
                            </Link>
                        </span>
                        <Link id="wsnavtoggle" className="wsanimated-arrow">
                            <span />
                        </Link>
                    </div>
                    <div className="wsmainfull menu clearfix">
                        <div className="container clearfix">
                            <div className="desktoplogo">
                                <Link to="/" className="logo-black">
                                    <img className="lt-img" src="/assets/images/logo.png" alt="logo" />
                                    {/* <h6 className="ps-3">CiteEcho</h6> */}
                                </Link>
                            </div>
                            <nav className="wsmenu clearfix">
                                <ul className="wsmenu-list nav-theme">
                                    <li className="nl-simple" aria-haspopup="true">
                                        <Link to="/discover" className="h-link"> Discover </Link>
                                    </li>

                                    <li className="nl-simple" aria-haspopup="true">
                                        <Link to="/create" className="h-link"> Create </Link>
                                    </li>
                                    <li className="nl-simple" aria-haspopup="true">
                                        <Link to="/about" className="h-link"> About </Link>
                                    </li>
                                    {isAuthenticated ? (
                                        <li aria-haspopup="true">
                                            <Link href="#" className="h-link">Dashboard <span className="wsarrow"></span></Link>
                                            <ul className="sub-menu ico-10">
                                                <li aria-haspopup="true" className="h-link"><Link to="/dashboard">Dashboard</Link></li>
                                                <li aria-haspopup="true" className="h-link"><Link to="/change_password">Change password</Link></li>
                                                <li aria-haspopup="true" className="h-link"><Link onClick={handleLogout}>Logout</Link></li>
                                            </ul>
                                        </li>
                                    ) : (
                                        <li className="nl-simple reg-fst-link" aria-haspopup="true">
                                            <Link to="/login" className="h-link"> Login/Register </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header