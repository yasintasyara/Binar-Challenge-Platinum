import React, { Fragment} from "react";
import Footer from "../Component/Footer/Footer";
import CarSection from "../Component/CarSection/CarSection";
import HeroSection1 from "../Component/HeroSection/HeroSection1";


function Car() {
    return (
        <Fragment>
            <HeroSection1 />
            <CarSection />
            <Footer />
        </Fragment>
    )
}

export default Car;