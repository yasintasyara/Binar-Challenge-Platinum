import React from "react";
import './OurServices.css';


function OurServices() {
    return (
        <section id="ourServices" className="d-flex align-items-center">
            <div className="container">
                <div className="row border">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img className="img-fluid person-img" src="./Assets/person.png" alt="" />
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center border">
                        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul>
                            <li className="our-services mt-3">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                            <li className="our-services mt-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                            <li className="our-services mt-3">Sewa Mobil Jangka Panjang Bulanan</li>
                            <li className="our-services mt-3">Gratis Antar - Jemput Mobil di Bandara</li>
                            <li className="our-services mt-3">Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;