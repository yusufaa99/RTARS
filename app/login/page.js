"use client";
import { useEffect } from 'react';
import Header from '@/components/Header';
export default function Login() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
         <Header/>
        <div className="container-fluid">
           
            <div className="row" id="loginid">
                <div className="col-md-4">

                </div>
                <div className="form_class col-md-4">
                    <form className="row g-3" id='forms'>  
                    <div class="row mb-3">
                        <label for="Username :" class="col-md-4 col-form-label col-form-label-md">Username</label>
                        <div class="col-sm-8">
                            <input type="Username" class="form-control form-control-lg" id="Username" placeholder="Username or example@email.com" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password :" class="col-sm-4 col-form-label">Password</label>
                        <div class="col-sm-8">
                            <input type="password" class="form-control" id="password" placeholder="password" />
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-auto">
                            <button type="login" class="btn btn-dark mb-3 rounded-0">Login</button>
                        </div>
                        <div className='row mb-3'>
                            <p>if you dont have an Account click <span><a href='/signup'>sign up</a></span> to create Account ?</p>
                        </div>
                    </div>
                    
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
        </>
        );
}