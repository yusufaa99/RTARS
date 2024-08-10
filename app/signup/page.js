"use client"
import { useEffect, useState } from 'react';
// import bg from "/public/pictures/home1.png";
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { POST } from '../api/(auth)/users/route';
import { useRouter } from 'next/navigation';

    
// use effect method
export default function Signup() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const [Fullname, setFullname] = useState("");
    const [Emailid, setEmail] = useState("");
    const [Phone, setphone] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [Zipcode, setZipcode] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


     const router = useRouter();

    //handle submit method
    const handlesubmit = async (e) => {

        e.preventDefault();

        if (!Fullname) {
            alert("Fullname Is Required !")
            return;
        }
        
        try {
            const res = await fetch("http://localhost:3000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({Fullname, Emailid, Phone, Password, ConfirmPassword, Address, City, State, Zipcode}),
                });

                if (res.ok) {
                    router.push("/signup");
                } else {
                    throw new Error("User creation not succesful ");
                }
            console.log("User created Succesful");

        } catch (error) {
            console.log("Error in user creation " + error);

        }// end of the catch block

    }// end of the handle submit

   
  
    // try {
    //     const res = await fetch("", {});
    // } catch (error) {
        
    // }
    return (
        
        <>
         {/* <Header/> */}
         <div className="container-fluid">
           
            <div className="row" id="signupid">
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">
                    <form className="row g-3" id='forms' action=''>
                    <div className="col-md-12">
                            <label htmlFor="Fulname" class="form-label">Fulname</label>
                            <input onChange={(e) => setFullname(e.target.value)} value={Fullname} type="text" class="form-control" id="Fullname" placeholder="Supply Fullname" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="Email" class="form-label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={Emailid} type="email" class="form-control" id="Emailid" placeholder="Exameple@xxx.xxx"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="phone no" class="form-label">Phone No</label>
                            <input onChange={(e) => setphone(e.target.value)} value={Phone} type="gsm" class="form-control" id="phone" placeholder="+234 xxxx xxxx"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="password" class="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={Password} type="password" class="form-control" id="Password" placeholder="********"/>
                        </div>
                        
                        <div className="col-md-12">
                            <label htmlFor="confirmPassword" class="form-label">ConfirmPassword4</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} type="password" class="form-control" id="ConfirmPassword" placeholder="********"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="Address" class="form-label">Address</label>
                            <input onChange={(e) => setAddress(e.target.value)} value={Address} type="text" class="form-control" id="Address" placeholder="1234 Main St" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" class="form-label">City</label>
                            <input onChange={(e) => setCity(e.target.value)} value={City} type="text" class="form-control" id="inputCity" placeholder="Supply city name"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" class="form-label">State</label>
                            <select onChange={(e) => setState(e.target.value)} value={State} id="State" class="form-select">
                                <option defaultValue>Choose...</option>
                                <option>Abuja</option>
                                <option>Bauchi</option>
                                <option>Kaduna</option>
                                <option>Kano</option>
                                <option>Katsina</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="Zipcode" class="form-label">Zip</label>
                            <input onChange={(e) => setZipcode(e.target.value)} value={Zipcode} type="text" class="form-control" id="Zip" placeholder="zipcode"/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                        <div className='row mb-3'>
                            <p>if you Already have an Account click <span><a href='/login'>Login</a></span> to Sign into your Account ?</p>
                        </div>
                    </form>
                </div>
                <div className="col-sm-3">

                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}