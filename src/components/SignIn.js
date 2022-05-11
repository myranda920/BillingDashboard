import React from 'react';

import "../assets/css/material-dashboard.css"
// <!-- Nucleo Icons -->
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";

const SignIn = () => {
   return (
    <>
        <main className="main-content  mt-0">
            <div className="page-header align-items-start min-vh-100" style={ {backgroundImage: "url('https://s8.gifyu.com/images/man_bills.png')"} }>
            <span className="mask bg-gradient-dark opacity-6"></span>
            <div className="container my-auto">
                <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-body">
                        <form role="form" className="text-start">
                        <div className="input-group input-group-outline my-3">
                            <label className="form-label">Account ID</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-check form-switch d-flex align-items-center mb-3">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                        </div>
                        <p className="mt-4 text-sm text-center">
                            Forgot your account id?   
                            <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Submit a ticket</a>
                        </p>
                        </form>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </>
   )
}

export default SignIn;