"use client"
// import Contactuscard from "@/Components/Contactuscard";
import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
export const dynamic = 'force-dynamic';

export default function contact() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
             {/* <Header /> */}
            <div className="container-fluid">
                {/* <Contactuscard/> */}
                <div className="row" id="contactid">
                    <div className="col-md-3">

                    </div>
                    <div className="form_class col-md-6">
                        <div class="row mb-4">
                            {/* <label for="Username :" class="col-md-4 col-form-label col-form-label-md">Username</label> */}
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="Username" placeholder="Your Name" />
                            </div>
                        </div>
                        <div class="row mb-4">
                            {/* <label for="password :" class="col-sm-4 col-form-label">Password</label> */}
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div class="row mb-4">
                            {/* <label for="password :" class="col-sm-4 col-form-label">Password</label> */}
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="Subject" placeholder="Your Subject" />
                            </div>
                        </div>
                        <div class="row mb-4">
                            {/* <label for="password :" class="col-sm-4 col-form-label">Password</label> */}
                            <div class="col-sm-12">
                                <textarea type="text" class="form-control" id="comment" placeholder="Your Comment" />
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-success mb-3 rounded-20">Submit</button>
                            </div>
                            <div className='row mb-3'>
                                <p>if you dont have an Account click <span><a href='/signup'>sign up</a></span> to create Account ?</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}