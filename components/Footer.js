import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
function Footer() {

    return (
        <div class="blockcode-fluid">
        <footer class="page-footer bg-success">
            <div class="d-flex flex-column mx-auto py-5" style={{ width: '80%', }}>
                <div class="d-flex flex-wrap justify-content-between">
                    <div class="align-self-center">
                        <a href="/#" class="d-flex align-items-center p-0 text-dark">
                            {/* <img alt="SCHOOL logo" src="/pictures/schoollogo2.png" width="50px" /> */}
                            <span class="ms-3 h5 font-weight-bold" >Accident Reporting System</span>
                        </a>
                        <p class="my-3 mx-3" style={{ width: '250px' }}>
                            We are creating High Quality Education Resources and tools to Aid developers during the
                            developement of their projects
                        </p>
                        <div class="mt-5">
                            
                            <button class="btn btn-dark btn-flat p-2">
                                <i class="fa fa-facebook"></i>
                            </button>
                            <button class="btn btn-dark btn-flat p-2">
                                <i class="fa fa-twitter"></i>
                            </button>
                            <button class="btn btn-dark btn-flat p-2">
                                <i class="fa fa-instagram"></i>
                            </button>

                        </div>
                        <div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
      />
      <FontAwesomeIcon
        icon={faCircleStop}
      />
    </div>
                    </div>
                    <div>
                        <p class="h5 mb-4" style={{ fontweight: '600' }}>RTARS</p>
                        <ul class="p-0" style={{ liststyle: 'none', cursor: 'pointer' }} >
                            <li class="my-2">
                                <a class="text-dark" href="/">Resources</a>
                            </li>
                            <li class="my-2">
                                <a class="text-dark" href="/about">About Us</a>
                            </li>
                            <li class="my-2">
                                <a class="text-dark" href="/contact">Contact</a>
                            </li>
                            <li class="my-2"><a class="text-dark" href="/table">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="h5 mb-4" style={{ fontweight: '600' }}>Help</p>
                        <ul class="p-0" style={{ liststyle: 'none', cursor: 'pointer' }}>
                            <li class="my-2">
                                <a class="text-dark" href="/">Support</a>
                            </li>
                            <li class="my-2">
                                <a class="text-dark" href="/signup">Sign Up</a>
                            </li>
                            <li class="my-2">
                                <a class="text-dark" href="/login">Sign In</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <small class="text-center mt-5">&copy; Road Trafic Accident Reporting System, 2024. All rights reserved.</small>
            </div>
        </footer>
    </div>
    )
}


export default Footer;