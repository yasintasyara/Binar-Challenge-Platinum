import React, { Fragment, useState} from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import PaymentSection from "../Component/PaymentSection/PaymentSection";


function Payment() {

    return (
        <Fragment>
            <Header />
            <PaymentSection/>
            <Footer />
        </Fragment>
    )
}

export default Payment;