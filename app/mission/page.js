"use client"
import Header from "@/components/Header";

import { useEffect } from 'react';
export default function mission() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            {/* <Header /> */}
            <div className="container-fluid" id="container">

                <div className="row my-5">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6" id="div2">

                        <div className="aboutheader">
                            <p><b>
                            Our Mission
                            </b></p>
                        </div>
                        <hr />
                        {/* <p className="about" id="p2about">
                        </p> */}
                        <p className="about" id="p1about">
                        Our mission is to provide a robust platform that allows users to report road accidents promptly, ensuring that critical information reaches the relevant authorities without delay. By leveraging modern technology, we strive to reduce response times, improve data accuracy, and ultimately save lives.
                        </p>
                    </div>

                    <div className="col-sm-3">

                    </div>
                </div>

            </div>
        </>
    );
}