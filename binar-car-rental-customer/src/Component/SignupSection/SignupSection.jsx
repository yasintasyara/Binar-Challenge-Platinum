import React from "react";
import "./SignupSection.css"



function SignupSection() {
    return (
        <section id="signupSection" className="mb-0">
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="leftside col-lg-6 border d-flex flex-column justify-content-sm-center align-items-center">
                    <form className="mx-3">
                        <div className="rectangle"></div>
                        <h1 className="w-100 my-4">Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input type="name" className="form-control" id="name" aria-describedby="name" placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Contoh: johndoe@gmail.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="createPassword">Create Password*</label>
                            <input type="password" className="form-control" id="createPassword" placeholder="6+ Karakter"/>
                        </div>
                        <button type="submit" className="btn mt-3">Sign Up</button>
                        <p className="mt-4 d-flex justify-content-center">Already have an account?<a href="/login">Sign In here</a></p>
                    </form>
                    </div>
                    <div className="rightside col-lg-6 border d-none d-lg-flex">
                        <h1>Binar Car Rental</h1>
                        <div className="image border">
                            <img src="/Assets/landing-page.png" alt="landing-page" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupSection;