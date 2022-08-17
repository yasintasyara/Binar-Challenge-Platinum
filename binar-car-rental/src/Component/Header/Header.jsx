import React, { useState } from "react";


function Header() {
    const [sidebar, setSidebar] = useState('collapse');

    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })

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
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}


export default Header;