import React, {useState} from "react";


function HeroSection1() {
    const [sidebar, setSidebar] = useState('collapse');

    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })

    return (
        <section id="hero" style={{minHeight: '500px'}}>
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
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p className="mt-4 mr-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="car-background"></div>
                        <img className="car-img" src="./Assets/car.png" alt="car"/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection1;