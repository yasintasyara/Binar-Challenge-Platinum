import React from "react";
import './Footer.css';


function Footer() {
    return (
        <footer id="footer">
            <div className="container pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="fw-bold">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p className="fw-bold">binarcarrental@gmail.com</p>
                        <p className="fw-bold">081-233-334-808</p>
                    </div>
                    <div className="col-lg-2 links">
                        <a href="#ourServices">
                            <p>Our Services</p> 
                        </a>
                        <a href="#whyUs">
                            <p>Why Us</p>
                        </a>
                        <a href="#testimonial">
                            <p>Testimonial</p>
                        </a>
                        <a href="#faq">
                            <p>FAQ</p>
                        </a>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <p className="fw-bold">Connect with us</p>
                        <div className="d-flex">    
                            <a href="#" className="mr-2">
                                <i className="fa-brands fa-facebook p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>
                            <a href="#" className="mr-2">
                                <i className="fa-brands fa-instagram p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>
                            <a href="#" className="mr-2">
                                <i className="fa-brands fa-twitter p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>  
                            <a href="#" className="mr-2">
                                <i className="fa-solid fa-envelope p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>  
                            <a href="#" className="mr-2">
                                <i className="fa-regular fa-message p-2" style={{color: 'white', backgroundColor: '#0D28A6', borderRadius: '50%'}}></i>
                            </a>  
                        </div>
                        
                    </div>
                    <div className="col-lg-3 mb-3">
                        <p className="fw-bold">Copyright Binar 2022</p>
                        <a className="navbar-brand px-3 text-light p-1" href="/">BinarRent</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;