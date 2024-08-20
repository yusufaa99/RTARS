"use client";
import { useEffect } from 'react';

export default function Services() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row" id="servicesid">
                    <div className="col-sm-2"></div>
                    <div className="col-md-8">
                        <h2 className="text-center my-4">Our Services</h2>
                        
                        <p>
                            The Road Traffic Accident Reporting System offers a comprehensive solution for managing and reporting traffic accidents efficiently. Our services include:
                        </p>

                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item">
                                <strong>Real-Time Accident Reporting:</strong> Instantly report traffic accidents with accurate location tracking and incident details.
                            </li>
                            <li className="list-group-item">
                                <strong>Driver and Vehicle Information Management:</strong> Store and manage detailed information about drivers and vehicles involved in accidents.
                            </li>
                            <li className="list-group-item">
                                <strong>Emergency Notification System:</strong> Automatically notify emergency responders and relevant authorities via email and SMS when an accident is reported.
                            </li>
                            <li className="list-group-item">
                                <strong>Accident Data Analytics:</strong> Analyze traffic accident data to identify patterns and improve road safety measures.
                            </li>
                            <li className="list-group-item">
                                <strong>Interactive Dashboard:</strong> Access a user-friendly dashboard for tracking reported accidents and generating reports.
                            </li>
                        </ul>

                        <p>
                            Our system is designed to enhance road safety and streamline the process of accident reporting and management, ensuring that help is dispatched quickly and efficiently.
                        </p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </>
    );
}









// "use client"
// import Header from '@/components/Header';
// // import Servicescard from "@/Components/Servicescard";
// import { useEffect } from 'react';
// export default function Services() {
//     useEffect(() => {
//         import("bootstrap/dist/js/bootstrap.bundle.min.js");
//     }, []);
//     return (
//         <>
//             <div className="container-fluid">
//                 {/* <Header /> */}
//                 <div className="row" id="servicesid">
//                     <div className="col-sm-2">

//                     </div>
//                     <div className="col-md-8">
//                     <p> This is Our Services Page</p>
//                     </div>
//                     <div className="col-sm-2">

//                     </div>
                 
//                 </div>
//                 {/* <Footer/> */}
//             </div>
//         </>
//     );
// }