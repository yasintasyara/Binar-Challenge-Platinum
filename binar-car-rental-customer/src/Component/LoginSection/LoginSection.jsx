import React from "react";
import "./LoginSection.css"


function LoginSection() {
    return (
        <section id="loginSection" className="mb-0">
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="leftside col-lg-6 border d-flex flex-column justify-content-sm-center align-items-center">
                    <form className="mx-3">
                        <div className="rectangle"></div>
                        <h1 className="w-100 my-4">Welcome Back!</h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email*</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password*</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn mt-3">Submit</button>
                        <p className="mt-4 d-flex justify-content-center">Don’t have an account?<a href="/signup">Sign Up for Free</a></p>
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

export default LoginSection;