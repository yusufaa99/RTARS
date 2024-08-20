"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import WelcomeNote from '@/components/WelcomeNote';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });



export default function Reports() {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (message) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000); // 5000 milliseconds = 5 seconds

            // Cleanup function to clear the timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, [message]);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [roadType, setRoadType] = useState('');
    const [vehicle1_licensePlate, setVehicle1LicensePlate] = useState('');
    const [vehicle1_make, setVehicle1Make] = useState('');
    const [vehicle1_model, setVehicle1Model] = useState('');
    const [vehicle2_licensePlate, setVehicle2LicensePlate] = useState('');
    const [vehicle2_make, setVehicle2Make] = useState('');
    const [vehicle2_model, setVehicle2Model] = useState('');
    const [driver1_name, setDriver1Name] = useState('');
    const [driver1_licenseNumber, setDriver1LicenseNumber] = useState('');
    const [driver2_name, setDriver2Name] = useState('');
    const [driver2_licenseNumber, setDriver2LicenseNumber] = useState('');
    const [collisionResult, setCollisionResult] = useState('');
    const [collisionDescription, setCollisionDescription] = useState('');
    const [injuriesDescription, setInjuriesDescription] = useState('');
    const [damagesDescription, setDamagesDescription] = useState('');

    const router = useRouter();
    const handleLocationSelect = (location) => {
        setLat(location.lat);
        setLng(location.lng);
        console.log("Location selected:", location);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (lat === null || lng === null) {
            console.error('Latitude or Longitude not set');
            return;
        }

        const formData = {
            date,
            time,
            lat,
            lng,
            roadType,
            vehicle1_licensePlate,
            vehicle1_make,
            vehicle1_model,
            vehicle2_licensePlate,
            vehicle2_make,
            vehicle2_model,
            driver1_name,
            driver1_licenseNumber,
            driver2_name,
            driver2_licenseNumber,
            collisionResult,
            collisionDescription,
            injuriesDescription,
            damagesDescription,
        };

        try {
            console.log('Submitting form data:', formData);

            const response = await fetch('http://localhost:3000/api/reports2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                router.push("/submitreport");
                // const text = await response.text(); // Read response as text
                // const result = JSON.parse(text); // Parse JSON
                const result = await response.json();
                console.log('Report submitted successfully:', result);
                // Send SMS after successful report submission
                const smsResponse = await fetch('http://localhost:3000/api/sms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (smsResponse.ok) {
                    console.log('SMS sent successfully');
                } else {
                    console.error('Failed to send SMS');
                }

                // Display a success message
                setMessage('Thank you! The report was submitted successfully.');

                alert('Thank You, The Report submitted successfully:', result);

                // Clear form data by resetting all state variables
                setDate('');
                setTime('');
                setLat('');
                setLng('');
                setRoadType('');
                setVehicle1LicensePlate('');
                setVehicle1Make('');
                setVehicle1Model('');
                setVehicle2LicensePlate('');
                setVehicle2Make('');
                setVehicle2Model('');
                setDriver1Name('');
                setDriver1LicenseNumber('');
                setDriver2Name('');
                setDriver2LicenseNumber('');
                setCollisionResult('');
                setCollisionDescription('');
                setInjuriesDescription('');
                setDamagesDescription('');
            }


        } catch (error) {
            console.error('Error submitting report:', error);
            setMessage('Error submitting report: ' + error.message);
            alert(('Error submitting report:', error.message));
        }
    };

    return (
        <>
            <div className="container">
                {/* <h1 className="my-4">Road Traffic Accident Reporting System</h1> */}
                {/* <WelcomeNote /> */}
                {showMessage && (
                    <div className="alert alert-info" role="alert">
                        {message}
                    </div>
                )}


                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                        <div className="lead welcome-note alert alert-info mt-3 mb-4">
                            <h4 className="alert-heading">Welcome to the Road Traffic Accident Reporting System</h4>
                            <p>Thank you for using our online reporting system. Your contribution is crucial in improving road safety and emergency response.</p>
                            <hr />
                            <p className="mb-0">Please fill out the form below with as much detail as possible. Accurate information helps us respond effectively and prevent future incidents.</p>
                            <ul className="mt-2">
                                <li>Ensure all details are correct to the best of your knowledge.</li>
                                <li>If you're unsure about any information, it's okay to indicate that.</li>
                                <li>Your report is confidential and will be used solely for official purposes.</li>
                            </ul>
                            <p>Your cooperation in this process is greatly appreciated. Stay safe on the roads!</p>
                        </div>

                        <form className='form mb-5' onSubmit={handleSubmit}>
                            <h2>Incident Details</h2>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <LeafletMap onLocationSelect={handleLocationSelect} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="roadType" className="form-label">Road Type</label>
                                <input type="text" className="form-control" id="roadType" value={roadType} onChange={(e) => setRoadType(e.target.value)} />
                            </div>
                            <div className="row">
                                <h2>Vehicle 1 Details</h2>
                                <div className="mb-3 col-sm-5">
                                    <label htmlFor="vehicle1_licensePlate" className="form-label">Vehicle 1 License Plate</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicle1_licensePlate"
                                        value={vehicle1_licensePlate}
                                        onChange={(e) => setVehicle1LicensePlate(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-sm-4">
                                    <label htmlFor="vehicle1_make" className="form-label">Vehicle 1 Make</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicle1_make"
                                        value={vehicle1_make}
                                        onChange={(e) => setVehicle1Make(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-sm-3">
                                    <label htmlFor="vehicle1_model" className="form-label">Vehicle 1 Model</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicle1_model"
                                        value={vehicle1_model}
                                        onChange={(e) => setVehicle1Model(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <h2>Vehicle 2 Details</h2>
                                <div className="mb-3 col-sm-5">
                                    <label htmlFor="vehicle2_licensePlate" className="form-label">Vehicle 2 License Plate</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicle2_licensePlate"
                                        value={vehicle2_licensePlate}
                                        onChange={(e) => setVehicle2LicensePlate(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-sm-4">
                                    <label htmlFor="vehicle2_make" className="form-label">Vehicle 2 Make</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicle2_make"
                                        value={vehicle2_make}
                                        onChange={(e) => setVehicle2Make(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-sm-3">
                                    <label htmlFor="vehicle2_model" className="form-label">Vehicle 2 Model</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicle2_model"
                                        value={vehicle2_model}
                                        onChange={(e) => setVehicle2Model(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='row'>
                                <h2>Driver 1 Details</h2>
                                <div className="mb-3 col-sm-6">
                                    <label htmlFor="driver1_name" className="form-label">Driver 1 Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="driver1_name"
                                        value={driver1_name}
                                        onChange={(e) => setDriver1Name(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    <label htmlFor="driver1_licenseNumber" className="form-label">Driver 1 License Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="driver1_licenseNumber"
                                        value={driver1_licenseNumber}
                                        onChange={(e) => setDriver1LicenseNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <h2>Driver 2 Details</h2>
                                <div className="mb-3 col-sm-6">
                                    <label htmlFor="driver2_name" className="form-label">Driver 2 Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="driver2_name"
                                        value={driver2_name}
                                        onChange={(e) => setDriver2Name(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    <label htmlFor="driver2_licenseNumber" className="form-label">Driver 2 License Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="driver2_licenseNumber"
                                        value={driver2_licenseNumber}
                                        onChange={(e) => setDriver2LicenseNumber(e.target.value)}
                                    />
                                </div>

                            </div>

                            <h2>Collision Details</h2>
                            <div className="form-group mb-3">
                                <label htmlFor="collisionResult">Collision Result</label>
                                <textarea
                                    className="form-control"
                                    id="collisionResult"
                                    value={collisionResult}
                                    onChange={(e) => setCollisionResult(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="collisionDescription">Collision Description</label>
                                <textarea
                                    className="form-control"
                                    id="collisionDescription"
                                    value={collisionDescription}
                                    onChange={(e) => setCollisionDescription(e.target.value)}
                                />
                            </div>
                            <h2>Injuries Details</h2>
                            <div className="form-group mb-3">
                                <label htmlFor="injuriesDescription">Injuries Description</label>
                                <textarea
                                    className="form-control"
                                    id="injuriesDescription"
                                    value={injuriesDescription}
                                    onChange={(e) => setInjuriesDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="damagesDescription">Damages Description</label>
                                <textarea
                                    className="form-control"
                                    id="damagesDescription"
                                    value={damagesDescription}
                                    onChange={(e) => setDamagesDescription(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn mb-50 btn-primary">Submit Report</button>

                        </form>
                    </div>
                    <div className='col-sm-2'>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


{/* collisionResult: 
- Two vehicles involved: a sedan and an SUV.
- Moderate damage to the front bumper and hood of the sedan.
- Minor damage to the rear bumper of the SUV.
- Driver of the sedan sustained minor injuries (whiplash).
- No injuries reported for the driver and passengers of the SUV.
- No fatalities.
- Airbags deployed in the sedan. */}

// // pages/reports.js

// "use client";
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import dynamic from 'next/dynamic';
// import Footer from '@/components/Footer';

// const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });

// const Reports = () => {
//     const [formData, setFormData] = useState({
//         date: '',
//         time: '',
//         location: { lat: '', lng: '' },
//         roadType: '',
//         vehiclesInvolved: [
//             {
//                 licensePlate: '',
//                 make: '',
//                 model: ''
//             },
//             {
//                 licensePlate: '',
//                 make: '',
//                 model: ''
//             }
//         ],
//         drivers: [
//             {
//                 name: '',
//                 licenseNumber: ''
//             },
//             {
//                 name: '',
//                 licenseNumber: ''
//             }
//         ],
//         injuriesAndDamages: {
//             injuriesDescription: '',
//             damagesDescription: ''
//         },
//         collisionResult: '',
//         collisionDescription: ''
//     });

//     const handleLocationSelect = (location) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             location: { lat: location.lat, lng: location.lng }
//         }));
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const keys = name.split('.');
//         setFormData((prevData) => {
//             const newData = { ...prevData };
//             if (keys.length === 2) {
//                 newData[keys[0]][keys[1]] = value;
//             } else {
//                 newData[name] = value;
//             }
//             return newData;
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await fetch('/api/submitreports', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const result = await response.json();
//             console.log('Report submitted successfully:', result);
//             // Reset form or redirect as needed
//         } catch (error) {
//             console.error('Error submitting report:', error);
//         }
//     };

//     return (
//         <>
//             <div className="container">
//                 <h1 className="my-4">Road Traffic Accident Reporting System</h1>
//                 <div className='row'>
//                     <div className='col-sm-3'></div>
//                     <div className='col-sm-6'>
//                         <form onSubmit={handleSubmit}>
//                             <h2>Incident Details</h2>
//                             <div className="mb-3">
//                                 <label htmlFor="date" className="form-label">Date</label>
//                                 <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="time" className="form-label">Time</label>
//                                 <input type="time" className="form-control" id="time" name="time" value={formData.time} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Location</label>
//                                 <LeafletMap onLocationSelect={handleLocationSelect} />
//                             </div>
//                             <h2>Vehicles Details</h2>
//                             {formData.vehiclesInvolved.map((vehicle, index) => (
//                                 <div key={index} className="mb-4">
//                                     <h4>Vehicle {index + 1}</h4>
//                                     <div className="row">
//                                         <div className="col-md-4">
//                                             <div className="form-group">
//                                                 <label htmlFor={`licensePlate${index}`}>License Plate</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     id={`licensePlate${index}`}
//                                                     name={`vehiclesInvolved.${index}.licensePlate`}
//                                                     value={vehicle.licensePlate}
//                                                     onChange={handleChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-md-4">
//                                             <div className="form-group">
//                                                 <label htmlFor={`make${index}`}>Make</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     id={`make${index}`}
//                                                     name={`vehiclesInvolved.${index}.make`}
//                                                     value={vehicle.make}
//                                                     onChange={handleChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-md-4">
//                                             <div className="form-group">
//                                                 <label htmlFor={`model${index}`}>Model</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     id={`model${index}`}
//                                                     name={`vehiclesInvolved.${index}.model`}
//                                                     value={vehicle.model}
//                                                     onChange={handleChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}

//                             <h2>Drivers Details</h2>
//                             {formData.drivers.map((driver, index) => (
//                                 <div key={index} className="mb-4">
//                                     <h4>Driver {index + 1}</h4>
//                                     <div className="row">
//                                         <div className="col-md-6">
//                                             <div className="form-group">
//                                                 <label htmlFor={`driverName${index}`}>Name</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     id={`driverName${index}`}
//                                                     name={`drivers.${index}.name`}
//                                                     value={driver.name}
//                                                     onChange={handleChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <div className="form-group">
//                                                 <label htmlFor={`licenseNumber${index}`}>License Number</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     id={`licenseNumber${index}`}
//                                                     name={`drivers.${index}.licenseNumber`}
//                                                     value={driver.licenseNumber}
//                                                     onChange={handleChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                             <h2>Collision Details</h2>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="collisionResult">Collision Result</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="collisionResult"
//                                     name="collisionResult"
//                                     value={formData.collisionResult}
//                                     onChange={handleChange}
//                                     required
//                                 ></textarea>

//                             </div>
                            
//                             <div className="form-group mb-3">
//                                 <label htmlFor="collisionDescription">Collision Description</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="collisionDescription"
//                                     name="collisionDescription"
//                                     value={formData.collisionDescription}
//                                     onChange={handleChange}
//                                     required
//                                 ></textarea>
//                             </div>
//                             <h2>Injuries Details</h2>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="injuriesDescription">Injuries Description</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="injuriesDescription"
//                                     name="injuriesAndDamages.injuriesDescription"
//                                     value={formData.injuriesAndDamages.injuriesDescription}
//                                     onChange={handleChange}
//                                     required
//                                 ></textarea>
//                             </div>

//                             <div className="form-group mb-3">
//                                 <label htmlFor="damagesDescription">Damages Description</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="damagesDescription"
//                                     name="injuriesAndDamages.damagesDescription"
//                                     value={formData.injuriesAndDamages.damagesDescription}
//                                     onChange={handleChange}
//                                     required
//                                 ></textarea>
//                             </div>

//                             <button type="submit" className="btn btn-primary">Submit Report</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Reports;


 
