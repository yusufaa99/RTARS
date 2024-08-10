"use client"
import Header from '@/components/Header';
// import Servicescard from "@/Components/Servicescard";
import { useEffect } from 'react';
export default function Services() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <div className="container-fluid">
                {/* <Header /> */}
                <div className="row" id="servicesid">
                    {/* <div className="col-md-12">
                        <Servicescard/>
                    </div> */}
                    <p> This is Our Services Page</p>
                </div>
                {/* <Footer/> */}
            </div>
        </>
    );
}