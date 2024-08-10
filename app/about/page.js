"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from 'react';
export default function About() {
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
                    <p>
                    About Our Road Traffic Accident Reporting System
                    </p>
                    </div>
                    <hr/>
                    {/* <p className="about" id="p2about">
                    </p> */}
                    <p className="about" id="p1about">
                    Welcome to our Road Traffic Accident Reporting System, your reliable partner in ensuring swift and efficient handling of road accident incidents. Our web application is designed to facilitate real-time reporting and management of road traffic accidents, aiming to enhance road safety and streamline emergency responses.
                     </p>
                   <div id="keyfeatures">
                   <span id="span">Key Features</span>
                        <ol type="num">
                            <li><span id="span">Real-Time Reporting: </span>Users can instantly report road accidents using their smartphones, providing essential details and geo-location data to emergency services.</li>
                            <li><span id="span">Comprehensive Data Collection: </span>Our system collects and stores detailed crash data, which can be used for follow-up examinations and analysis.</li>
                            <li><span id="span">User-Friendly Interface: </span>Designed with simplicity and ease of use in mind, our application ensures that users can quickly navigate and submit reports with minimal effort.</li>
                            <li><span id="span">Emergency Notifications: </span>Immediate notifications are sent to relevant authorities and emergency responders, enabling faster intervention and assistance.</li>
                            <li><span id="span">Data Analytics and Reporting: </span>Our system provides advanced analytics and reporting tools to help authorities understand accident trends and improve road safety measures.</li>
                            {/* <li><span id="span"> </span></li> */}
                        </ol>
                   </div>
                   <div id="whychooseus">
                   <span id="span">Why Choose Us?</span>
                        <ol type="bullet">
                          <li><span id="span">Reliability: </span>Count on our system to deliver timely and accurate accident reports.</li>
                          <li><span id="span">Efficiency: </span>Our streamlined processes ensure that every report is handled quickly and effectively.</li>
                          <li><span id="span">Innovation: </span>We utilize cutting-edge technology to enhance the functionality and responsiveness of our application.</li>
                          {/* <li><span id="span"> </span></li> */}npm install @auth0/nextjs-auth0
                        </ol>
                   </div>
                   <p className="about" id="p2about">Join us in making the roads safer for everyone. Together, we can make a significant impact on reducing road traffic accidents and improving emergency response times.</p>
                </div>
                
                <div className="col-sm-3">

                </div>
            </div>
           
        </div>
        <Footer />
       </>
        );
}