import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faCircleStop } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <div className="blockcode-fluid my-0">
            <footer className="page-footer bg-success">
                <div className="d-flex flex-column mx-auto py-0" style={{ width: '80%' }}>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="align-self-center">
                            <a href="/#" className="d-flex align-items-center p-0 text-dark">
                                {/* <img alt="SCHOOL logo" src="/pictures/schoollogo2.png" width="50px" /> */}
                                <span className="ms-3 h5 font-weight-bold">Accident Reporting System</span>
                            </a>
                            <p className="my-3 mx-3 text-justify" style={{ width: '500px' }}>
                                Welcome to our Road Traffic Accident Reporting System, your reliable partner in ensuring swift and efficient handling of road accident incidents. Our web application is designed to facilitate real-time reporting and management of road traffic accidents, aiming to enhance road safety and streamline emergency responses.
                            </p>
                           <center>
                           <div className="mt-5 my-0 px-50 text-justify">
                                <button className="btn btn-nocolor btn-flat p-2" style={{ backgroundColor: '#333', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3b5998' }} />
                                </button>
                                <button className="btn btn-nocolor btn-flat p-2" style={{ backgroundColor: '#333', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1DA1F2' }} />
                                </button>
                                <button className="btn btn-nocolor btn-flat p-2" style={{ backgroundColor: '#333', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#C13584' }} />
                                </button>
                            </div>
                           </center>


                            {/* <div>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faCircleStop} />
                            </div> */}
                        </div>
                        <div>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>RTARS</p>
                            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                                <li className="my-2">
                                    <a className="text-dark" href="/">Resources</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-dark" href="/about">About Us</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-dark" href="/contact">Contact</a>
                                </li>
                                <li className="my-2"><a className="text-dark" href="/table">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>Help</p>
                            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                                <li className="my-2">
                                    <a className="text-dark" href="/">Support</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-dark" href="/signup">Sign Up</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-dark" href="/login">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <small className="text-center mt-5">&copy; Road Traffic Accident Reporting System, 2024. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
