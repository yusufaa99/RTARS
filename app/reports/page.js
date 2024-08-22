"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import WelcomeNote from '@/components/WelcomeNote';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LeafletMap from '@/components/LeafletMap4'; // Correct import

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
                const result = await response.json();
                console.log('Report submitted successfully:', result);
                
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
                alert('Thank You, The Report submitted successfully:', result);
                setMessage('Thank you! The report was submitted successfully.');


                setDate('');
                setTime('');
                setLat(null);
                setLng(null);
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
        }
    };

    return (
        <>
            <div className="container">
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
                            <div className="row">
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
                            <div className="mb-3">
                                <label htmlFor="collisionResult" className="form-label">Collision Result</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="collisionResult"
                                    value={collisionResult}
                                    onChange={(e) => setCollisionResult(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="collisionDescription" className="form-label">Collision Description</label>
                                <textarea
                                    className="form-control"
                                    id="collisionDescription"
                                    rows="3"
                                    value={collisionDescription}
                                    onChange={(e) => setCollisionDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="injuriesDescription" className="form-label">Injuries Description</label>
                                <textarea
                                    className="form-control"
                                    id="injuriesDescription"
                                    rows="3"
                                    value={injuriesDescription}
                                    onChange={(e) => setInjuriesDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="damagesDescription" className="form-label">Damages Description</label>
                                <textarea
                                    className="form-control"
                                    id="damagesDescription"
                                    rows="3"
                                    value={damagesDescription}
                                    onChange={(e) => setDamagesDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Report</button>
                        </form>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </div>
            <Footer />
        </>
    );
}
