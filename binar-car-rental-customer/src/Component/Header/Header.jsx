import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogout } from "../../Feature/Auth/auth-slice";


function Header() {
    const [sidebar, setSidebar] = useState('collapse');
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => {return state.auth});
    const navigate = useNavigate();

    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })

    const handleLogout = () => {
        dispatch(authLogout());
        alert('anda berhasil logout');
        navigate(0);
    }

    return (
        <section id="hero" style={{minHeight: '200px'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container mt-3">
                    <a className="navbar-brand text-light px-3 ml-3" href="/">BinarRent</a>
                    <button onClick={() => sidebar == 'collapse'? setSidebar(null): setSidebar('collapse')} style={{zIndex: '3'}} className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse ${sidebar}`} id='navbarNav'>
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#ourServices">Our Services</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#whyUs">Why Us</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#faq">FAQ</a>
                            </li>
                            <li className="nav-item mr-3">
                            {isLoggedIn? 
                                     <button className="nav-link btn bg-success text-light d-flex justify-content-center px-3" onClick={handleLogout}>Logout</button> :
                                     <button className="nav-link btn bg-success text-light d-flex justify-content-center px-3" onClick={() => navigate('/signup')}>Register</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}


export default Header;