import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/logo.png";
import IconFooter1 from "../../assets/icon_footer_1.png";
import IconFooter2 from "../../assets/icon_footer_2.png";
import IconFooter3 from "../../assets/icon_footer_3.png";
import IconFooter4 from "../../assets/icon_footer_4.png";
import IconFooter5 from "../../assets/icon_footer_5.png";

const Footer = () => {
  return (
    <div id="Footer" className="container mt-5">
      <div className="row">
        <div className="col-xl-3 text-wrap">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-xl-3">
          <div className="row menu gap-2">
            <a href="#OurService" class="text-decoration-none">Our services</a>
            <a href="#WhyUs" class="text-decoration-none">Why Us</a>
            <a href="#Testimonial" class="text-decoration-none">Testimonial</a>
            <a href="#FAQ" class="text-decoration-none">FAQ</a>
          </div>
        </div>
        <div className="col-xl-3 my-2">
          <p>Connect with us</p>
          <div className="d-flex gap-2">
            <img src={IconFooter1} alt=""></img>
            <img src={IconFooter2} alt=""></img>
            <img src={IconFooter3} alt=""></img>
            <img src={IconFooter4} alt=""></img>
            <img src={IconFooter5} alt=""></img>
          </div>
        </div>
        <div className="col-xl-3 mb-3">
          <p>Copyright Binar 2022</p>
          <img src={Logo} alt="logo-footer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
