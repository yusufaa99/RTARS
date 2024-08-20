"use client";
import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
import SignupButton from "./Signup_Button";
import LoginButton from "./Login_Button";
import LogoutButton from "./Logout_Button";
import ProfileButton from "./Profile_Button";
import ReportsButton from "./Reports_Button";
import LocationsButton from "./Location_Button";

function Header() {
  const { user, error, isLoading } = useUser();
  return (
    <nav class="navbar navbar-expand-lg bg-success px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img alt="SCHOOL logo" src="/pictures/Car accident Logo.png" style={{ backgroundColor: '#333', borderRadius: '50%', width: "70px", height: "50px"}}className="px-1" />
          RTARS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/about">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="/contact">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="/mission">Mission</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="/services">Our Services</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="/studentlist">Student List</a>
            </li> */}

            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Landingpage">Landing Page</a>
            </li> */}
            <li class="nav-item ">
              {/* dropdown */}
              {/* <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a> */}
              {/* <ul class="dropdown-menu"> */}
              {/* <li><a class="dropdown-item" href="/api/auth/signup"> Up</a></li> */}
              {/* <li></li> */}
              {/* <a class="bg-success text-danger  nav-link active" aria-current="true" href="/api/auth/login">Sign In</a> */}
              {/* </ul> */}

            </li>
            {!user && !isLoading && (
              <>
                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="true" href="/submitreport">Submit_Reports</a>
                </li>
                <li class="nav-item "> <SignupButton /></li>
                <li class="nav-item "><LoginButton /></li>


              </>
            )

            }
            {user && !isLoading && (
              <>

                <li class="nav-item "><ReportsButton /></li>
                <li class="nav-item "><ProfileButton /></li>
                <li class="nav-item "><LogoutButton /></li>
                <li class="nav-item "><LocationsButton /></li>
              </>
            )
            }
          </ul>
        </div>
        <div className="flex gap-4">

        </div>
      </div>
    </nav>

  )

}

export default Header;