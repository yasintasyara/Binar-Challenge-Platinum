import React, { Fragment, useState} from "react";
import Footer from "../Component/Footer/Footer";
import HeroSection from "../Component/HeroSection/HeroSection";
import CarDetailSection from "../Component/CarDetailSection/CarDetailSection";
import SearchBar from "../Component/SearchBar/SearchBar";
import Header from "../Component/Header/Header";


function CarDetail() {

    return (
        <Fragment>
            <Header />
            < SearchBar />
            < CarDetailSection />
            < Footer />
        </Fragment>
    )
}

export default CarDetail;